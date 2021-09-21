// Write your code here.

import './index.css'

const ScorecardView = props => {
  const {onClickPlayAgain, score} = props

  return (
    <>
      <div className="win-or-lose-card">
        <div className="details-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
            alt="trophy"
            className="trophy"
          />
          <p className="score-desc">YOUR SCORE</p>
          <p className="score-desc">{score}</p>
          <button type="button" className="button" onClick={onClickPlayAgain}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
              alt="reset"
            />
            <span>Play Again</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default ScorecardView
