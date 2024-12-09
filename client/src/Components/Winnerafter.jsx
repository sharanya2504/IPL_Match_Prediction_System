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
    <div className="container my-4">
      {!submitted ? (
        
        <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
          <h2 className="text-center mb-4">Winner Prediction After Inning</h2>
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="form-group mb-3">
            <label>Batting Team:</label>
            <select
              name="battingTeam"
              className="form-control"
              value={formData.battingTeam}
              onChange={handleChange}
              required
            >
              <option value="">Select Team</option>
              {allTeams.map((team) => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label>Bowling Team:</label>
            <select
              name="bowlingTeam"
              className="form-control"
              value={formData.bowlingTeam}
              onChange={handleChange}
              required
            >
              <option value="">Select Team</option>
              {allTeams.filter(team => team !== formData.battingTeam).map((team) => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label>Venue:</label>
            <select
              name="venue"
              className="form-control"
              value={formData.venue}
              onChange={handleChange}
              required
            >
              <option value="">Select Venue</option>
              {allVenues.map((venue) => (
                <option key={venue} value={venue}>{venue}</option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label>Over:</label>
            <input
              type="number"
              name="over"
              className="form-control"
              value={formData.over}
              onChange={handleChange}
              required
              min={0}
              max={20}
            />
          </div>

          <div className="form-group mb-3">
            <label>Current Score:</label>
            <input
              type="number"
              name="currentScore"
              className="form-control"
              value={formData.currentScore}
              onChange={handleChange}
              required
              min={0}
              max={400}
            />
          </div>

          <div className="form-group mb-3">
            <label>Wickets Fallen:</label>
            <input
              type="number"
              name="wicketsFallen"
              className="form-control"
              value={formData.wicketsFallen}
              onChange={handleChange}
              required
              min={0}
              max={10}
            />
          </div>

          <div className="form-group mb-3">
            <label>First Innings Score:</label>
            <input
              type="number"
              name="firstInningsScore"
              className="form-control"
              value={formData.firstInningsScore}
              onChange={handleChange}
              required
              min={0}
              max={400}
            />
          </div>

          <div className="text-center mt-3">
            <button type="submit" className="btn btn-primary me-2" disabled={loading}>
              {loading ? 'Predicting...' : 'Submit'}
            </button>
            <button type="button" className="btn btn-secondary me-2" onClick={handleGoBack}>
              Reset
            </button>
            <button type="button" className="btn btn-danger" onClick={onBack}>
              Back
            </button>
          </div>
        </form>
      ) : (
<div 
  style={{
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }}
>
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>

    <div className="text-center">
      {battingLogo && (
        <div>
          <img 
            src={battingLogo} 
            alt="Batting Team Logo" 
            className="img-fluid" 
            style={{ width: '200px', height: '200px', borderRadius: '10px' }} 
          />
          <p className="mt-2 fw-bold">{formData.battingTeam}</p>
        </div>
      )}
    </div>

    <div className="text-center">
      {bowlingLogo && (
        <div>
          <img 
            src={bowlingLogo} 
            alt="Bowling Team Logo" 
            className="img-fluid" 
            style={{ width: '200px', height: '200px', borderRadius: '10px' }} 
          />
          <p className="mt-2 fw-bold">{formData.bowlingTeam}</p>
        </div>
      )}
    </div>
  </div>

  <div className="mt-4">
    {winningLogo && (
      <div className="text-center">
        <img 
          src={winningLogo} 
          alt="Winner Logo" 
          className="img-fluid" 
          style={{ width: '200px', height: '200px', borderRadius: '10px' }} 
        />
        <p className="mt-2 fw-bold">Winner: {predictionResult?.predicted_team}</p>
      </div>
    )}
  </div>

  <div className="mt-4" style={{ textAlign: 'center' }}>
    <button 
      className="btn btn-danger" 
      style={{
        padding: "10px 20px", 
        fontSize: "1rem", 
        fontWeight: "bold", 
        borderRadius: "5px",
      }} 
      onClick={onBack}
    >
      Back
    </button>
  </div>
</div>



      )}
    </div>
  );
};


export default WinnerAfter;