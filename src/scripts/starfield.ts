interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  parallax: number;
  color: string;
}

export function initStarfield(): void {
  const canvasEl = document.getElementById('starfield') as HTMLCanvasElement | null;
  if (!canvasEl) return;
  if (typeof window === 'undefined') return;

  const minWidthToRun = 420; // disable on very small screens
  if (window.innerWidth < minWidthToRun) {
    canvasEl.style.display = 'none';
    return;
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    canvasEl.style.display = 'none';
    return;
  }

  const ctx = canvasEl.getContext('2d');
  if (!ctx) return;

  const canvas = canvasEl as HTMLCanvasElement;
  const context = ctx as CanvasRenderingContext2D;

  let stars: Star[] = [];

  // OffscreenCanvas initialization will happen after we set canvas size
  let offscreenCanvas: OffscreenCanvas | null = null;
  let offscreenCtx: any = null;

  function setSize() {
    const w = Math.max(1, window.innerWidth);
    const h = Math.max(1, window.innerHeight);
    canvas.width = w;
    canvas.height = h;
    if (offscreenCanvas) {
      offscreenCanvas.width = w;
      offscreenCanvas.height = h;
      try {
        offscreenCtx = offscreenCanvas.getContext('2d');
      } catch {
        offscreenCtx = null;
      }
    }
  }

  function createStars(count: number) {
    const palette = ['255,255,255', '200,170,255', '170,220,255', '220,200,255'];
    const w = canvas.width;
    const h = canvas.height;
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 1.8 + 0.2,
      baseOpacity: Math.random() * 0.6 + 0.15,
      twinkleSpeed: Math.random() * 0.025 + 0.004,
      twinkleOffset: Math.random() * Math.PI * 2,
      parallax: Math.random() * 0.45 + 0.05,
      color: palette[Math.floor(Math.random() * palette.length)],
    }));
  }

  // Try to use OffscreenCanvas for smoother drawing when available
  if (typeof OffscreenCanvas !== 'undefined') {
    try {
      offscreenCanvas = new OffscreenCanvas(window.innerWidth || 1, window.innerHeight || 1);
      offscreenCtx = offscreenCanvas.getContext('2d');
    } catch (e) {
      offscreenCanvas = null;
      offscreenCtx = null;
    }
  }

  // Determine counts: mobile vs desktop
  const isMobile = window.innerWidth < 768;
  const count = isMobile ? 200 : 820;

  // Initialize sizes and stars
  setSize();
  createStars(count);

  let rafId = 0;

  function draw(ts: number) {
    const t = ts * 0.001; // seconds
    const target = offscreenCtx ?? ctx;
    try {
      target.clearRect(0, 0, canvas.width, canvas.height);
    } catch {}

    const scrollY = window.scrollY || 0;

    for (const s of stars) {
      const twinkle = Math.sin(t * s.twinkleSpeed + s.twinkleOffset);
      const opacity = s.baseOpacity * (0.45 + 0.55 * ((twinkle + 1) / 2));
      const screenY = s.y - scrollY * s.parallax;

      if (screenY < -8 || screenY > canvas.height + 8) continue;

      try {
        target.beginPath();
        target.arc(s.x, screenY, s.size, 0, Math.PI * 2);
        target.fillStyle = `rgba(${s.color}, ${opacity.toFixed(3)})`;
        target.fill();
      } catch (e) {
        // ignore draw errors
      }
    }

    // Blit offscreen to main canvas when used
    if (offscreenCanvas) {
      try {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(offscreenCanvas as unknown as CanvasImageSource, 0, 0);
      } catch (e) {
        // fallback: do nothing
      }
    }

    rafId = requestAnimationFrame(draw);
  }

  function onResize() {
    const oldW = canvas.width;
    const oldH = canvas.height;
    const newW = Math.max(1, window.innerWidth);
    const newH = Math.max(1, window.innerHeight);
    if (newW === oldW && newH === oldH) return;
    const rx = newW / Math.max(1, oldW);
    const ry = newH / Math.max(1, oldH);
    // scale existing stars to maintain relative positions
    for (const s of stars) {
      s.x = s.x * rx;
      s.y = s.y * ry;
    }
    setSize();
  }

  window.addEventListener('resize', onResize, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(rafId);
    else rafId = requestAnimationFrame(draw);
  });

  // Start loop
  rafId = requestAnimationFrame(draw);

  // Cleanup on unload
  window.addEventListener('beforeunload', () => {
    cancelAnimationFrame(rafId);
    try {
      window.removeEventListener('resize', onResize);
    } catch {}
  });
}
