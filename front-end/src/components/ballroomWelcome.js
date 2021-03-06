import React from "react";
import "../pages/home.css";
import ballroomImg from '../images/ballroom-dance-2.jpeg';


class BallroomWelcome extends React.Component {
    render() {
        return (
            <div className="home-head">
                <div className="head-image">
                    <img src={ballroomImg} alt="Ballroom Dancing Couple" style={{ width: "100vw" }} />
                    <div className="text-on-image">
                        <p style={{ fontFamily: "apple chancery", fontSize: "30px + 2vmin" }}>
                            Welcome to Dance Finder!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BallroomWelcome;