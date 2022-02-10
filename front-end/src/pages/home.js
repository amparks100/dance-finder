import React from 'react';
import BallroomWelcome from '../components/ballroomWelcome';
import './home.css';


const Home = () => {

    // const callLogin = async () => {
    //     const response = await fetch('/login');
    //     console.log(response);
    //     if (response.status !== 200) {
    //         console.log("bad");
    //         throw Error("so sad");
    //     } else {
    //         console.log("success");
    //         localStorage.setItem("access_token", response.body.access_token)
    //         window.location.href = "/dance";
    //     }
    // };

    // const newToken = async () => {
    //     const response = await fetch('/client_token');
    //     console.log(response);

    //     if (response.status !== 200) {
    //         console.log("bad");
    //         throw Error("so sad");
    //     } else {
    //         console.log("success");
    //         console.log(response.body.json());
    //         localStorage.setItem("access_token", response.body.access_token)
    //         //window.location.href = "/dance";
    //     }

    // };

    return (
        <div className="App-body">
            <BallroomWelcome />
            <br />
            <div className="home-description">
                <p>
                    I've created this website to give dancers the ability to see what type of dance matches their favorite songs.
                    After a while this ability comes easily by just feeling the music, but as a begninner this tool should be very useful.
                </p>
                <p>Head over to the <a href='/search' style={{ textDecoration: "none" }}>search</a> page to try it out!</p>
            </div>
        </div>
    );
};

export default Home;