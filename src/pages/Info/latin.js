import React from 'react';
import latinImg from '../../images/latin-dance2.jpg'

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
                        <p>Labore commodo ipsum elit culpa dolore. Consequat in sunt duis excepteur nulla anim esse do nulla quis occaecat eiusmod nulla occaecat. Enim sit veniam ullamco et et occaecat do ea ipsum minim. Non ex cupidatat elit irure duis. Esse cupidatat cupidatat ullamco nulla labore velit sint dolore esse. Laborum ea occaecat enim enim aute eiusmod veniam fugiat consequat Lorem duis.</p>
                    </div>
                    <div className='american-international-child'>
                        <h2 style={{ fontFamily: 'apple chancery', textDecoration: 'underline' }}>International Latin</h2>
                        <p>Labore commodo ipsum elit culpa dolore. Consequat in sunt duis excepteur nulla anim esse do nulla quis occaecat eiusmod nulla occaecat. Enim sit veniam ullamco et et occaecat do ea ipsum minim. Non ex cupidatat elit irure duis. Esse cupidatat cupidatat ullamco nulla labore velit sint dolore esse. Laborum ea occaecat enim enim aute eiusmod veniam fugiat consequat Lorem duis.</p>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default LatinInfo;