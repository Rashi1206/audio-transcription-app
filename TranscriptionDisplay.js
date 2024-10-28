import React from 'react';

const TranscriptionDisplay = ({ transcription }) => {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-semibold">Live Transcription:</h2>
      <p className="mt-2 text-gray-800">{transcription || "No transcription yet..."}</p>
    </div>
  );
};

export default TranscriptionDisplay;