// import React, { useState } from 'react';
// import WinnerBefore from './Winnerbefore';
// import WinnerAfter from './Winnerafter';
// import First from './First';
// import Second from './Second';

// function AfterHome() {
//   const [currentView, setCurrentView] = useState('');

//   const handleBackToMain = () => setCurrentView('');

//   return (
//     <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//       {currentView === '' && (
//         <div className="d-flex flex-column justify-content-center align-items-center gap-3 mb-4" style={{ width: '100%', maxWidth: '400px' }}>
//           <h1 class="text-center mb-4 text-white">IPL Prediction</h1>
//           <button onClick={() => setCurrentView('winnerPredictions')} className="btn btn-primary w-100">
//             Winner Predictions
//           </button>
//           <button onClick={() => setCurrentView('scorePredictions')} className="btn btn-primary w-100">
//             Score Predictions
//           </button>
//         </div>
//       )}

//       {currentView === 'winnerPredictions' && (
//         <div className="d-flex flex-column justify-content-center align-items-center gap-3 mb-4" style={{ width: '100%', maxWidth: '400px' }}>
//           <h1 class="text-center mb-4 text-white">IPL Prediction</h1>
//           <button onClick={() => setCurrentView('winnerBefore')} className="btn btn-primary w-100">
//             Winner Before Match
//           </button>
//           <button onClick={() => setCurrentView('winnerAfter')} className="btn btn-primary w-100">
//             Winner After Inning
//           </button>
//           <button onClick={handleBackToMain} className="btn btn-danger w-100">
//             Back
//           </button>
//         </div>
//       )}

//       {currentView === 'scorePredictions' && (
//         <div className="d-flex flex-column justify-content-center align-items-center gap-3 mb-4" style={{ width: '100%', maxWidth: '400px' }}>
//           <button onClick={() => setCurrentView('firstInnings')} className="btn btn-primary w-100">
//             First Innings Score Prediction
//           </button>
//           <button onClick={() => setCurrentView('secondInnings')} className="btn btn-primary w-100">
//             Second Innings Score Prediction
//           </button>
//           <button onClick={handleBackToMain} className="btn btn-danger w-100">
//             Back
//           </button>
//         </div>
//       )}

//       {currentView === 'winnerBefore' && (
//         <WinnerBefore
//           onSubmit={(data) => console.log(data)}
//           onBack={() => setCurrentView('winnerPredictions')}
//         />
//       )}

//       {currentView === 'winnerAfter' && (
//         <WinnerAfter
//           onSubmit={(data) => console.log(data)}
//           onBack={() => setCurrentView('winnerPredictions')}
//         />
//       )}

//       {currentView === 'firstInnings' && (
//         <First
//           onSubmit={(data) => console.log(data)}
//           onBack={() => setCurrentView('scorePredictions')}
//         />
//       )}

//       {currentView === 'secondInnings' && (
//         <Second
//           onSubmit={(data) => console.log(data)}
//           onBack={() => setCurrentView('scorePredictions')}
//         />
//       )}
//     </div>
//   );
// }

// export default AfterHome;


// import React, { useState } from 'react';
// import WinnerBefore from './Winnerbefore';
// import WinnerAfter from './Winnerafter';
// import First from './First';
// import Second from './Second';

// function AfterHome() {
//   const [currentView, setCurrentView] = useState('');

//   const handleBackToMain = () => setCurrentView('');

//   return (
// <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
//   {currentView === '' && (
//     <div
//       className="d-flex flex-column justify-content-around align-items-center gap-6 mb-4"
//       style={{ width: '100%', maxWidth: '800px' }}
//     >
//       <h1 className="text-center mb-4 text-white" style={{ fontSize: '32px' }}>IPL Prediction</h1>
      
//       {/* Adjusted Parent Flexbox for Buttons with increased GAP */}
//       <div className="d-flex justify-content-center gap-10" style={{ width: '100%' }}>
        
//         {/* Button 1 */}
//         <div className="flex-grow-1 d-flex justify-content-center">
//           <button
//             onClick={() => setCurrentView('winnerPredictions')}
//             className="btn btn-primary"
//             style={{
//               padding: '30px',
//               fontSize: '24px',
//               width: '300px',
//               height: '120px',
//               // background: 'black' 
//             }}
//           >
//             Winner Predictions
//           </button>
//         </div>
        
//         {/* Button 2 */}
//         <div className="flex-grow-1 d-flex justify-content-center">
//           <button
//             onClick={() => setCurrentView('scorePredictions')}
//             className="btn btn-primary"
//             style={{
//               padding: '30px',
//               fontSize: '24px',
//               width: '300px',
//               height: '120px',
//             }}
//           >
//             Score Predictions
//           </button>
//         </div>
//       </div>
//     </div>

//       )}

//       {currentView === 'winnerPredictions' && (
//         <div className="d-flex flex-column justify-content-center align-items-center gap-3 mb-4" style={{ width: '100%', maxWidth: '600px' }}>
//           <h1 className="text-center mb-4 text-white">IPL Prediction</h1>
//           <div className="d-flex justify-content-center gap-5" style={{ width: '100%' }}>
//             <div className="flex-grow-1 d-flex justify-content-center">
//               <button
//                 onClick={() => setCurrentView('winnerBefore')}
//                 className="btn btn-primary"
//                 style={{ padding: '20px', fontSize: '18px', width: '200px' }}
//               >
//                 Winner Before Match
//               </button>
//             </div>
//             <div className="flex-grow-1 d-flex justify-content-center">
//               <button
//                 onClick={() => setCurrentView('winnerAfter')}
//                 className="btn btn-primary"
//                 style={{ padding: '20px', fontSize: '18px', width: '200px' }}
//               >
//                 Winner After Inning
//               </button>
//             </div>
//           </div>
//           <div className="mt-4">
//             <button
//               onClick={handleBackToMain}
//               className="btn btn-danger"
//               style={{ padding: '8px 16px', fontSize: '14px' }}
//             >
//               Back
//             </button>
//           </div>
//         </div>
//       )}

//       {currentView === 'scorePredictions' && (
//         <div className="d-flex flex-column justify-content-center align-items-center gap-3 mb-4" style={{ width: '100%', maxWidth: '600px' }}>
//           <h1 className="text-center mb-4 text-white">IPL Prediction</h1>
//           <div className="d-flex justify-content-center gap-5" style={{ width: '100%' }}>
//             <div className="flex-grow-1 d-flex justify-content-center">
//               <button
//                 onClick={() => setCurrentView('firstInnings')}
//                 className="btn btn-primary"
//                 style={{ padding: '20px', fontSize: '18px', width: '200px' }}
//               >
//                 First Innings Prediction
//               </button>
//             </div>
//             <div className="flex-grow-1 d-flex justify-content-center">
//               <button
//                 onClick={() => setCurrentView('secondInnings')}
//                 className="btn btn-primary"
//                 style={{ padding: '20px', fontSize: '18px', width: '200px' }}
//               >
//                 Second Innings Prediction
//               </button>
//             </div>
//           </div>
//           <div className="mt-4">
//             <button
//               onClick={handleBackToMain}
//               className="btn btn-danger"
//               style={{ padding: '8px 16px', fontSize: '14px' }}
//             >
//               Back
//             </button>
//           </div>
//         </div>
//       )}

//       {currentView === 'winnerBefore' && (
//         <WinnerBefore
//           onSubmit={(data) => console.log(data)}
//           onBack={() => setCurrentView('winnerPredictions')}
//         />
//       )}

//       {currentView === 'winnerAfter' && (
//         <WinnerAfter
//           onSubmit={(data) => console.log(data)}
//           onBack={() => setCurrentView('winnerPredictions')}
//         />
//       )}

//       {currentView === 'firstInnings' && (
//         <First
//           onSubmit={(data) => console.log(data)}
//           onBack={() => setCurrentView('scorePredictions')}
//         />
//       )}

//       {currentView === 'secondInnings' && (
//         <Second
//           onSubmit={(data) => console.log(data)}
//           onBack={() => setCurrentView('scorePredictions')}
//         />
//       )}
//     </div>
//   );
// }

// export default AfterHome;


import React, { useState } from "react";

// Components
import WinnerBefore from "./Winnerbefore";
import WinnerAfter from "./Winnerafter";
import First from "./First";
import Second from "./Second";
import './AfterHome.css';
function AfterHome() {
  const [currentView, setCurrentView] = useState("");

  const handleBackToMain = () => setCurrentView("");

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Main View */}
      {currentView === "" && (
        <div
          className="d-flex flex-column justify-content-around align-items-center gap-6 mb-4"
          style={{ width: "100%", maxWidth: "800px" }}
        >
          <h1
            className="text-center mb-4"
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              textShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            IPL Prediction System
          </h1>
          <div
            className="d-flex justify-content-around align-items-center gap-5"
            style={{ width: "100%" }}
          >
            {/* Winner Predictions Section */}
            <div
              className="d-flex flex-column justify-content-between align-items-center p-4 prediction-card"
              style={{
                width: "300px",
                height: "400px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundImage: `url('src/assets/stumps.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "white",
              }}
            >
              <h2 style={{ fontSize: "24px", margin: 0, color: "white" }}>Winner Predictions</h2>
              <button
                onClick={() => setCurrentView("winnerPredictions")}
                className="btn mt-3"
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  background: "rgba(30, 144, 255, 0.8)",
                  color: "white",
                  boxShadow: "0 0 10px rgba(30, 144, 255, 0.5)",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s, transform 0.3s",
                }}
              >
                Go
              </button>
            </div>

            {/* Score Predictions Section */}
            <div
              className="d-flex flex-column justify-content-between align-items-center p-4 prediction-card"
              style={{
                width: "300px",
                height: "400px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundImage: `url('src/assets/ball.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h2 style={{ fontSize: "24px", margin: 0, color: 'white' }}>Score Predictions</h2>
              <button
                onClick={() => setCurrentView("scorePredictions")}
                className="btn mt-3"
                style={{
                  padding: "10px 20px",
                  fontSize: "16px",
                  borderRadius: "10px",
                  background: "rgba(30, 144, 255, 0.8)",
                  color: "white",
                  boxShadow: "0 0 10px rgba(30, 144, 255, 0.5)",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s, transform 0.3s",
                }}
              >
                Go
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Winner Predictions View */}
      {currentView === "winnerPredictions" && (
        <div
          className="d-flex flex-column justify-content-center align-items-center gap-3 mb-4"
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <h1 className="text-center mb-4">Winner Predictions</h1>
          <div
            className="d-flex justify-content-around gap-4"
            style={{ width: "100%", color: "white" }}
          >
            <div
              className="d-flex flex-column justify-content-between align-items-center p-4 prediction-card"
              style={{
                width: "300px",
                height: "400px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                // backgroundImage: `url('src/assets/trophy.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              
            >
              <h3
  style={{
    fontSize: "40px", // Bigger and bolder font
    margin: 0,
    background: "linear-gradient(to right, #ff7eb3, #ff758c, #ff6a95, #ff5f91)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
    fontWeight: "900", // Bold text
  }}
>
  Winner Before Match
</h3>

              <button
                onClick={() => setCurrentView("winnerBefore")}
                className="btn mt-3"
                style={{
                  padding: "10px",
                  fontSize: "14px",
                  width: "100px",
                  borderRadius: "10px",
                  background: "rgba(30, 144, 255, 0.8)",
                  
                  color: "white",
                  boxShadow: "0 0 10px rgba(30, 144, 255, 0.5)",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s, transform 0.3s",
                }}
              >
                Go
              </button>
            </div>
            <div
              className="d-flex flex-column justify-content-between align-items-center p-4 prediction-card"
              style={{
                width: "300px",
                height: "400px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                // backgroundImage: `url('src/assets/win (2).png')`,
                backgroundSize: "cover",
                backgroundPosition: "center", // Shifted a little to the right
                backgroundRepeat: "no-repeat",
              }}
              
              
            >
              <h3 style={{    fontSize: "40px", // Bigger and bolder font
    margin: 0,
    background: "linear-gradient(to right, #ff7eb3, #ff758c, #ff6a95, #ff5f91)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
    fontWeight: "900", // Bold text
     }}>Winner After Inning</h3>
              <button
                onClick={() => setCurrentView("winnerAfter")}
                className="btn mt-3"
                style={{
                  padding: "10px",
                  fontSize: "14px",
                  width: "100px",
                  borderRadius: "10px",
                  background: "rgba(30, 144, 255, 0.8)",
                  color: "white",
                  boxShadow: "0 0 10px rgba(255, 140, 0, 0.5)",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s, transform 0.3s",
                }}
              >
                Go
              </button>
            </div>
          </div>
          <button
            onClick={handleBackToMain}
            className="btn btn-danger mt-4"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "10px",
              background: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s, transform 0.3s",
            }}
          >
            Back
          </button>
        </div>
      )}

      {/* Score Predictions View */}
      {currentView === "scorePredictions" && (
        <div
          className="d-flex flex-column justify-content-center align-items-center gap-3 mb-4"
          style={{ width: "100%", maxWidth: "600px" }}
        >
          <h1 className="text-center mb-4">Score Predictions</h1>
          <div
            className="d-flex justify-content-around gap-4"
            style={{ width: "100%" }}
          >
            <div
              className="d-flex flex-column justify-content-between align-items-center p-4 prediction-card"
              style={{
                width: "300px",
                height: "400px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                // textAlign: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                // backgroundImage: `url('src/assets/win (2).png')`,
                backgroundSize: "cover",
                backgroundPosition: "center", // Shifted a little to the right
                backgroundRepeat: "no-repeat",
                // background:"black"
              }}
            >
              <h3 style={{     fontSize: "40px", // Bigger and bolder font
    margin: 0,
    background: "linear-gradient(to right, #ff7eb3, #ff758c, #ff6a95, #ff5f91)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
    fontWeight: "900" }}>First Innings Score</h3>
              <button
                onClick={() => setCurrentView("firstInnings")}
                className="btn mt-3"
                style={{
                  padding: "10px",
                  fontSize: "14px",
                  width: "100px",
                  borderRadius: "10px",
                  background: "rgba(30, 144, 255, 0.8)",
                  color: "white",
                  boxShadow: "0 0 10px rgba(30, 144, 255, 0.5)",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s, transform 0.3s",
                }}
              >
                Go
              </button>
            </div>
            <div
              className="d-flex flex-column justify-content-between align-items-center p-4 prediction-card"
              style={{
                width: "300px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3 style={{     fontSize: "40px", // Bigger and bolder font
    margin: 0,
    background: "linear-gradient(to right, #ff7eb3, #ff758c, #ff6a95, #ff5f91)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "3px 3px 5px rgba(0, 0, 0, 0.3)",
    fontWeight: "900" }}>Second Innings Score</h3>
              <button
                onClick={() => setCurrentView("secondInnings")}
                className="btn mt-3"
                style={{
                  padding: "10px",
                  fontSize: "14px",
                  width: "100px",
                  borderRadius: "10px",
                  background: "rgba(30, 144, 255, 0.8)",
                  color: "white",
                  boxShadow: "0 0 10px rgba(255, 140, 0, 0.5)",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s, transform 0.3s",
                }}
              >
                Go
              </button>
            </div>
          </div>
          <button
            onClick={handleBackToMain}
            className="btn btn-danger mt-4"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "10px",
              background: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s, transform 0.3s",
            }}
          >
            Back
          </button>
        </div>
      )}

      {/* Subcomponents */}
      {currentView === "winnerBefore" && <WinnerBefore onBack={handleBackToMain} />}
      {currentView === "winnerAfter" && <WinnerAfter onBack={handleBackToMain} />}
      {currentView === "firstInnings" && <First onBack={handleBackToMain} />}
      {currentView === "secondInnings" && <Second onBack={handleBackToMain} />}
    </div>
  );
}

export default AfterHome;