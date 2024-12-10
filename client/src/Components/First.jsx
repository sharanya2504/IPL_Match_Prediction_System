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

function First({ onSubmit, onBack }) {
  const [selectedTeams, setSelectedTeams] = useState({
    batting: '',
    bowling: '',
  });
  const [venue, setVenue] = useState('');
  const [inningsData, setInningsData] = useState({
    over: '',
    score: '',
    wickets: '',
  });
  const [predictedScore, setPredictedScore] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleReset = () => {
    setSelectedTeams({ batting: '', bowling: '' });
    setVenue('');
    setInningsData({ over: '', score: '', wickets: '' });
    setPredictedScore(null);
    setErrorMessage('');
    setFormSubmitted(false);
  };

  const handleTeamChange = (inningType, team) => {
    setSelectedTeams((prevState) => ({
      ...prevState,
      [inningType]: team,
      ...(inningType === 'batting' && prevState.bowling === team
        ? { bowling: '' }
        : {}),
    }));
  };

  const handleVenueChange = (venue) => {
    setVenue(venue);
  };

  const handleInningsDataChange = (e) => {
    const { name, value } = e.target;
    setInningsData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInningsSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const formData = {
        batting_team: selectedTeams.batting,
        bowling_team: selectedTeams.bowling,
        venue: stadiumTeamMap[venue] || -1,
        over: inningsData.over,
        score: inningsData.score,
        wickets: inningsData.wickets,
      };

      console.log('Form Data:', formData);

      const response = await fetch('http://localhost:5000/predict/firstScore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Request failed with status: ${response.status}');
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      } else if (data.predicted_first_innings_score !== undefined) {
        setPredictedScore(data.predicted_first_innings_score);
        setFormSubmitted(true);
      } else {
        throw new Error('Prediction failed: Predicted score not found');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  if (formSubmitted && predictedScore !== null) {
    return (
<div 
  style={{
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "30px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    width: "80%",
    margin: "auto",
  }}
>
  <h3 className="text-center mb-3">Predicted 1st Innings Score</h3>
  <h4 className="text-center">{predictedScore} to {predictedScore + 7}</h4>

  <div 
    className="team-logos d-flex justify-content-around my-4" 
    style={{
      gap: "65px",
    }}
  >
    <div className="text-center">
      <img
        src={teamLogos[selectedTeams.batting]}
        alt={selectedTeams.batting}
        className="team-logo"
        style={{
          width: "180px",
          height: "180px",
        }}
      />
      <p>{selectedTeams.batting}</p>
    </div>

    <div className="text-center">
      <img
        src={teamLogos[selectedTeams.bowling]}
        alt={selectedTeams.bowling}
        className="team-logo"
        style={{
          width: "180px",
          height: "180px",
        }}
      />
      <p>{selectedTeams.bowling}</p>
    </div>
  </div>

  <div className="text-center">
    <button className="btn btn-danger" onClick={handleReset}>
      Back
    </button>
  </div>
</div>


    );
  }

  return (
    <div className='container mt-4'
    style={{ maxWidth: '600px' }}>
      <form onSubmit={handleInningsSubmit} className="bg-light p-4 rounded shadow-sm">
      <h2 className="text-center mb-4">First Innings Score Prediction</h2>
        <div className='mb-3'>
          <label className="form-label">Batting Team:</label>
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
        </div>
        <div className='mb-3'>
          <label className="form-label">Bowling Team:</label>
          <select
            className="form-select"
            value={selectedTeams.bowling}
            onChange={(e) => handleTeamChange('bowling', e.target.value)}
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
        </div>
        <div className='mb-3'>
          <label className="form-label">Venue:</label>
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
        </div>
        <div className='mb-3'>
          <label className="form-label">Over:</label>
          <input
            className="form-control"
            type="number"
            name="over"
            min="0"
            step="0.1"
            max="20"
            value={inningsData.over}
            onChange={handleInningsDataChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label className="form-label">Score Till Now:</label>
          <input
            className="form-control"
            type="number"
            name="score"
            min="0"
            max='400'
            value={inningsData.score}
            onChange={handleInningsDataChange}
            required
          />
        </div>
        <div className='mb-3'>
          <label className="form-label">Wickets Fallen:</label>
          <input
            className="form-control"
            type="number"
            name="wickets"
            min="0"
            max="10"
            value={inningsData.wickets}
            onChange={handleInningsDataChange}
            required
          />
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

        {errorMessage && <p className="text-danger text-center mt-3">{errorMessage}</p>}
      </form>
    </div>
  );
}

export default First;