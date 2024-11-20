import React, { useState, useEffect } from 'react';

// Import team logos
import miLogo from '../logos/mi.png';
import cskLogo from '../logos/csk.png';
import rcbLogo from '../logos/rcb.png';
import kkrLogo from '../logos/kkr.png';
import dcLogo from '../logos/dc.png';
import pbksLogo from '../logos/pbks.png';
import rrLogo from '../logos/rr.png';
import srhLogo from '../logos/srh.png';
import lsgLogo from '../logos/lsg.png';
import gtLogo from '../logos/gt.png';

const teamLogos = {
  "Mumbai Indians": miLogo,
  "Chennai Super Kings": cskLogo,
  "Royal Challengers Bangalore": rcbLogo,
  "Kolkata Knight Riders": kkrLogo,
  "Delhi Capitals": dcLogo,
  "Punjab Kings": pbksLogo,
  "Rajasthan Royals": rrLogo,
  "Sunrisers Hyderabad": srhLogo,
  "Lucknow Super Giants": lsgLogo,
  "Gujarat Titans": gtLogo,
};

const allTeams = [
  "Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore",
  "Kolkata Knight Riders", "Delhi Capitals", "Punjab Kings",
  "Rajasthan Royals", "Sunrisers Hyderabad", "Lucknow Super Giants",
  "Gujarat Titans"
];

const allVenues = [
  "Wankhede Stadium", "Eden Gardens", "M. Chinnaswamy Stadium",
  "Arun Jaitley Stadium", "Narendra Modi Stadium", "MA Chidambaram Stadium",
  "Punjab Cricket Association Stadium", "Sawai Mansingh Stadium",
  "Rajiv Gandhi International Stadium", "DY Patil Stadium", "Other"
];

const WinnerAfter = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = useState({
    battingTeam: '',
    bowlingTeam: '',
    venue: '',
    over: "",
    currentScore: '',
    wicketsFallen: '',
    firstInningsScore: ''
  });

  const [battingLogo, setBattingLogo] = useState(null);
  const [bowlingLogo, setBowlingLogo] = useState(null);
  const [winningLogo, setWinningLogo] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (formData.battingTeam) {
      setBattingLogo(teamLogos[formData.battingTeam]);
    }
    if (formData.bowlingTeam) {
      setBowlingLogo(teamLogos[formData.bowlingTeam]);
    }
  }, [formData.battingTeam, formData.bowlingTeam]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const overInput = parseFloat(formData.over);
    const over = Math.floor(overInput);
    const ball = Math.round((overInput - over) * 10);

    const data = {
      batting_team: formData.battingTeam,
      bowling_team: formData.bowlingTeam,
      venue: formData.venue,
      over: over,
      ball: ball,
      current_score: formData.currentScore,
      wickets: formData.wicketsFallen,
      first_innings_score: formData.firstInningsScore,
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/predict/winnerAfter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setPredictionResult(result);
      setSubmitted(true);

      if (result.predicted_team) {
        setWinningLogo(teamLogos[result.predicted_team]);
      }
    } catch (error) {
      setError("Failed to get prediction, please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoBack = () => {
    setSubmitted(false);
    setPredictionResult(null);
    setFormData({
      battingTeam: '',
      bowlingTeam: '',
      venue: '',
      over: "",
      currentScore: '',
      wicketsFallen: '',
      firstInningsScore: ''
    });
    setBattingLogo(null);
    setBowlingLogo(null);
    setWinningLogo(null);
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="form">
          <h2 className="Main">Winner Prediction After Inning</h2>

          {error && <div className="error-message" style={{ color: "red" }}>{error}</div>}

          <label>
            Batting Team:
            <select name="battingTeam" value={formData.battingTeam} onChange={handleChange} required>
              <option value="">Select Team</option>
              {allTeams.map((team) => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>
          </label>

          <label>
            Bowling Team:
            <select name="bowlingTeam" value={formData.bowlingTeam} onChange={handleChange} required>
              <option value="">Select Team</option>
              {allTeams
                .filter((team) => team !== formData.battingTeam)
                .map((team) => (
                  <option key={team} value={team}>{team}</option>
                ))}
            </select>
          </label>

          <label>
            Venue:
            <select name="venue" value={formData.venue} onChange={handleChange} required>
              <option value="">Select Venue</option>
              {allVenues.map((venue) => (
                <option key={venue} value={venue}>{venue}</option>
              ))}
            </select>
          </label>

          <label>
            Over:
            <input
              type="number"
              name="over"
              min="0.1"
              max="20"
              step="0.1"
              value={formData.over}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Current Score:
            <input
              type="number"
              name="currentScore"
              min="0"
              value={formData.currentScore}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Wickets Fallen:
            <input
              type="number"
              name="wicketsFallen"
              min="0"
              max="10"
              value={formData.wicketsFallen}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            First Innings Score:
            <input
              type="number"
              name="firstInningsScore"
              min="0"
              value={formData.firstInningsScore}
              onChange={handleChange}
              required
            />
          </label>

          <div className="button-group">
            <button type="submit" disabled={loading}>Submit</button>
            {loading && <p>Loading...</p>}
            <button type="button" onClick={onBack}>Back</button>
          </div>
        </form>
      ) : (
        <div style={{ marginTop: '20px' }}>
          {predictionResult && (
            <div className="prediction-container">
              <div className="team-logos">
                <div className="team-logo">
                  {battingLogo && <img src={battingLogo} alt="Batting Team Logo" />}
                  <h3 className="team1">{formData.battingTeam}</h3>
                </div>
                <div className="team-logo">
                  {bowlingLogo && <img src={bowlingLogo} alt="Bowling Team Logo" />}
                  <h3 className="team2">{formData.bowlingTeam}</h3>
                </div>
              </div>
              <div className="winner-logo">
                <h1>Winner is {predictionResult.predicted_team}</h1>
                {winningLogo && <img src={winningLogo} alt="Winning Team Logo" className="winner-logo" />}
                <h3 className="winner">{predictionResult.predicted_team}</h3>
              </div>
              <button onClick={handleGoBack}>Go Back</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WinnerAfter;
