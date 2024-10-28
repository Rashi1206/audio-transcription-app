
import React, { useEffect, useState } from 'react';

const HistoryList = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const savedHistory = JSON.parse(localStorage.getItem('transcriptionHistory')) || [];
    setHistory(savedHistory);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('transcriptionHistory');
    setHistory([]);
  };

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded">
      <h2 className="text-lg font-semibold">Past Transcriptions:</h2>
      {history.length ? (
        <ul>
          {history.map((item, index) => (
            <li key={index} className="mt-2 text-gray-800">{item}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No past transcriptions.</p>
      )}
      <button onClick={clearHistory} className="mt-4 bg-red-500 text-white p-2 rounded">
        Clear History
      </button>
    </div>
  );
};

export default HistoryList;

