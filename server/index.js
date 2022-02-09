var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var async = require('async');
var axios = require('axios');
var path = require('path');

var danceId = require("./danceId");
const { CronJob } = require('cron');

var client_id = 'ac3963cdf00943d2bca5b4444e205bdb'; // Your client id
var client_secret = '15fff42b994f4c4ab47326209a5946d5'; // Your secret
var redirect_uri = 'http://localhost:80/callback'; // Your redirect uri

var client_access_token = '';
/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function (length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

const corsOptions = {
  origin: '*',
}

//app.use(express.static(__dirname + '/public'))
app.use(cors());
app.use(cookieParser());

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

app.get('/login', function (req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email';
  res.send('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/callback', function (req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter
  console.log("entered callback");

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function (error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
          refresh_token = body.refresh_token;

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function (error, response, body) {
          console.log(body);
        });

        console.log("got token")

        // we can also pass the token to the browser to make requests from there
        // res.redirect('/#' +
        //   querystring.stringify({
        //     access_token: access_token,
        //     refresh_token: refresh_token
        //   }));
        res.send({
          'access_token': access_token
        });
      } else {
        console.log("oopsie")
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function (req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});

app.get('/client_token', function (req, res) {
  newClientToken();
  // use the access token to access the Spotify Web API
  res.send({
    'access_token': client_access_token
  });
});

function newClientToken() {
  console.log("getting new token from client credentials");
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      client_access_token = body.access_token;
      console.log("got a new client token: " + client_access_token);
    }
  });
};

async function getSongData(req) {
  let uri;
  console.log(req.query.artist);
  console.log(req.query.song);
  if (req.query.artist === undefined || req.query.artist === '') {
    uri = "https://api.spotify.com/v1/search?type=track&q=track%3A" + req.query.song;
  } else {
    uri = "https://api.spotify.com/v1/search?type=track&q=track%3A" + req.query.song + "+artist%3A" + req.query.artist;
  }

  const response = await axios.get(uri, {
    headers: { 'Authorization': 'Bearer ' + client_access_token }
  })
  return response.data;
}

async function getAnalysis(spotifyId) {
  //get track analytics
  const uri = 'https://api.spotify.com/v1/audio-analysis/' + spotifyId;
  const response = await axios.get(uri, {
    headers: { 'Authorization': 'Bearer ' + client_access_token }
  })
  //console.log(response.data);
  return response.data;
}

app.get('/song_data', async function (req, res) {
  //find spotify song id
  console.log("finding song");

  //TODO: add retry
  var song_data;
  var spotify_id = '';
  var analysis;
  var dances;
  try {
    const data = await getSongData(req);
    console.log(data);
    if (data === undefined || data.tracks.items.length === 0) {
      return res.status(404);
    }
    song_data = data.tracks.items[0];
    spotify_id = song_data.id
    console.log("found spotify id " + spotify_id);
    analysis = await getAnalysis(spotify_id);
    dances = danceId.identifyDances(analysis.track.tempo, analysis.track.time_signature);
  } catch (err) {
    throw err;
  }
  return res.status(200).send({
    id: spotify_id,
    song: song_data.name,
    artist: song_data.artists[0].name,
    image: song_data.album.images[0].url,
    preview: song_data.preview_url,
    tempo: analysis.track.tempo,
    time_signature: analysis.track.time_signature,
    dances: dances
  });

})

//get a new spotify token every 50 minutes
var tokenJob = new CronJob('*/50 * * * *', newClientToken);

app.use(express.static(path.join(__dirname, '../front-end/build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front-end/build', 'index.html'));
});

console.log('Listening on 80');
app.listen(80, function () {
  newClientToken();
  tokenJob.start();
});