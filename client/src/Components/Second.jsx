import React, { useState } from 'react';
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
import './First.css';
const teamLogos = {
  'Mumbai Indians': miLogo,
  'Chennai Super Kings': cskLogo,
  'Royal Challengers Bangalore': rcbLogo,
  'Kolkata Knight Riders': kkrLogo,
  'Delhi Capitals': dcLogo,
  'Punjab Kings': pbksLogo,
  'Rajasthan Royals': rrLogo,
  'Sunrisers Hyderabad': srhLogo,
  'Lucknow Super Giants': lsgLogo,
  'Gujarat Titans': gtLogo,
};

const transform = {
  'Chennai Super Kings': 1,
  'Delhi Capitals': 2,
  'Kolkata Knight Riders': 3,
  'Mumbai Indians': 4,
  'Punjab Kings': 5,
  'Rajasthan Royals': 6,
  'Royal Challengers Bangalore': 7,
  'Sunrisers Hyderabad': 8,
  'Lucknow Super Giants': 9,
  'Gujarat Titans': 0,
};

const stadiumTeamMap = {
  'Wankhede Stadium': 4,
  'MA Chidambaram Stadium': 1,
  'M. Chinnaswamy Stadium': 7,
  'Arun Jaitley Stadium': 2,
  'Eden Gardens': 3,
  'Rajiv Gandhi International Cricket Stadium': 8,
  'Sawai Mansingh Stadium': 6,
  'Punjab Cricket Association IS Bindra Stadium': 5,
  'Narendra Modi Stadium': 0,
  'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium': 9,
  'Others': -1,
};

const teams = [
  'Mumbai Indians',
  'Chennai Super Kings',
  'Royal Challengers Bangalore',
  'Delhi Capitals',
  'Kolkata Knight Riders',
  'Sunrisers Hyderabad',
  'Rajasthan Royals',
  'Punjab Kings',
  'Gujarat Titans',
  'Lucknow Super Giants',
];

const stadiums = [
  'Wankhede Stadium',
  'MA Chidambaram Stadium',
  'M. Chinnaswamy Stadium',
  'Arun Jaitley Stadium',
  'Eden Gardens',
  'Rajiv Gandhi International Cricket Stadium',
  'Sawai Mansingh Stadium',
  'Punjab Cricket Association IS Bindra Stadium',
  'Narendra Modi Stadium',
  'Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium',
  'Others',
];

function Second({ onBack }) {
  const [selectedTeams, setSelectedTeams] = useState({ batting: '', bowling: '' });
  const [venue, setVenue] = useState('');
  const [inningsData, setInningsData] = useState({
    firstInningsScore: '',
    over: '',
    currentScore: '',
    wickets: '',
  });
  const [prediction, setPrediction] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleTeamChange = (inningType, team) => {
    setSelectedTeams((prevState) => ({ ...prevState, [inningType]: team }));
  };

  const handleVenueChange = (venue) => setVenue(venue);

  const handleInningsDataChange = (e) => {
    const { name, value } = e.target;
    setInningsData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!selectedTeams.batting) errors.batting = 'Batting team is required';
    if (!selectedTeams.bowling) errors.bowling = 'Bowling team is required';
    if (!venue) errors.venue = 'Venue is required';
    if (!inningsData.firstInningsScore) errors.firstInningsScore = 'First innings score is required';
    if (!inningsData.over) errors.over = 'Over is required';
    if (!inningsData.currentScore) errors.currentScore = 'Current score is required';
    if (!inningsData.wickets) errors.wickets = 'Wickets fallen is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInningsSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const predictionData = {
      battingTeam: transform[selectedTeams.batting] || '',
      bowlingTeam: transform[selectedTeams.bowling] || '',
      venue: stadiumTeamMap[venue] || '',
      firstInningsScore: parseInt(inningsData.firstInningsScore, 10),
      over: inningsData.over,
      currentScore: inningsData.currentScore,
      wicketsFallen: inningsData.wickets,
    };

    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/predict/secondScore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(predictionData),
      });

      const responseData = await response.json();
      if (!response.ok) {
        throw new Error(responseData.error || 'Failed to predict second innings score');
      }

      setPrediction(responseData.predicted_second_innings_score);
      setErrorMessage('');
      setFormSubmitted(true);
    } catch (error) {
      setErrorMessage('Error sending data to Flask: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSelectedTeams({ batting: '', bowling: '' });
    setVenue('');
    setInningsData({ firstInningsScore: '', over: '', currentScore: '', wickets: '' });
    setPrediction(null);
    setErrorMessage('');
    setFormErrors({});
    setFormSubmitted(false);
  };

  const renderTeamLogo = (team) => {
    return teamLogos[team] ? <img src={teamLogos[team]} alt={team} /> : null;
  };

  return (
<div 
  className="container mt-4" 
  style={{
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }}
>
  {formSubmitted ? (
    <div className="prediction-container text-center">
      <h3 className="text-center mb-3">
        Predicted Second Innings Score: {prediction} to {prediction + 4}
      </h3>

      <div className="team-logos d-flex justify-content-around mb-4">

        <div className="team-info text-center">
          <img 
            src={teamLogos[selectedTeams.batting]} 
            alt={`${selectedTeams.batting} Logo`} 
            className="img-fluid" 
            style={{ width: '200px', height: '300px', borderRadius: '10px' }} 
          />
          <div className="mt-2 fw-bold">{selectedTeams.batting}</div>
        </div>

        <div className="team-info text-center">
          <img 
            src={teamLogos[selectedTeams.bowling]} 
            alt={`${selectedTeams.bowling} Logo`} 
            className="img-fluid" 
            style={{ width: '200px', height: '300px', borderRadius: '10px' }} 
          />
          <div className="mt-2 fw-bold">{selectedTeams.bowling}</div>
        </div>
      </div>

      <div style={{ textAlign: "center" }}>
        <button 
          className="btn btn-danger" 
          type="button" 
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "5px",
          }} 
          onClick={handleReset}
        >
          Back
        </button>
      </div>
    </div>
  )
 
      : (
        <div>
          <form onSubmit={handleInningsSubmit} className="bg-light p-4 rounded shadow-sm">
          <h2 className="text-center mb-4">Second Innings Score Prediction</h2>
            <div className="row gx-3 gy-2">

              <div className="col-12">
                <label>Batting Team:</label>
                <select
                  className="form-select"
                  value={selectedTeams.batting}
                  onChange={(e) => handleTeamChange('batting', e.target.value)}
                  required
                >
                  <option value="">Select Batting Team</option>
                  {teams.map((team) => (
                    <option key={team} value={team}>
                      {team}
                    </option>
                  ))}
                </select>
                {formErrors.batting && <span className="text-danger">{formErrors.batting}</span>}
              </div>

              <div className="col-12">
                <label>Bowling Team:</label>
                <select
                  className="form-select"
                  value={selectedTeams.bowling}
                  onChange={(e) => handleTeamChange('bowling', e.target.value)}
                  disabled={!selectedTeams.batting}
                  required
                >
                  <option value="">Select Bowling Team</option>
                  {teams
                    .filter((team) => team !== selectedTeams.batting)
                    .map((team) => (
                      <option key={team} value={team}>
                        {team}
                      </option>
                    ))}
                </select>
                {formErrors.bowling && <span className="text-danger">{formErrors.bowling}</span>}
              </div>

              <div className="col-12">
                <label>Venue:</label>
                <select
                  className="form-select"
                  value={venue}
                  onChange={(e) => handleVenueChange(e.target.value)}
                  required
                >
                  <option value="">Select Venue</option>
                  {stadiums.map((stadium) => (
                    <option key={stadium} value={stadium}>
                      {stadium}
                    </option>
                  ))}
                </select>
                {formErrors.venue && <span className="text-danger">{formErrors.venue}</span>}
              </div>

              <div className="col-12">
                <label>First Innings Score:</label>
                <input
                  className="form-control"
                  type="number"
                  name="firstInningsScore"
                  value={inningsData.firstInningsScore}
                  onChange={handleInningsDataChange}
                  required
                  min={0}
                  max={400}
                />
                {formErrors.firstInningsScore && (
                  <span className="text-danger">{formErrors.firstInningsScore}</span>
                )}
              </div>

              <div className="col-12">
                <label>Over:</label>
                <input
                  className="form-control"
                  type="number"
                  name="over"
                  value={inningsData.over}
                  onChange={handleInningsDataChange}
                  required
                  min={0}
                  max={20}
                />
                {formErrors.over && <span className="text-danger">{formErrors.over}</span>}
              </div>

              <div className="col-12">
                <label>Current Score:</label>
                <input
                  className="form-control"
                  type="number"
                  name="currentScore"
                  value={inningsData.currentScore}
                  onChange={handleInningsDataChange}
                  required
                  min={0}
                  max={400}
                />
                {formErrors.currentScore && (
                  <span className="text-danger">{formErrors.currentScore}</span>
                )}
              </div>

              <div className="col-12">
                <label>Wickets Fallen:</label>
                <input
                  className="form-control"
                  type="number"
                  name="wickets"
                  value={inningsData.wickets}
                  onChange={handleInningsDataChange}
                  required
                  min={0}
                  max={10}
                />
              
                {formErrors.wickets && <span className="text-danger">{formErrors.wickets}</span>}
              </div>

              <div className="text-center">
  <button 
    type="submit" 
    className="btn btn-success me-2" 
    disabled={loading}
  >
    {loading ? 'Predicting...' : 'Predict'}
  </button>
  <button
    type="button"
    className="btn btn-secondary me-2"
    onClick={handleReset}
  >
    Reset
  </button>
  <button 
    type="button" 
    className="btn btn-danger" 
    onClick={onBack}
  >
    Back
  </button>
</div>
            </div>
          </form>
          {errorMessage && <p className="text-danger text-center mt-3">{errorMessage}</p>}
        </div>
      )}
    </div>
  );
}
export default Second;