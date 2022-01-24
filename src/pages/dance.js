// const Dance = () => {

import React from "react";

class Dance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            iSong: '',
            iArtist: '',
            song: '',
            artist: '',
            image: '',
            tempo: '',
            time_signature: '',
            preview: '',
            dances: [],
            showInfo: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({...this.state, 
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var song = this.state.iSong;
        fetch('/song_data?'+ new URLSearchParams({
            song: song,
            artist: this.state.iArtist,
        }))
            .then((response) => response.json())
            .then((body) => {
                console.log("song submitted: " + song);
                console.log("received analysis: " + body);
                this.setState({ 
                    song: body.song,
                    artist: body.artist,
                    image: body.image,
                    preview: body.preview,
                    tempo: body.tempo,
                    time_signature: body.time_signature,
                    dances: body.dances
                 });
                this.setState({ showInfo: true });
            })
            .catch((error) => {
                console.log(error);
            });


    }

    render() {
        return (
            <header className="App-header">
                <p>
                    Lets find what dances you can do to a song!
                </p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Song title:
                        <input type="text" name="iSong" value={this.state.iSong} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Artist (optional):
                        <input type="text" name="iArtist" value={this.state.iArtist} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <input type="submit" value="Search!" />
                </form>
                {this.state.showInfo &&
                    <div>
                        <p>Song selected: {this.state.song} by {this.state.artist}</p>
                        <br></br>
                        <img src={this.state.image} width="300" height="300"/>
                        <br></br>
                        <p>Tempo: {this.state.tempo}</p>
                        <p>Time Signature: {this.state.time_signature}</p>
                        <br></br>
                        <p>Dances: 
                        {this.state.dances.map((dance) => (
                            <li>{dance}</li>
                        ))}
                        </p>
                    </div>
                }
            </header>
        );
    }
}

export default Dance;