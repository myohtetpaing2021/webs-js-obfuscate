<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>1 Year Anniversary</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #fbc2eb, #a18cd1);
      background-size: 400% 400%;
      animation: gradientBG 10s ease infinite;
      color: #ffffff;
      text-align: center;
      overflow: hidden;
    }

    @keyframes gradientBG {
      0% {
        background-position: 0% 50%;
      }

      50% {
        background-position: 100% 50%;
      }

      100% {
        background-position: 0% 50%;
      }
    }

    canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    h1 {
      font-size: 4.5rem;
      margin-bottom: 20px;
      animation: fadeIn 2s ease-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .countdown {
      font-size: 30px;
      margin-top: 10px;
      animation: fadeIn 2.5s ease-out;
    }

    .typewriter {
      border-right: 3px solid #ffffff;
      animation: typing 4s steps(50, end), blink 0.7s step-end infinite;
    }
  </style>
</head>

<body class="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 text-white min-h-screen flex flex-col">
  <header class="fixed top-0 left-0 w-full bg-opacity-30 bg-black text-white py-6 shadow-lg text-center z-50">
    <h1 class="text-3xl font-bold">🎉 1 Year Anniversary 🎉</h1>
    <p class="mt-2">I love you more than I can say</p>
  </header>

  <main class="container mx-auto mt-24 mb-24 px-4">
    <div class="text-center max-w-xl mx-auto p-8 bg-opacity-20 bg-white rounded-lg shadow-lg">
        <div id="message" class="hidden mb-6">
            <span class="typewriter"></span>
          </div>
        <button id="showMessageBtn" class="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800 transition duration-300">
            Message for you
          </button>
          
    </div>
  </main>

  <footer class="fixed bottom-0 left-0 w-full bg-opacity-30 bg-black text-white py-4 shadow-lg text-center z-50">
    <p>Made with ❤️ for you</p>
  </footer>

  <canvas id="heartsCanvas"></canvas>
  <script>
    // Hearts animation
    const canvas = document.getElementById("heartsCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hearts = [];

    class Heart {
      constructor(x, y, size, speed, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.color = color;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.bezierCurveTo(
          this.x - this.size / 2,
          this.y - this.size / 2,
          this.x - this.size,
          this.y + this.size / 3,
          this.x,
          this.y + this.size
        );
        ctx.bezierCurveTo(
          this.x + this.size,
          this.y + this.size / 3,
          this.x + this.size / 2,
          this.y - this.size / 2,
          this.x,
          this.y
        );
        ctx.closePath();
        ctx.fill();
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = -this.size;
          this.x = Math.random() * canvas.width;
        }
        this.draw();
      }
    }

    function initHearts() {
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height - canvas.height;
        const size = Math.random() * 20 + 10;
        const speed = Math.random() * 2 + 1;
        const color = `rgba(255, 20, 147, ${Math.random()})`;
        hearts.push(new Heart(x, y, size, speed, color));
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hearts.forEach((heart) => heart.update());
      requestAnimationFrame(animate);
    }

    initHearts();
    animate();

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      hearts.length = 0;
      initHearts();
    });

    document.addEventListener("DOMContentLoaded", () => {
      const messageText = "Happy 1-year anniversary, my love! ❤️ Thank you so much for being by my side throughout this entire year. Through the good times and the bad, you’ve always been there, and I love you so much for that. Now and always, I hope you’ll stay by my side, just as I’ll always be by yours. Starting from this 1-year milestone, let’s continue to be together for many more years to come. I love you endlessly! I love you more than I can say 💖";
      const showMessageBtn = document.getElementById("showMessageBtn");
      const messageEl = document.getElementById("message");
      const typewriterEl = document.querySelector(".typewriter");

      showMessageBtn.addEventListener("click", () => {
        if (!typewriterEl.textContent) {
          let i = 0;
          const interval = setInterval(() => {
            typewriterEl.textContent += messageText[i];
            i++;
            if (i >= messageText.length) clearInterval(interval);
          }, 100);
          messageEl.classList.remove("hidden");
        }
      });
    });
  </script>
</body>

</html>
