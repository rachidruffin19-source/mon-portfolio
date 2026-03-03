/**
 * Cursor Glow Effect
 * Suit la souris avec un effet de halo arrondi
 * Optimisé : Throttled, uses transform, GPU-accelerated
 *
 * 📚 LEÇON — Pourquoi le guard DOM ?
 * Quand Vite bundle ce script, il peut s'exécuter AVANT que <body> soit parsé.
 * document.body serait alors null → appendChild() crash silencieusement.
 * Solution : vérifier document.readyState avant d'accéder au DOM.
 */

export function initCursorGlow(): void {
  // Guard DOM : s'assurer que <body> est disponible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCursorGlow);
    return;
  }

  // Créer l'élément glow et l'ajouter au body
  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  document.body.appendChild(glow);

  // Flag pour throttle via RAF (évite les appels trop fréquents)
  let ticking = false;
  let lastX = 0;
  let lastY = 0;

  document.addEventListener('mousemove', (e: MouseEvent) => {
    lastX = e.clientX;
    lastY = e.clientY;

    if (!ticking) {
      requestAnimationFrame(() => {
        // ✅ transform = GPU-accelerated, pas de reflow (contrairement à left/top)
        glow.style.transform = `translate(${lastX}px, ${lastY}px)`;
        ticking = false;
      });
      ticking = true;
    }
  });

  // Cacher sur touch devices (pas de souris = pas de glow)
  document.addEventListener('touchstart', () => {
    glow.style.display = 'none';
  }, { passive: true });
}
