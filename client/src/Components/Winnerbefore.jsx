// import React, { useState } from 'react';
// import './WinnerBefore.css';

// // Teams and Venues
// const iplTeams = [
//   "Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore",
//   "Kolkata Knight Riders", "Delhi Capitals", "Punjab Kings",
//   "Rajasthan Royals", "Sunrisers Hyderabad", "Lucknow Super Giants",
//   "Gujarat Titans"
// ];

// const venues = [
//   "Wankhede Stadium", "Eden Gardens", "M. Chinnaswamy Stadium",
//   "Arun Jaitley Stadium", "Narendra Modi Stadium", "MA Chidambaram Stadium",
//   "Punjab Cricket Association Stadium", "Sawai Mansingh Stadium",
//   "Rajiv Gandhi International Stadium", "DY Patil Stadium", "Other"
// ];

// // Team Logos (importing images from the correct path)
// import miLogo from '../logos/mi.png';
// import cskLogo from '../logos/csk.png';
// import rcbLogo from '../logos/rcb.png';
// import kkrLogo from '../logos/kkr.png';
// import dcLogo from '../logos/dc.png';
// import pbksLogo from '../logos/pbks.png';
// import rrLogo from '../logos/rr.png';
// import srhLogo from '../logos/srh.png';
// import lsgLogo from '../logos/lsg.png';
// import gtLogo from '../logos/gt.png';

// const teamLogos = {
//   "Mumbai Indians": miLogo,
//   "Chennai Super Kings": cskLogo,
//   "Royal Challengers Bangalore": rcbLogo,
//   "Kolkata Knight Riders": kkrLogo,
//   "Delhi Capitals": dcLogo,
//   "Punjab Kings": pbksLogo,
//   "Rajasthan Royals": rrLogo,
//   "Sunrisers Hyderabad": srhLogo,
//   "Lucknow Super Giants": lsgLogo,
//   "Gujarat Titans": gtLogo,
// };

// function WinnerBefore({ onSubmit, onBack }) {
//   const [formData, setFormData] = useState({
//     team1: '',
//     team2: '',
//     venue: '',
//     tossWinner: '',
//     tossDecision: '',
//   });

//   const [prediction, setPrediction] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));

//     if (name === 'team1') {
//       setFormData((prevData) => ({
//         ...prevData,
//         team2: '',
//         tossWinner: ''
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setPrediction(null);
//     setError(null);
//     setLoading(true);

//     try {
//       const response = await fetch('http://127.0.0.1:5000/predict/winnerBefore', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const predictionData = await response.json();
//         if (predictionData.predicted_team) {
//           setPrediction(predictionData.predicted_team);
//         } else {
//           setError('Prediction data is not available.');
//         }
//       } else {
//         const errorText = await response.text();
//         console.error('Response Error:', errorText);
//         throw new Error('Failed to fetch prediction from backend');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setError('An error occurred. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReset = () => {
//     setFormData({
//       team1: '',
//       team2: '',
//       venue: '',
//       tossWinner: '',
//       tossDecision: '',
//     });
//     setPrediction(null);
//     setError(null);
//   };

//   return (
//     <div>
//       <h2 className="Main">Winner Prediction Before Match</h2>

//       {!prediction && !error && (
//         <form onSubmit={handleSubmit} className='form'>
//           <label>
//             Team 1:
//             <select name="team1" value={formData.team1} onChange={handleChange}>
//               <option value="">Select Team 1</option>
//               {iplTeams.map((team) => (
//                 <option key={team} value={team}>
//                   {team}
//                 </option>
//               ))}
//             </select>
//           </label>

//           <label>
//             Team 2:
//             <select name="team2" value={formData.team2} onChange={handleChange} disabled={!formData.team1}>
//               <option value="">Select Team 2</option>
//               {iplTeams
//                 .filter((team) => team !== formData.team1)
//                 .map((team) => (
//                   <option key={team} value={team}>
//                     {team}
//                   </option>
//                 ))}
//             </select>
//           </label>

//           <label>
//             Venue:
//             <select name="venue" value={formData.venue} onChange={handleChange}>
//               <option value="">Select Venue</option>
//               {venues.map((venue) => (
//                 <option key={venue} value={venue}>
//                   {venue}
//                 </option>
//               ))}
//             </select>
//           </label>

//           <label>
//             Toss Winner:
//             <select name="tossWinner" value={formData.tossWinner} onChange={handleChange} disabled={!formData.team1 || !formData.team2}>
//               <option value="">Select Toss Winner</option>
//               {formData.team1 && <option value={formData.team1}>{formData.team1}</option>}
//               {formData.team2 && <option value={formData.team2}>{formData.team2}</option>}
//             </select>
//           </label>

//           <label>
//             Toss Decision:
//             <select name="tossDecision" value={formData.tossDecision} onChange={handleChange}>
//               <option value="">Select Toss Decision</option>
//               <option value="bat">Bat</option>
//               <option value="bowl">Bowl</option>
//             </select>
//           </label>

//           <div>
//             <button type="submit" disabled={loading}>{loading ? 'Predicting...' : 'Submit'}</button>
//             <button type="button" onClick={handleReset}>Reset</button>
//             <button type="button" onClick={onBack}>Back</button>
//           </div>
//         </form>
//       )}

//       {prediction && (
//         <div className='prediction-container'>
//           <h3 className='prediction'>Prediction Result:</h3>
//           <p className='prediction'>{`Predicted Winner: ${prediction}`}</p>
//           <div className="team-logos">
//             <div className="team-logo">
//               <h4 className='team1'>Team 1: {formData.team1}</h4>
//               <div className='teamlogo'>
//               <img src={teamLogos[formData.team1]} alt={formData.team1} className='teamlogo' / >
//               </div>
//             </div>
//             <div className="team-logo">
//               <h4 className='team2'>Team 2: {formData.team2}</h4>
//               <div className='teamlogo'>
//               <img src={teamLogos[formData.team2]} alt={formData.team2} className='teamlogo' />
//               </div>
//             </div>
//             <div className="winner-logo">
//               <h4 className='winner'>Predicted Winner: {prediction}</h4>
//               <div className='teamlogo'>
//               <img src={teamLogos[prediction]} alt={prediction}/>
//               </div>
//             </div>
//           </div>

//           <button type="button" onClick={handleReset}>Reset</button>
//         </div>
//       )}

//       {error && (
//         <div>
//           <h3>Error:</h3>
//           <p>{error}</p>
//           <button type="button" onClick={handleReset}>Reset</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default WinnerBefore;




import React, { useState } from 'react';
import './WinnerBefore.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Teams and Venues
const iplTeams = [
  "Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bangalore",
  "Kolkata Knight Riders", "Delhi Capitals", "Punjab Kings",
  "Rajasthan Royals", "Sunrisers Hyderabad", "Lucknow Super Giants",
  "Gujarat Titans"
];

const venues = [
  "Wankhede Stadium", "Eden Gardens", "M. Chinnaswamy Stadium",
  "Arun Jaitley Stadium", "Narendra Modi Stadium", "MA Chidambaram Stadium",
  "Punjab Cricket Association Stadium", "Sawai Mansingh Stadium",
  "Rajiv Gandhi International Stadium", "DY Patil Stadium", "Other"
];

// Team Logos
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

function WinnerBefore({ onSubmit, onBack }) {
  const [formData, setFormData] = useState({
    team1: '',
    team2: '',
    venue: '',
    tossWinner: '',
    tossDecision: '',
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPrediction(null);
    setError(null);
    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict/winnerBefore', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const predictionData = await response.json();
        if (predictionData.predicted_team) {
          setPrediction(predictionData.predicted_team);
        } else {
          setError('Prediction data is not available.');
        }
      } else {
        throw new Error('Failed to fetch prediction');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      team1: '',
      team2: '',
      venue: '',
      tossWinner: '',
      tossDecision: '',
    });
    setPrediction(null);
    setError(null);
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Winner Prediction Before Match</h2>

      {/* Prediction Form */}
      {!prediction && !error && (
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="row g-3">
            {/* Team 1 Selection */}
            <div className="col-12">
              <label className="form-label">Team 1</label>
              <select 
                name="team1"
                className="form-select"
                value={formData.team1}
                onChange={handleChange}
              >
                <option value="">Select Team 1</option>
                {iplTeams.map((team) => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
            </div>

            {/* Team 2 Selection */}
            <div className="col-12">
              <label className="form-label">Team 2</label>
              <select 
                name="team2"
                className="form-select"
                value={formData.team2}
                onChange={handleChange}
                disabled={!formData.team1}
              >
                <option value="">Select Team 2</option>
                {iplTeams
                  .filter((team) => team !== formData.team1)
                  .map((team) => (
                    <option key={team} value={team}>{team}</option>
                  ))}
              </select>
            </div>

            {/* Venue Selection */}
            <div className="col-12">
              <label className="form-label">Venue</label>
              <select 
                name="venue"
                className="form-select"
                value={formData.venue}
                onChange={handleChange}
              >
                <option value="">Select Venue</option>
                {venues.map((venue) => (
                  <option key={venue} value={venue}>{venue}</option>
                ))}
              </select>
            </div>

            {/* Toss Winner Selection */}
            <div className="col-12">
              <label className="form-label">Toss Winner</label>
              <select
                name="tossWinner"
                className="form-select"
                value={formData.tossWinner}
                onChange={handleChange}
                disabled={!formData.team1 || !formData.team2}
              >
                <option value="">Select Toss Winner</option>
                {formData.team1 && <option value={formData.team1}>{formData.team1}</option>}
                {formData.team2 && <option value={formData.team2}>{formData.team2}</option>}
              </select>
            </div>

            {/* Toss Decision */}
            <div className="col-12">
              <label className="form-label">Toss Decision</label>
              <select 
                name="tossDecision"
                className="form-select"
                value={formData.tossDecision}
                onChange={handleChange}
              >
                <option value="">Select Toss Decision</option>
                <option value="bat">Bat</option>
                <option value="bowl">Bowl</option>
              </select>
            </div>
          </div>

          <div className="text-center mt-3">
            <button type="submit" className="btn btn-primary me-2" disabled={loading}>
              {loading ? 'Predicting...' : 'Submit'}
            </button>
            <button type="button" className="btn btn-secondary me-2" onClick={handleReset}>
              Reset
            </button>
            <button type="button" className="btn btn-danger" onClick={onBack}>
              Back
            </button>
          </div>
        </form>
      )}

      {/* Prediction Section */}
      {prediction && (
        <div className="mt-4 text-center">
          <h4>Prediction Result</h4>
          <div className="mt-2">
            <img src={teamLogos[formData.team1]} alt={formData.team1} className="img-fluid mx-5" style={{ width: '200px' ,height:'300px'}} />
            <img src={teamLogos[formData.team2]} alt={formData.team2} className="img-fluid mx-5" style={{ width: '200px' ,height:'300px'}} />
            <img src={teamLogos[prediction]} alt={prediction} className="img-fluid mx-2" style={{ width: '200px' ,height:'300px'}} />
          </div>
          <h5 className="mt-3">Winner Prediction: {prediction}</h5>
          <button className="btn btn-danger mt-2" onClick={handleReset}>Reset</button>
        </div>
      )}

      {error && (
        <div className="alert alert-danger mt-3">
          <h4>Error:</h4>
          <p>{error}</p>
          <button type="button" className="btn btn-danger" onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
}

export default WinnerBefore;
