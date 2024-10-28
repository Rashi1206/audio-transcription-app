import React, { useState, useEffect } from 'react';
import { Deepgram } from '@deepgram/sdk';

const MicrophoneButton = ({ onTranscriptionUpdate }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [recorder, setRecorder] = useState(null);

  const deepgram = new Deepgram('YOUR_DEEPGRAM_API_KEY'); // Replace with your API key

  useEffect(() => {
    if (isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [isRecording]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      
      mediaRecorder.addEventListener('dataavailable', async (event) => {
        if (event.data.size > 0) {
          const reader = new FileReader();
          reader.onloadend = () => streamToDeepgram(reader.result);
          reader.readAsArrayBuffer(event.data);
        }
      });

      mediaRecorder.start(100); // Capture audio every 100ms
      setRecorder(mediaRecorder);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (recorder) {
      recorder.stop();
      setRecorder(null);
    }
  };

  const streamToDeepgram = async (audioBuffer) => {
    const connection = deepgram.transcription.live({
      punctuate: true,
      language: 'en',
    });
    
    connection.send(audioBuffer);
    connection.on('transcriptReceived', (transcription) => {
      onTranscriptionUpdate(transcription.channel.alternatives[0].transcript);
    });

    connection.on('close', () => console.log("Connection closed"));
  };

  return (
    <div>
      <button
        onClick={() => setIsRecording(!isRecording)}
        className={`bg-${isRecording ? "red" : "green"}-500 text-white p-2 rounded`}
      >
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <p>{isRecording ? 'Recording...' : 'Not Recording'}</p>
    </div>
  );
};

export default MicrophoneButton;