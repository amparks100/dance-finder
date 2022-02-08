import React from 'react';
import tangoImg from '../../images/tango-dance.jpg'
import './info-am-in.css';
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StandardInfo = () => {
    return (
        <div>
            <header className="App-header">
                <div className='imgContainer'>
                    <img src={tangoImg} alt="Argentine Tango Dance" />
                </div>
                <br />
                <h1 style={{ fontFamily: 'apple chancery' }}>Smooth/Standard Dances</h1>
                <br />
                <div className='american-international-container'>
                    <div className='american-international-child'>
                        <h2 style={{ fontFamily: 'apple chancery', textDecoration: 'underline' }}>American Smooth</h2>
                        <p style={{fontSize: '18px', textAlign: 'left'}}>
                            <h4 id='waltz'>Waltz</h4>
                            84-90 BPM <a href='https://open.spotify.com/playlist/39LvxrMz1bwkjro29c3BbV?si=840d7776e6b54816'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A ballroom dance in 3/4 time which first developed in Vienna as a fast paced dance to the Strauss music of the time, and eventually evolved into the slower version we now know as Waltz (or Slow Waltz). 
                            <br/>
                            <hr/>
                            <h4 id='tango'>Tango</h4>
                            60-64 BPM <a href='https://open.spotify.com/playlist/1Wod1J0kAI1fDIAMs0yreb?si=de023856d32d480e'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A ballroom dance in 2/4 time which originated in Argentina and is characterized by catlike walking action and staccato head movements. 
                            <br/>
                            <hr/>
                            <h4 id='foxtrot'>Foxtrot</h4>
                            120-136 BPM <a href='https://open.spotify.com/playlist/4HOOQvUIrNd0p53CRJzJuD?si=683ef01be0c4464f'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A ballroom dance in 4/4 time. Introduced to the public in 1913 by Harry Fox, noted for being the first dance to incorporate into the rhythm a combination of Slows and Quicks.
                            <br/>
                            <hr/>
                            <h4 id='viennese waltz'>Viennese Waltz</h4>
                            159-162 BPM <a href='https://open.spotify.com/playlist/2kfscTabCNR5hTGbIDeZMK?si=60729f9a08474113'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A fast ballroom dance in 3/4 time which first developed in Vienna as a fast paced dance to the Strauss music.
                            <br/>
                        </p>
                    </div>
                    <div className='american-international-child'>
                        <h2 style={{ fontFamily: 'apple chancery', textDecoration: 'underline' }}>International Standard</h2>
                        <p style={{fontSize: '18px', textAlign: 'left'}}>
                            <h4 id='iwaltz'>Waltz</h4>
                            84-90 BPM <a href='https://open.spotify.com/playlist/7qEFimxfh6ijcx1o5HcPIu?si=902c8f8b310d433b'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A ballroom dance in 3/4 time which first developed in Vienna as a fast paced dance to the Strauss music of the time, and eventually evolved into the slower version we now know as Waltz (or Slow Waltz). 
                            <br/>
                            <hr/>
                            <h4 id='itango'>Tango</h4>
                            64 BPM <a href='https://open.spotify.com/playlist/35B3wqrPHN3aCddAdAbIBC?si=a9ef81638a0a4920'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A ballroom dance in 2/4 time which originated in Argentina and is characterized by catlike walking action and staccato head movements. 
                            <br/>
                            <hr/>
                            <h4 id='ifoxtrot'>Foxtrot</h4>
                            112-120 BPM <a href='https://open.spotify.com/playlist/4ib5WayPkwCEmRmB20Imwr?si=b7f9783f150c4965'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A ballroom dance in 4/4 time. Introduced to the public in 1913 by Harry Fox, noted for being the first dance to incorporate into the rhythm a combination of Slows and Quicks.
                            <br/>
                            <hr/>
                            <h4 id='iviennese waltz'>Viennese Waltz</h4>
                            168-180 BPM <a href='https://open.spotify.com/playlist/6r8nRoG3cK9wnIM25usnow?si=6aa8770382d44a5f'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A fast ballroom dance in 3/4 time which first developed in Vienna as a fast paced dance to the Strauss music.
                            <br/>
                            <hr/>
                            <h4 id='quickstep'>Quickstep</h4>
                            192-208 BPM <a href='https://open.spotify.com/playlist/3LYoAgxAZwGuQFCxuQqc1U?si=cb85af0b693b4400'><FontAwesomeIcon icon={faSpotify} /></a> <br/>
                            A fast ballroom dance in 4/4 time which is characterized by fast movement, often including a variety of hops, kicks, skips, lock steps and chasses.
                            <br/>
                        </p>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default StandardInfo;