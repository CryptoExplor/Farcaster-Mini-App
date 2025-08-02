// api/mint-frame.js
// This file serves the Farcaster Frame launched by the Mini App for minting.

export default function handler(req, res) {
  // This frame will be launched by the Mini App.
  // You can add your actual minting logic here,
  // e.g., using Wagmi or viem to interact with a smart contract.

  // For now, we'll just show a simple confirmation frame.
  const frameHtml = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Mint NFT Frame</title>
            <meta property="fc:frame" content="vNext" />
            <meta property="fc:frame:image" content="${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""}/mint-success.png" />
            <meta property="fc:frame:post_url" content="${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""}/api/mint-frame" />
            <meta property="fc:frame:button:1" content="View on OpenSea" />
            <meta property="fc:frame:button:1:action" content="link" />
            <meta property="fc:frame:button:1:target" content="https://opensea.io/collection/fararb" />
            <meta property="fc:frame:button:2" content="Back to Mini App" />
            <meta property="fc:frame:button:2:action" content="link" />
            <meta property="fc:frame:button:2:target" content="${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : ""}/" />
        </head>
        <body>
            <h1>NFT Minted!</h1>
            <p>Your NFT has been successfully minted.</p>
        </body>
        </html>
    `

  res.setHeader("Content-Type", "text/html")
  res.status(200).send(frameHtml)
}
