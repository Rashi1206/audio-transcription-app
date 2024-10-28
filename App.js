
import React, { useState } from 'react';
import MicrophoneButton from './components/MicrophoneButton';
import TranscriptionDisplay from './components/TranscriptionDisplay';
import HistoryList from './components/HistoryList';

const App = () => {
  const [transcription, setTranscription] = useState('');
  
  const updateTranscription = (newTranscription) => {
    setTranscription(newTranscription);
    
    // Save to localStorage for history
    const history = JSON.parse(localStorage.getItem('transcriptionHistory')) || [];
    history.push(newTranscription);
    localStorage.setItem('transcriptionHistory', JSON.stringify(history));
  };

  return (
    <div className="App p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Audio Transcription App</h1>
      
      <MicrophoneButton onTranscriptionUpdate={updateTranscription} />
      <TranscriptionDisplay transcription={transcription} />
      <HistoryList />
    </div>
  );
};

export default App;