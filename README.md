
# 🌟 Farcaster Mini App Starter

This repository provides a **straightforward starting point** for building and deploying your first interactive **Farcaster Mini App** (aka Farcaster Frame) using plain HTML, Tailwind CSS, and JavaScript.

---

## 🧠 What is a Farcaster Frame?

A **Farcaster Frame** is an interactive element embedded directly within the Farcaster social feed. It enables rich in-feed experiences such as polls, games, mints, and more — **without needing users to leave the app**.

This mini-app demonstrates basic client-side interactivity and lays the foundation for building fully interactive Frames powered by your backend.

---

## ✨ Features

✅ Simple HTML structure — easy to understand and customize  
🎨 Tailwind CSS — modern, responsive styling with zero setup  
🧠 Client-side interactivity — click button to cycle messages and images  
🪄 Farcaster-compliant `<meta>` tags for Frame detection  
🚀 Ready to fork, edit, and deploy in minutes  

---

## 🚀 Getting Started

### 🔧 Prerequisites

- A GitHub account to fork the repo  
- A text editor (e.g., VS Code)  
- Basic understanding of HTML, CSS, JavaScript  
- A free hosting provider like Vercel, Netlify, or GitHub Pages  

---

## 📁 Project Structure

```plaintext
farcaster-mini-app-starter/
├── index.html      # Main file containing everything: HTML, Tailwind, JS, and Farcaster meta tags
````

---

## 🍴 Fork and Clone

1. Click the **Fork** button on this GitHub repo
2. Clone your fork locally:

```bash
git clone https://github.com/YOUR_USERNAME/farcaster-mini-app-starter.git
cd farcaster-mini-app-starter
```

---

## 🖊️ Customization

### 🎯 Change Messages and Images

Open `index.html` and scroll to the `<script>` section at the bottom.

Update the following arrays:

```js
const messages = [
  "Hello Farcaster! This is a simple mini-app.",
  "Welcome to my interactive Farcaster experience!",
  "You just clicked the button! Awesome!",
  "Keep exploring Farcaster frames!"
];

const images = [
  "https://placehold.co/600x400/000000/FFFFFF?text=Farcaster+Mini+App",
  "https://placehold.co/600x400/FF0000/FFFFFF?text=Welcome!",
  "https://placehold.co/600x400/00FF00/000000?text=Interactive!",
  "https://placehold.co/600x400/0000FF/FFFFFF?text=Explore!"
];
```

Replace them with your own messages and image URLs. Make sure images are publicly accessible (e.g., hosted on Cloudinary, IPFS, or a CDN).

---

### 🛠️ Update Farcaster Meta Tags

At the top of the HTML file in the `<head>`:

```html
<meta property="og:title" content="My Awesome Farcaster App">
<meta property="og:image" content="YOUR_IMAGE_URL">
<meta property="fc:frame:image" content="YOUR_IMAGE_URL">
<meta property="fc:frame:button:1" content="Discover More!">
<meta property="fc:frame:post_url" content="https://example.com/api/frame-interaction">
```

* `og:title`: App title
* `og:image` and `fc:frame:image`: Preview and display images
* `fc:frame:button:1`: Button text
* `fc:frame:post_url`: URL your Farcaster client POSTs to (can remain placeholder in client-only mode)

---

## ⚙️ Deploying Your App

You can host this mini app on any static hosting provider:

| Hosting Provider               | One-click GitHub Integration | Free Tier |
| ------------------------------ | ---------------------------- | --------- |
| [Vercel](https://vercel.com)   | ✅ Yes                        | ✅         |
| [Netlify](https://netlify.com) | ✅ Yes                        | ✅         |
| GitHub Pages                   | ✅ Yes                        | ✅         |

### 🌍 Deployment Steps (Vercel / Netlify)

```bash
# Stage and push your changes
git add .
git commit -m "Customize my Farcaster Mini App"
git push origin main
```

1. Log in to Vercel or Netlify
2. Import your forked GitHub repo
3. No build settings needed (just use the root folder)
4. Deploy and get a public URL!

---

## 📣 Share on Farcaster

Once deployed:

1. Open your Farcaster client (e.g., Warpcast)
2. Create a new cast
3. Paste your deployed URL
4. Farcaster will auto-detect the Frame tags and render your app 🎉

---

## 🧬 How Farcaster Frame Interactions Work

The tag below defines the POST URL:

```html
<meta property="fc:frame:post_url" content="https://example.com/api/frame-interaction">
```

In a production app, Farcaster clients POST to this URL when the button is clicked.
Your backend responds with updated meta tags, which updates the frame **dynamically in-feed**.

> This starter is **client-only** and does not include a backend. It simulates interaction purely in-browser.

---

## 💡 What’s Next?

To make this fully interactive:

* Build a backend (Node.js/Express, Flask, Vercel serverless, etc.)
* Accept POST requests to `fc:frame:post_url`
* Parse incoming Farcaster Frame data
* Respond with new HTML including updated `<meta>` tags

You can explore:

* ✅ Voting apps
* 🎲 Random games
* 🖼️ NFT minters
* ⛓️ On-chain actions

📚 Learn more in the [Farcaster Frame Spec](https://docs.farcaster.xyz/)

---

## 🤝 Contributing

Feel free to submit pull requests or open issues if you'd like to improve this starter!

---

## 📄 License

MIT — use freely and build awesome stuff 🛠️

---

Happy building on Farcaster 👋

```

---

Let me know if you’d like a deploy badge, sample backend, or an interactive GitHub Pages setup included!
```
