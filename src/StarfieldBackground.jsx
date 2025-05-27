import { useRef, useEffect } from 'react';

const StarfieldBackground = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);
  const comets = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const numStars = 100;
    stars.current = Array.from({ length: numStars }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      speedX: Math.random() * 0.1 - 0.05,
      speedY: Math.random() * 0.1 - 0.05,
    }));

    const spawnComet = () => {
      // Random chance to spawn a comet
      if (Math.random() < 0.01) {
        comets.current.push({
          x: -100,
          y: Math.random() * canvas.height * 0.8,
          speedX: 5 + Math.random() * 2,
          speedY: 1 + Math.random(),
          length: 150 + Math.random() * 100,
          opacity: 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      ctx.fillStyle = 'white';
      stars.current.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });

      // Spawn and draw comets
      spawnComet();
      comets.current.forEach((comet, i) => {
        const gradient = ctx.createLinearGradient(
          comet.x,
          comet.y,
          comet.x - comet.length,
          comet.y - comet.length * 0.2
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${comet.opacity})`);
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(comet.x - comet.length, comet.y - comet.length * 0.2);
        ctx.stroke();

        comet.x += comet.speedX;
        comet.y += comet.speedY;
        comet.opacity -= 0.01;

        // Remove comet if it's out of bounds or faded
        if (comet.x > canvas.width + 200 || comet.opacity <= 0) {
          comets.current.splice(i, 1);
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-99 pointer-events-none"
    />
  );
};

export default StarfieldBackground;
