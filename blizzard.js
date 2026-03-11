(() => {
  const canvas = document.getElementById('blizzard');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const flakes = [];
  const density = 170;

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  const createFlake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2.4 + 0.6,
    speedY: Math.random() * 1.8 + 0.8,
    speedX: Math.random() * 1.4 + 0.3,
    alpha: Math.random() * 0.65 + 0.2,
  });

  const init = () => {
    flakes.length = 0;
    for (let i = 0; i < density; i += 1) flakes.push(createFlake());
  };

  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const flake of flakes) {
      flake.x += flake.speedX;
      flake.y += flake.speedY;

      if (flake.y > canvas.height + 5 || flake.x > canvas.width + 5) {
        flake.x = -10;
        flake.y = Math.random() * canvas.height * 0.3;
      }

      ctx.beginPath();
      ctx.fillStyle = `rgba(235,245,255,${flake.alpha})`;
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  };

  resize();
  init();
  draw();
  window.addEventListener('resize', () => {
    resize();
    init();
  });
})();
