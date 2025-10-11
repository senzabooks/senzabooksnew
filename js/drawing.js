
(() => {
 
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  let saveIndex = 1;

  Object.assign(canvas.style, {
    position: 'fixed',
    inset: '0',
    width: '100vw',
    height: '100vh',
    display: 'block',
    touchAction: 'none',
    zIndex: '10'
  });

  
  const styleEl = document.createElement('style');
  styleEl.textContent = `html,body{margin:0;height:100%}body{overflow:hidden}`;
  document.head.appendChild(styleEl);
  document.body.appendChild(canvas);

  // characters
  const Animals = [
    "𖠊","𖢥","𖠌","𖠍","𖠐","𖠅","ଳ","ꙮ","𖠽","𖡉","𖢘","𖠑","𖠒","𖡒","𖢂","𖤖","𖠓","𓆈","𓃡","𓆑","𓆑"
  ];
  const lowercase = Array.from({length:26}, (_,i) => String.fromCharCode(97+i));
  const Ink = lowercase.concat(Animals);
  const randChar = () => Ink[(Math.random() * Ink.length) | 0];

  // Root font size helper
  const rootPx = () =>
    Math.max(1, Math.round(parseFloat(getComputedStyle(document.documentElement).fontSize || '16')));

  function resize() {
    const w = Math.max(1, Math.floor(window.innerWidth));
    const h = Math.max(1, Math.floor(window.innerHeight));
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    ctx.font = `${rootPx()}px system-ui, sans-serif`;
    ctx.textBaseline = 'alphabetic';
    ctx.fillStyle = '#000';
  }
  resize();
  addEventListener('resize', resize);

  let drawing = false, lastX = 0, lastY = 0, carry = 0;

  const pos = e => (e.touches ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
                              : { x: e.clientX, y: e.clientY });

  function down(e) {
    e.preventDefault();
    const p = pos(e);
    drawing = true;
    lastX = p.x; lastY = p.y;
    carry = 0;
  }

  function move(e) {
    if (!drawing) return;
    e.preventDefault();
    const p = pos(e);
    const dx = p.x - lastX, dy = p.y - lastY;
    const seg = Math.hypot(dx, dy);

    // spacing ~ root font size works well even for wider glyphs
    const step = Math.max(2, Math.floor(rootPx() * 0.9));
    let dist = carry + seg;
    const n = Math.floor(dist / step);

    if (n > 0) {
      const ux = dx / seg || 0, uy = dy / seg || 0;
      let x = lastX, y = lastY;
      if (carry > 0) { const adv = step - carry; x += ux * adv; y += uy * adv; }
      for (let i = 0; i < n; i++) {
        ctx.fillText(randChar(), x, y);
        x += ux * step; y += uy * step;
      }
      carry = dist - n * step;
    } else {
      carry = dist;
    }
    lastX = p.x; lastY = p.y;
  }

  function up(e) { if (!drawing) return; e.preventDefault(); drawing = false; carry = 0; }

  // Mouse + touch
  canvas.addEventListener('mousedown', down, { passive:false });
  addEventListener('mousemove', move, { passive:false });
  addEventListener('mouseup',   up,   { passive:false });
  canvas.addEventListener('touchstart', down, { passive:false });
  addEventListener('touchmove',  move, { passive:false });
  addEventListener('touchend',   up,   { passive:false });
  addEventListener('touchcancel',up,   { passive:false });

  // Keyboard: "c" = clear, "s" = save PNG screengrab
  addEventListener('keydown', (e) => {
    const k = (e.key || '').toLowerCase();
    if (k === 'c') {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    } else if (k === 's') {
        const a = document.createElement('a');
        const n = String(saveIndex).padStart(3, '0'); // 001, 002, ...
        a.href = canvas.toDataURL('image/png');
        a.download = `hbd-${n}.png`;
        saveIndex++;
        document.body.appendChild(a); a.click(); a.remove();
    }
  });
})();

