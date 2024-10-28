# Audio Transcription App

A simple web application that allows users to record audio, transcribe it in real-time using Deepgram's transcription service, and display the transcribed text on the UI.

## Features

- **Microphone Component**: Start and stop audio recording with a button, with visual feedback.
- **Real-Time Transcription**: Uses Deepgram's live streaming transcription API to transcribe recorded audio.
- **Responsive UI**: Clean and user-friendly interface, responsive across different screen sizes.
- **Error Handling**: Displays error messages if transcription fails or the microphone is unavailable.

## Technologies Used

- **React**: For building a responsive user interface.
- **Deepgram API**: For streaming audio transcription.
- **MediaRecorder API**: For handling audio recording in the browser.
- **Tailwind CSS**: (Optional) For styling the UI.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/audio-transcription-app.git
   cd audio-transcription-app
