<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Simon Game - README</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f4f9;
      color: #333;
      line-height: 1.6;
      padding: 20px;
      max-width: 900px;
      margin: auto;
    }

    h1, h2, h3 {
      color: #2c3e50;
    }

    h1 {
      text-align: center;
      margin-bottom: 10px;
    }

    .badge {
      background: #27ae60;
      color: white;
      padding: 3px 8px;
      border-radius: 5px;
      font-size: 0.8em;
    }

    code {
      background-color: #e8e8e8;
      padding: 2px 4px;
      border-radius: 4px;
      font-family: monospace;
    }

    pre {
      background: #272822;
      color: #f8f8f2;
      padding: 15px;
      border-radius: 8px;
      overflow-x: auto;
    }

    ul {
      margin-top: 0;
    }

    .screenshot {
      margin: 20px 0;
      text-align: center;
    }

    .screenshot img {
      max-width: 100%;
      border: 1px solid #ccc;
      border-radius: 8px;
    }

    .footer {
      margin-top: 30px;
      padding-top: 10px;
      border-top: 1px solid #ddd;
      font-size: 0.9em;
      text-align: center;
      color: #888;
    }

    a {
      color: #3498db;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    hr {
      border: 0;
      border-top: 1px solid #ccc;
      margin: 30px 0;
    }
  </style>
</head>
<body>

  <h1>🧠 Simon Game</h1>
  <p>A web-based memory game built using <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>jQuery</strong>. Inspired by the classic Simon Game!</p>

  <h2>🚀 Features</h2>
  <ul>
    <li>🎮 Interactive color pattern memory game</li>
    <li>🧠 Tracks current <strong>Level</strong> and <strong>Score</strong></li>
    <li>🖥️ Desktop: Press a key to start</li>
    <li>📱 Mobile: Tap the <code>Start Game</code> button</li>
    <li>✅ Visual and audio feedback</li>
    <li>❌ Game Over screen with retry options</li>
  </ul>

  <h2>📱 Responsive Design</h2>
  <p>Adapts seamlessly for both mobile and desktop. Includes tailored game start instructions for each device type.</p>

  <h2>🛠️ Technologies Used</h2>
  <ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript (ES6)</li>
    <li>jQuery</li>
    <li>Google Fonts (Press Start 2P)</li>
  </ul>

  <h2>🎨 Screenshots</h2>
  <div class="screenshot">
    <img src="screenshots/desktop-simon.png" alt="Desktop Screenshot">
    <p><em>Desktop View</em></p>
  </div>
  <div class="screenshot">
    <img src="screenshots/mobile-simon.png" alt="Mobile Screenshot">
    <p><em>Mobile View</em></p>
  </div>

  <h2>📂 Project Structure</h2>
  <pre>
.
├── index.html
├── styles.css
├── game.js
├── sounds/
│   ├── red.mp3
│   ├── blue.mp3
│   ├── green.mp3
│   ├── yellow.mp3
│   └── wrong.mp3
└── README.html
  </pre>

  <h2>🔧 How to Run</h2>
  <ol>
    <li>Clone or download this repository</li>
    <li>Ensure all files are in the same folder</li>
    <li>Open <code>index.html</code> in your browser</li>
    <li>Play and enjoy!</li>
  </ol>

  <h2>👤 Author</h2>
  <p><strong>Kapil Dev Bhandari</strong></p>
  <p>Email: <a href="mailto:youremail@example.com">youremail@example.com</a><br>
     LinkedIn/Portfolio: <a href="https://your-link.com" target="_blank">your-link.com</a></p>

  <h2>📄 License</h2>
  <p>This project is licensed under the <strong>MIT License</strong>. Feel free to use, share, and modify it for your own projects or learning!</p>

  <div class="footer">
    <p>Created with ❤️ by Kapil Dev Bhandari</p>
  </div>

</body>
</html>
