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
// import './WinnerBefore.css';
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
    <div className="container my-4" style={{ maxWidth: '600px' }}>
      {!prediction && !error && (
        <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
          <h2 className="text-center mb-4">Winner Prediction Before Match</h2>
          <div className="row g-3">
            <div className="col-12">
              <label className="form-label">Team 1</label>
              <select 
                name="team1"
                className="form-select"
                value={formData.team1}
                onChange={handleChange}
                required
              >
                <option value="">Select Team 1</option>
                {iplTeams.map((team) => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
            </div>

            <div className="col-12">
              <label className="form-label">Team 2</label>
              <select 
                name="team2"
                className="form-select"
                value={formData.team2}
                onChange={handleChange}
                disabled={!formData.team1}
                required
              >
                <option value="">Select Team 2</option>
                {iplTeams
                  .filter((team) => team !== formData.team1)
                  .map((team) => (
                    <option key={team} value={team}>{team}</option>
                  ))}
              </select>
            </div>

            <div className="col-12">
              <label className="form-label">Venue</label>
              <select 
                name="venue"
                className="form-select"
                value={formData.venue}
                onChange={handleChange}
                required
              >
                <option value="">Select Venue</option>
                {venues.map((venue) => (
                  <option key={venue} value={venue}>{venue}</option>
                ))}
              </select>
            </div>

            <div className="col-12">
              <label className="form-label">Toss Winner</label>
              <select
                name="tossWinner"
                className="form-select"
                value={formData.tossWinner}
                onChange={handleChange}
                disabled={!formData.team1 || !formData.team2}
                required
              >
                <option value="">Select Toss Winner</option>
                {formData.team1 && <option value={formData.team1}>{formData.team1}</option>}
                {formData.team2 && <option value={formData.team2}>{formData.team2}</option>}
              </select>
            </div>

            <div className="col-12">
              <label className="form-label">Toss Decision</label>
              <select 
                name="tossDecision"
                className="form-select"
                value={formData.tossDecision}
                onChange={handleChange}
                required
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

      {prediction && (
        <div 
  style={{
    background: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)",
    borderRadius: "10px", 
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  }}
>
  <h4 className="text-center text-white">Prediction Result</h4>

  <div className="d-flex justify-content-center align-items-center mt-3">

    <div className="mx-5 text-center">
      <img 
        src={teamLogos[formData.team1]} 
        alt={formData.team1} 
        className="img-fluid" 
        style={{ width: "200px", height: "200px" }} 
      />
      <h6 className="mt-2">{formData.team1}</h6>
    </div>

    <div className="mx-5 text-center">
      <img 
        src={teamLogos[formData.team2]} 
        alt={formData.team2} 
        className="img-fluid" 
        style={{ width: "200px", height: "200px" }} 
      />
      <h6 className="mt-2">{formData.team2}</h6>
    </div>
  </div>

  <div className="mt-4 text-center" >
    <img 
      src={teamLogos[prediction]} 
      alt={prediction} 
      className="img-fluid" 
      style={{ width: "200px", height: "200px" }} 
    />
    <h5 className="mt-3">Winner: {prediction}</h5>
  </div>

  <div style={{ textAlign: "center", marginTop: "20px" }}> 
    <button 
      className="btn btn-danger" 
      style={{
        background: "rgba(255, 0, 0, 0.8)",
        border: "none", 
        padding: "10px 20px", 
        fontSize: "1rem",
        fontWeight: "bold",
        color: "white", 
        borderRadius: "5px",
        transition: "background 0.3s ease",
      }}
      onMouseEnter={(e) => (e.target.style.background = "rgba(255, 0, 0, 1)")}
      onMouseLeave={(e) => (e.target.style.background = "rgba(255, 0, 0, 0.8)")}
      onClick={handleReset}
    >
      Back
    </button>
  </div>
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


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// // Team Logos Imports
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

// // IPL Team Options and their respective logos
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

// // Map the teams to their respective logos
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

//   const [error, setError] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [prediction, setPrediction] = useState(null);

//   // Handle form value changes dynamically
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Validate form inputs
//   const validateForm = () => {
//     const errors = {};
//     if (!formData.team1) errors.team1 = "Please select Team 1.";
//     if (!formData.team2) errors.team2 = "Please select Team 2.";
//     if (!formData.venue) errors.venue = "Please select a venue.";
//     if (!formData.tossWinner) errors.tossWinner = "Please select the toss winner.";
//     if (!formData.tossDecision) errors.tossDecision = "Please select a toss decision.";
//     return errors;
//   };

//   // Handle the form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const errors = validateForm();
//     if (Object.keys(errors).length > 0) {
//       setError(errors);
//       return;
//     }

//     setLoading(true);
//     setError({});
//     setPrediction(null);

//     try {
//       const response = await fetch('http://127.0.0.1:5000/predict/winnerBefore', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         setPrediction(data.predicted_team);
//       } else {
//         setError({ general: 'Failed to fetch prediction from server' });
//       }
//     } catch (error) {
//       setError({ general: 'Error while making prediction' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Reset the form and state
//   const handleReset = () => {
//     setFormData({
//       team1: '',
//       team2: '',
//       venue: '',
//       tossWinner: '',
//       tossDecision: '',
//     });
//     setPrediction(null);
//     setError({});
//   };

//   return (
//     <div className="container my-4">
//       <h2 className="text-center mb-4">Winner Prediction Before Match</h2>

//       {/* Form for Prediction Input */}
//       {!prediction && (
//         <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
//           <div className="row g-3">

//             {/* Select Team 1 */}
//             <div className="col-12">
//               <label className="form-label">Team 1</label>
//               <select
//                 name="team1"
//                 className={`form-select ${error.team1 ? 'is-invalid' : ''}`}
//                 value={formData.team1}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Team 1</option>
//                 {iplTeams.map((team) => (
//                   <option key={team} value={team}>{team}</option>
//                 ))}
//               </select>
//               {error.team1 && <div className="invalid-feedback">{error.team1}</div>}
//             </div>

//             {/* Select Team 2 */}
//             <div className="col-12">
//               <label className="form-label">Team 2</label>
//               <select
//                 name="team2"
//                 className={`form-select ${error.team2 ? 'is-invalid' : ''}`}
//                 value={formData.team2}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Team 2</option>
//                 {iplTeams
//                   .filter((team) => team !== formData.team1)
//                   .map((team) => (
//                     <option key={team} value={team}>{team}</option>
//                   ))}
//               </select>
//               {error.team2 && <div className="invalid-feedback">{error.team2}</div>}
//             </div>

//             {/* Select Venue */}
//             <div className="col-12">
//               <label className="form-label">Venue</label>
//               <select
//                 name="venue"
//                 className={`form-select ${error.venue ? 'is-invalid' : ''}`}
//                 value={formData.venue}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Venue</option>
//                 {venues.map((venue) => (
//                   <option key={venue} value={venue}>{venue}</option>
//                 ))}
//               </select>
//               {error.venue && <div className="invalid-feedback">{error.venue}</div>}
//             </div>

//             {/* Toss winner */}
//             <div className="col-12">
//               <label className="form-label">Toss Winner</label>
//               <select
//                 name="tossWinner"
//                 className={`form-select ${error.tossWinner ? 'is-invalid' : ''}`}
//                 value={formData.tossWinner}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Toss Winner</option>
//                 {iplTeams.map((team) => (
//                   <option key={team} value={team}>{team}</option>
//                 ))}
//               </select>
//               {error.tossWinner && <div className="invalid-feedback">{error.tossWinner}</div>}
//             </div>

//             {/* Toss Decision */}
//             <div className="col-12">
//               <label className="form-label">Toss Decision</label>
//               <select
//                 name="tossDecision"
//                 className={`form-select ${error.tossDecision ? 'is-invalid' : ''}`}
//                 value={formData.tossDecision}
//                 onChange={handleChange}
//               >
//                 <option value="">Select Toss Decision</option>
//                 <option value="Bat">Bat</option>
//                 <option value="Field">Field</option>
//               </select>
//               {error.tossDecision && <div className="invalid-feedback">{error.tossDecision}</div>}
//             </div>

//             <div className="text-center mt-3">
//               <button type="submit" className="btn btn-primary me-2" disabled={loading}>
//                 {loading ? 'Predicting...' : 'Submit'}
//               </button>
//               <button type="button" className="btn btn-secondary" onClick={handleReset}>
//                 Reset
//               </button>
//               <button className="btn btn-danger ms-3" onClick={onBack}>
//       Back
//     </button>
//             </div>
//           </div>
//         </form>
//       )}

//       {/* Prediction Display */}
//       {prediction && (
//         <div className="mt-4 text-center">
//   <h4>Prediction Result</h4>

//   {/* Batting and Bowling Teams */}
//   <div className="d-flex justify-content-center align-items-center mt-3">
//     {/* Batting Team */}
//     <div className="mx-5 text-center">
//       <img 
//         src={teamLogos[formData.team1]} 
//         alt={formData.team1} 
//         className="img-fluid" 
//         style={{ width: '200px', height: '200px' }} 
//       />
//       <h6 className="mt-2">{formData.team1}</h6>
//     </div>

//     {/* Bowling Team */}
//     <div className="mx-5 text-center">
//       <img 
//         src={teamLogos[formData.team2]} 
//         alt={formData.team2} 
//         className="img-fluid" 
//         style={{ width: '200px', height: '200px' }} 
//       />
//       <h6 className="mt-2">{formData.team2}</h6>
//     </div>
//   </div>

//   {/* Winning Team */}
//   <div className="mt-4 text-center">
//     <img 
//       src={teamLogos[prediction]} 
//       alt={prediction} 
//       className="img-fluid" 
//       style={{ width: '200px', height: '200px' }} 
//     />
//     <h5 className="mt-3">Winner: {prediction}</h5>
//   </div>

//   {/* Reset Button */}
//   <button className="btn btn-danger mt-4" onClick={handleReset}>Back</button>
// </div>


//       )}

//       {error.general && (
//         <div className="alert alert-danger mt-4">
//           <p>{error.general}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default WinnerBefore;
