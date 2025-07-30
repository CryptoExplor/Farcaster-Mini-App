// api/frame.js
// This file will serve as your Vercel Serverless Function for the Farcaster Frame backend.

// Import the Express.js framework
const express = require('express');
const app = express();

// Middleware to parse JSON bodies (for incoming Farcaster frame data)
app.use(express.json());

// Define the messages and images that your Farcaster Frame will cycle through.
// These should be publicly accessible URLs.
const messages = [
    "Hello Farcaster! This is a simple mini-app.",
    "Welcome to my interactive Farcaster experience!",
    "You just clicked the button! Awesome!",
    "Keep exploring Farcaster frames!"
];

const images = [
    "https://picsum.photos/600/400?random=1",
    "https://picsum.photos/600/400?random=2",
    "https://picsum.photos/600/400?random=3",
    "https://picsum.photos/600/400?random=4"
];

// This is the endpoint that Farcaster clients will POST to when a button is clicked.
// It will be accessible at YOUR_VERCEL_APP_DOMAIN/api/frame
app.post('/api/frame', (req, res) => {
    // Farcaster sends frame data in the request body.
    // The 'untrustedData' object contains useful information like the current frame state.
    const { untrustedData } = req.body;

    // Extract the current frame state (e.g., the current image index).
    // If it's the first interaction, untrustedData.state might be undefined or empty.
    // We'll use a simple counter for this example.
    let currentState = 0;
    try {
        if (untrustedData && untrustedData.state) {
            // Attempt to parse the state from the incoming request.
            // The state is typically a string, so parse it to an integer.
            currentState = parseInt(untrustedData.state, 10);
            if (isNaN(currentState)) {
                currentState = 0; // Reset if parsing fails
            }
        }
    } catch (e) {
        console.error("Error parsing state:", e);
        currentState = 0; // Default to 0 on error
    }

    // Determine the next state
    const nextState = (currentState + 1) % messages.length;

    // Get the message and image for the next state
    const nextMessage = messages[nextState];
    const nextImage = images[nextState];

    // Construct the HTML response with updated Farcaster Frame meta tags.
    // This HTML is what the Farcaster client will render next.
    const frameHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Farcaster Mini App</title>
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="${nextImage}" />
            <meta property="fc:frame:post_url" content="https://YOUR_VERCEL_APP_DOMAIN/api/frame" />
            <meta property="fc:frame:button:1" content="Click for a new message!" />
            <!-- Pass the next state back to the frame for the next interaction -->
            <meta property="fc:frame:state" content="${nextState}" />
        </head>
        <body>
            <!-- This body content is not displayed by Farcaster clients, but good practice to include -->
            <h1>Frame Updated!</h1>
            <p>${nextMessage}</p>
        </body>
        </html>
    `;

    // Set the Content-Type header to 'text/html' for Farcaster clients
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(frameHtml);
});

// Export the Express app for Vercel's serverless function environment
module.exports = app;
