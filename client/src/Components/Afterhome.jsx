import React, { useState } from 'react';
import WinnerBefore from './Winnerbefore';
import WinnerAfter from './Winnerafter';
import First from './First';
import Second from './Second';

function AfterHome() {
  const [currentView, setCurrentView] = useState('');

  const handleBackToMain = () => setCurrentView('');

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <h1 className="text-center mb-4">IPL Prediction</h1>

      {currentView === '' && (
        <div className="d-flex flex-column justify-content-center align-items-center gap-3 mb-4" style={{ width: '100%', maxWidth: '400px' }}>
          <button onClick={() => setCurrentView('winnerPredictions')} className="btn btn-primary w-100">
            Winner Predictions
          </button>
          <button onClick={() => setCurrentView('scorePredictions')} className="btn btn-primary w-100">
            Score Predictions
          </button>
        </div>
      )}

      {currentView === 'winnerPredictions' && (
        <div className="d-flex flex-column justify-content-center align-items-center gap-3 mb-4" style={{ width: '100%', maxWidth: '400px' }}>
          <button onClick={() => setCurrentView('winnerBefore')} className="btn btn-primary w-100">
            Winner Before Match
          </button>
          <button onClick={() => setCurrentView('winnerAfter')} className="btn btn-primary w-100">
            Winner After Inning
          </button>
          <button onClick={handleBackToMain} className="btn btn-danger w-100">
            Back
          </button>
        </div>
      )}

      {currentView === 'scorePredictions' && (
        <div className="d-flex flex-column justify-content-center align-items-center gap-3 mb-4" style={{ width: '100%', maxWidth: '400px' }}>
          <button onClick={() => setCurrentView('firstInnings')} className="btn btn-primary w-100">
            First Innings Score Prediction
          </button>
          <button onClick={() => setCurrentView('secondInnings')} className="btn btn-primary w-100">
            Second Innings Score Prediction
          </button>
          <button onClick={handleBackToMain} className="btn btn-danger w-100">
            Back
          </button>
        </div>
      )}

      {currentView === 'winnerBefore' && (
        <WinnerBefore
          onSubmit={(data) => console.log(data)}
          onBack={() => setCurrentView('winnerPredictions')}
        />
      )}

      {currentView === 'winnerAfter' && (
        <WinnerAfter
          onSubmit={(data) => console.log(data)}
          onBack={() => setCurrentView('winnerPredictions')}
        />
      )}

      {currentView === 'firstInnings' && (
        <First
          onSubmit={(data) => console.log(data)}
          onBack={() => setCurrentView('scorePredictions')}
        />
      )}

      {currentView === 'secondInnings' && (
        <Second
          onSubmit={(data) => console.log(data)}
          onBack={() => setCurrentView('scorePredictions')}
        />
      )}
    </div>
  );
}

export default AfterHome;
