import React from 'react';
import swingImg from '../../images/swing-dance.jpg'
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialInfo = () => {
    return (
        <div className="App-body">
            <div className='imgContainer'>
                <img src={swingImg} alt="Swing Dancing" />
            </div>
            <br />
            <h1 style={{ fontFamily: 'apple chancery' }}>Social Dancing Styles</h1>
            <br />
            <div className='american-international-container'>
                <span style={{ fontSize: '18px' }}>
                    <h4 id="salsa">Salsa</h4>
                    180-300 BPM <a href='https://open.spotify.com/playlist/2kb3dtW3lCZeXmhQsPL3DC?si=cb0708a9a08a45ef'><FontAwesomeIcon icon={faSpotify} /></a> <br />
                    A popular Latin nightclub dance which evolved as a modified form of Mambo.
                    <br />
                    <hr />
                    <h4 id="merengue">Merengue</h4>
                    130-200 BPM <a href='https://open.spotify.com/playlist/37i9dQZF1DWVAa4Dwc5f7L?si=5ea2d2f619c74980'><FontAwesomeIcon icon={faSpotify} /></a> <br />
                    An energetic Latin-style march which originated in the Dominican Republic, which emphasizes a straight-ahead 8-count rhythm taken with Cuban Motion.
                    <br />
                    <hr />
                    <h4 id="bachata">Bachata</h4>
                    90-200 BPM <a href='https://open.spotify.com/playlist/5SqR3iQ1rvzjjB8vEPlF8d?si=e82e4475ddc44d9e'><FontAwesomeIcon icon={faSpotify} /></a> <br />
                    A sensual latin club dance originated in the Dominican Republic. Characterized by a three step Cuban hip and a tap on the 4th beat.
                    <br />
                    <hr />
                    <h4 id="hustle">Hustle</h4>
                    112-120 BPM <a href='https://open.spotify.com/playlist/0O8ymBLGHGjkbDkVHVjhxx?si=729bb08c9a804d4d'><FontAwesomeIcon icon={faSpotify} /></a> <br />
                    A fast but smooth-moving dance which originated in the nightclubs of the 1970's disco era, as a modified version of swing. Hustle is noted for its fast and elaborate spins and turns, especially for the lady.
                    <br />
                    <hr />
                    <h4 id="west coast swing">West Coast Swing</h4>
                    112-128 BPM <a href='https://open.spotify.com/playlist/5De2ML0wfJOTmuApwJwKXU?si=67dbc8e588014354'><FontAwesomeIcon icon={faSpotify} /></a> <br />
                    A slotted swing dance in 4/4 time, characterized by its smooth and linear style.
                    <br />
                    <hr />
                    <h4 id="polka">Polka</h4>
                    120-124 BPM <a href='https://open.spotify.com/playlist/3Zv1kftHhgYeDb5WxChtvP?si=6077898c353e4df6'><FontAwesomeIcon icon={faSpotify} /></a> <br />
                    A lively courtship dance of Bohemian folk origin. Characterized by three quick steps and a hop.
                    <br />
                    <hr />
                </span>
            </div>
        </div>
    );
};

export default SocialInfo;