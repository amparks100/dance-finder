// const Dance = () => {

import React from "react";
import './dance.css';

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
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    }

    getServerUrl() {
        return process.env.REACT_APP_SERVER_URL ? process.env.REACT_APP_SERVER_URL : ``;
    }

    handleSubmit(event) {
        event.preventDefault();
        var song = this.state.iSong;
        fetch(this.getServerUrl() + '/song_data?' + new URLSearchParams({
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

    handleDanceClick(dance, _) {
        const lowerdance = dance.toLowerCase();
        const socialDances = ["salsa", "merengue", "bachata", "hustle", "west coast swing", "polka"];
        const latinDances = ["cha cha", "rhumba", "east coast swing", "mambo", "bolero", "samba", "paso doble", "jive"];
        const standardDances = ["waltz", "tango", "foxtrot", "viennese waltz", "quickstep"];
        if (socialDances.includes(lowerdance)) {
            window.location.href = `/info/social#${lowerdance}`
        }
        if (latinDances.includes(lowerdance)) {
            window.location.href = `/info/rhythm-latin#${lowerdance}`
        }
        if (standardDances.includes(lowerdance)) {
            window.location.href = `/info/smooth-standard#${lowerdance}`
        }
    }

    render() {
        return (
            <div className="App-body">
                <div className="search-box">
                    <h2>Discover the dances!</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-box">
                            <input type="text" name="iSong" value={this.state.iSong} onChange={this.handleChange} required />
                            <label>Song title:</label>
                        </div>
                        <br />
                        <div className="input-box">
                            <input type="text" name="iArtist" value={this.state.iArtist} onChange={this.handleChange} />
                            <label>Artist (optional):</label>
                        </div>
                        <br />
                        <input type="submit" value="Search!" />
                    </form>
                </div>
                {this.state.showInfo &&
                    <div>
                        <div style={{ height: "1500px" }}></div>
                        <div className="song-info-box">
                            <p><b>Song selected:</b> {this.state.song} by {this.state.artist}</p>
                            <br />
                            <div className="dances-container">
                                <div className="dances-child">
                                    <img src={this.state.image} />
                                    <br />
                                    <p className="tiny-text">Tempo: {this.state.tempo}  |  Time Signature: {this.state.time_signature}</p>
                                </div>
                                <div className="dances-child">

                                    <div className="dance-list">
                                        {this.state.dances.map((dance) => (
                                            <li onClick={this.handleDanceClick.bind(this, dance)}>{dance}</li>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Dance;