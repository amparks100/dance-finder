import React from 'react';
import latinImg from '../../images/latin-dance2.jpg'
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './info-am-in.css';

const LatinInfo = () => {
    return (
        <div>
            <header className="App-header">
                <div className='imgContainer'>
                    <img src={latinImg} alt="Latin Dance Competition" />
                </div>
                <br />
                <h1 style={{ fontFamily: 'apple chancery' }}>Rhythm/Latin Dances</h1>
                <br />
                <div className='american-international-container'>
                    <div className='american-international-child'>
                        <h2 style={{ fontFamily: 'apple chancery', textDecoration: 'underline' }}>American Rhythm</h2>
                        <p style={{fontSize: '18px', textAlign: 'left'}}>
                            <h4 id="cha cha">Cha Cha</h4>
                            120-128 BPM <a href='https://open.spotify.com/playlist/0Up93iwIIc391iyVwfYdLa?si=6cb688b115d34d1e'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            An exciting, syncopated Latin dance which originated in the 1950's as a slowed-down Mambo. The Cha Cha gets its name and character from its distinct repetitive foot rhythm. 
                            <br/>
                            <hr/>
                            <h4 id="rhumba">Rhumba</h4>
                            120-144 BPM <a href='https://open.spotify.com/playlist/44O7cWvCh5RHNNZdX1mYO4?si=4e54414a20de4c39'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A slow- to medium-tempo Latin American dance in 4/4 time, which is characterized by sensual, provocative movements and gestures, Latin-style hip motion. 
                            <br/>
                            <hr/>
                            <h4 id="east coast swing">East Coast Swing</h4>
                            136-144 BPM <a href='https://open.spotify.com/playlist/5JEnqXTsQeWXAqtcBgv4lC?si=98b64d7f194240cb'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A subset of Swing derived from Lindy Hop and Jitterbug, making use of refined (American Style) ballroom technique.
                            <br/>
                            <hr/>
                            <h4 id="mambo">Mambo</h4>
                            159-162 BPM <a href='https://open.spotify.com/playlist/4h6KsYbzWfLdhcw8BjuW9N?si=735398b70633480d'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A fast Latin dance, similar to Salsa, which comes from Cuba. Mambo was brought to America in the 1940's and 50's and eventually adapted as an American style ballroom dance. Most of the movements emphasize the second beat in the measure.
                            <br/>
                            <hr/>
                            <h4 id="bolero">Bolero</h4>
                            96-104 BPM <a href='https://open.spotify.com/playlist/0KH9F7uBFZeg5Dq2g0YC9Z?si=7c863e08c0544d60'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A slow Latin dance which originated as one of two forms of Rumba (Bolero Rumba and Son Rumba), and still shares many of the same figures. Bolero differs from Rumba in its tempo and style of music and movement.
                            <br/>
                        </p>
                    </div>
                    <div className='american-international-child'>
                        <h2 style={{ fontFamily: 'apple chancery', textDecoration: 'underline' }}>International Latin</h2>
                        <p style={{fontSize: '18px', textAlign: 'left'}}>
                            <h4 id="icha cha">Cha Cha</h4>
                            120-124 BPM <a href='https://open.spotify.com/playlist/5vCrM2Pmxb8goqyeG4y6pk?si=b45621a52e8344d6'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            An exciting, syncopated Latin dance which originated in the 1950's as a slowed-down Mambo. The Cha Cha gets its name and character from its distinct repetitive foot rhythm. 
                            <br/>
                            <hr/>
                            <h4 id="irhumba">Rhumba</h4>
                            88-108 BPM <a href='https://open.spotify.com/playlist/6yvE55viaa9ZPsP9LOefeX?si=f87467f280fd46d8'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A slow- to medium-tempo Latin American dance in 4/4 time, which is characterized by sensual, provocative movements and gestures, Latin-style hip motion. 
                            <br/>
                            <hr/>
                            <h4 id="samba">Samba</h4>
                            96-104 BPM <a href='https://open.spotify.com/playlist/1egwCKY3I9TYKwsOJfEh2x?si=d02ea6aad631414a'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A rhythmical Brazilian dance in 2/4 time which has been adapted for modern Ballroom dancing.
                            <br/>
                            <hr/>
                            <h4 id="paso doble">Paso Doble</h4>
                            112 BPM <a href='https://open.spotify.com/playlist/6KN3Z6JfkQonrQKUieiAeN?si=500bee28640e4c41'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A dramatic French-Spanish Flamenco-style march danced in 2/4 time, with man portraying the matador in a bullfight, the lady as his cape. Paso Doble is usually danced to Espana Cani, the Spanish Gypsy Dance.
                            <br/>
                            <hr/>
                            <h4 id="jive">Jive</h4>
                            152-176 BPM <a href='https://open.spotify.com/playlist/07K8k3svUHOe9bfV1gVAjD?si=8158d5b52d82432c'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            The International version of Swing, known for its kicks and flicks. In spite of its fast tempo, Jive is still danced in triple-rhythm.
                            <br/>
                        </p>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default LatinInfo;