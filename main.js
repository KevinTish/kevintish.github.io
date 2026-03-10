/* =============================================
   KEVIN TISH PORTFOLIO — SHARED JS
   - Animated background (floating UMD shapes)
   - Scroll reveal
   - Active nav link
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- ANIMATED BACKGROUND ---------- */
  const canvas = document.getElementById('bg-canvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');

    const RED  = 'rgba(206,17,38,';
    const GOLD = 'rgba(252,209,22,';

    let W, H, shapes;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }

    function randomBetween(a, b) { return a + Math.random() * (b - a); }

    // Shape types: 'circle', 'ring', 'cross', 'diamond'
    function makeShape() {
      const types = ['circle', 'ring', 'diamond', 'cross', 'ring', 'circle'];
      const isGold = Math.random() > 0.6;
      const color  = isGold ? GOLD : RED;
      const size   = randomBetween(10, 60);
      return {
        type:  types[Math.floor(Math.random() * types.length)],
        x:     randomBetween(0, W),
        y:     randomBetween(0, H),
        size,
        color,
        alpha: randomBetween(0.03, 0.12),
        vx:    randomBetween(-0.18, 0.18),
        vy:    randomBetween(-0.12, 0.12),
        rot:   randomBetween(0, Math.PI * 2),
        vrot:  randomBetween(-0.003, 0.003),
      };
    }

    function initShapes() {
      const count = Math.floor(W * H / 28000);
      shapes = Array.from({ length: Math.min(count, 38) }, makeShape);
    }

    function drawShape(s) {
      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.rot);
      ctx.globalAlpha = s.alpha;
      ctx.strokeStyle = s.color + '1)';
      ctx.lineWidth   = 1.5;
      ctx.fillStyle   = s.color + '0.5)';

      switch (s.type) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, s.size, 0, Math.PI * 2);
          ctx.fill();
          break;

        case 'ring':
          ctx.beginPath();
          ctx.arc(0, 0, s.size, 0, Math.PI * 2);
          ctx.stroke();
          // inner ring
          ctx.beginPath();
          ctx.arc(0, 0, s.size * 0.6, 0, Math.PI * 2);
          ctx.stroke();
          break;

        case 'diamond':
          ctx.beginPath();
          ctx.moveTo(0, -s.size);
          ctx.lineTo(s.size * 0.6, 0);
          ctx.lineTo(0, s.size);
          ctx.lineTo(-s.size * 0.6, 0);
          ctx.closePath();
          ctx.stroke();
          break;

        case 'cross':
          const arm = s.size * 0.35;
          const len = s.size;
          ctx.beginPath();
          ctx.rect(-arm, -len, arm*2, len*2);
          ctx.rect(-len, -arm, len*2, arm*2);
          ctx.fill();
          break;
      }

      ctx.restore();
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);

      shapes.forEach(s => {
        s.x   += s.vx;
        s.y   += s.vy;
        s.rot += s.vrot;

        // Wrap around
        if (s.x < -80)  s.x = W + 80;
        if (s.x > W+80) s.x = -80;
        if (s.y < -80)  s.y = H + 80;
        if (s.y > H+80) s.y = -80;

        drawShape(s);
      });

      requestAnimationFrame(tick);
    }

    resize();
    initShapes();
    tick();
    window.addEventListener('resize', () => { resize(); initShapes(); });
  }

  /* ---------- SCROLL REVEAL ---------- */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          // slight stagger for sibling elements
          const siblings = e.target.parentElement.querySelectorAll('.reveal');
          let idx = Array.from(siblings).indexOf(e.target);
          e.target.style.transitionDelay = (idx * 0.07) + 's';
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(el => io.observe(el));
  }

  /* ---------- ACTIVE NAV LINK ---------- */
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

});
