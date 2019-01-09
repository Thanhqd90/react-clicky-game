import React, { Component } from 'react';
import { Row, CardPanel, Col } from 'react-materialize';
import { faAnchor, faChess, faBabyCarriage, faBarcode, faAirFreshener, faBlenderPhone, faBell, faCarrot, faBroom, faMicrophone, faRainbow, faRunning } from '@fortawesome/free-solid-svg-icons'
import GameCard from './components/GameCard';
import Nav from './components/Nav';

class App extends Component {
    state = {
        icons: [faAnchor, faChess, faBabyCarriage, faBarcode, faAirFreshener, faBlenderPhone, faBell, faCarrot, faBroom, faMicrophone, faRainbow, faRunning].sort(this.randomize),
        clicked: [],
        score: 0,
        highScore: 0,
        correct: undefined,
        gameWon: false
    }

    randomize = (a, b) => Math.random() > .5 ? -1 : 1

    clickHandler = iconName => {
        if (this.state.clicked.indexOf(iconName) === -1) {
            let score = this.state.clicked.length + 1,
                clicked = score === this.state.icons.length ? [] : [...this.state.clicked, iconName]

            this.setState({
                icons: this.state.icons.sort(this.randomize),
                clicked: clicked,
                score: score,
                highScore: Math.max(this.state.highScore, score),
                correct: true,
                gameWon: score === this.state.icons.length
            })
        } else {
            this.setState({
                icons: this.state.icons.sort(this.randomize),
                clicked: [],
                score: 0,
                correct: false,
                gameWon: false
            })
        }
    }
s
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Row>
                        <Nav 
                            correct={this.state.correct} 
                            gameWon={this.state.gameWon} 
                            score={this.state.score} 
                            highScore={this.state.highScore} 
                        />
                    <Col s={12}>
                        <CardPanel>
                            <p>Click on an image to earn points, but don't click on the same one twice</p>
                        </CardPanel>
                    </Col>
                    </Row>
                </div>
                <div className="container">
                    <Row>
                        {this.state.icons.map(icon => 
                        <GameCard 
                            correct={this.state.correct} 
                            key={icon.iconName} 
                            icon={icon} 
                            clickHandler={this.clickHandler} 
                        />)}
                    </Row>
                </div>
            </div>
        )
    }
}

export default App
