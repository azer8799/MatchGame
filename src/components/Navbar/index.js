// Write your code here.

import {Component} from 'react'

import './index.css'

class NavBar extends Component {
  renderScores = () => {
    const {currentScore, timer} = this.props

    return (
      <div className="scores-container">
        <p className="score">Score: {currentScore}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          alt="timer"
          className="timer"
        />

        <p className="display-timer">{timer} sec</p>
      </div>
    )
  }

  render() {
    return (
      <nav className="nav-bar-container">
        <div className="title-score-container">
          <div className="title-container">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
              alt="website logo"
            />
          </div>
          {this.renderScores()}
        </div>
      </nav>
    )
  }
}

export default NavBar
