// ThankYouSection.jsx
import { useEffect, useRef } from 'react';
import './ThankYouSection.css';

const ThankYouSection = () => {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const gridSize = 50;

    // Falling lines setup
    const lineCount = 8;
    const lines = Array.from({ length: lineCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      speed: 0.5 + Math.random() * 2,
      length: 10 + Math.random() * 30,
      bursting: false,
      particles: [],
    }));

    const createParticles = (x, y) => {
      const count = 8 + Math.floor(Math.random() * 4);
      const particles = [];

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const speed = 1 + Math.random() * 2;
        particles.push({
          x,
          y,
          dx: Math.cos(angle) * speed,
          dy: Math.sin(angle) * speed,
          alpha: 1,
          radius: 1 + Math.random() * 2,
        });
      }
      return particles;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(0, "#000000");
gradient.addColorStop(1, "#1c002a");
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Create an offscreen canvas to draw the grid
  const gridCanvas = document.createElement("canvas");
  gridCanvas.width = canvas.width;
  gridCanvas.height = canvas.height;
  const gridCtx = gridCanvas.getContext("2d");

  // Draw grid lines
  gridCtx.strokeStyle = "white";
  gridCtx.lineWidth = 1;
  gridCtx.globalAlpha = 0.05;

  for (let x = 0; x < canvas.width; x += 50) {
    gridCtx.beginPath();
    gridCtx.moveTo(x, 0);
    gridCtx.lineTo(x, canvas.height);
    gridCtx.stroke();
  }

  for (let y = 0; y < canvas.height; y += 50) {
    gridCtx.beginPath();
    gridCtx.moveTo(0, y);
    gridCtx.lineTo(canvas.width, y);
    gridCtx.stroke();
  }

  // 3. Apply a vertical alpha gradient mask to the grid
  const alphaGradient = gridCtx.createLinearGradient(0, 0, 0, canvas.height);
  alphaGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
  alphaGradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
  gridCtx.globalCompositeOperation = "destination-in";
  gridCtx.fillStyle = alphaGradient;
  gridCtx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(gridCanvas, 0, 0);
  

      lines.forEach((line) => {
        if (!line.bursting) {
          // Draw falling line
          const headX = line.x;
const headY = line.y + line.length;
const tailX = line.x;
const tailY = line.y;

// Create a vertical gradient from tail to head
const gradient = ctx.createLinearGradient(tailX, tailY, headX, headY);
gradient.addColorStop(0, 'rgba(180, 90, 255, 0.0)');  // Faint tail
gradient.addColorStop(1, 'rgba(180, 90, 255, 0.9)');  // Bright head

ctx.fillStyle = gradient;
ctx.beginPath();
ctx.shadowColor = 'rgba(180, 90, 255, 0.3)';
ctx.shadowBlur = 6;
ctx.moveTo(tailX - 0.4, tailY);  // Thin tail left
ctx.lineTo(headX - 1.6, headY);  // Wide head left
ctx.lineTo(headX + 1.6, headY);  // Wide head right
ctx.lineTo(tailX + 0.4, tailY);  // Thin tail right
ctx.closePath();
ctx.fill();


          line.y += line.speed;

          if (line.y > canvas.height - 10) {
            line.bursting = true;
            line.particles = createParticles(line.x, canvas.height - 5);
          }
        } else {
          // Update burst particles
          line.particles.forEach((p) => {
            p.x += p.dx;
            p.y += p.dy;
            p.alpha -= 0.03;
          });

          // Draw particles
          line.particles = line.particles.filter((p) => p.alpha > 0);
          line.particles.forEach((p) => {
            ctx.beginPath();
            ctx.fillStyle = `rgba(255, 90, 255, ${p.alpha})`;
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fill();
          });

          // Reset line after burst ends
          if (line.particles.length === 0) {
            line.x = Math.random() * canvas.width;
            line.y = 0;
            line.speed = 1 + Math.random();
            line.bursting = false;
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div data-aos="zoom-in" data-aos-delay="100" className="thank-you-container">
      <div className="thank-you-background" />
      <canvas ref={canvasRef} className="thank-you-canvas" />
      <div className="thank-you-glow-frame" />
      <div className="thank-you-content">
        <h2 className="ty-subtitle">For visiting my profile</h2>
        <p className="ty-title">
          <span className="ty-gradient-text">Thank you</span>
          <span className="ty-dot">.</span>
        </p>
      </div>
    </div>
  );
};

export default ThankYouSection;
