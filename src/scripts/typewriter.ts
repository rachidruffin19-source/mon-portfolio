/**
 * Typewriter Effect
 * Écrit et efface des mots un par un dans un élément DOM
 *
 * 📚 LEÇON — Même problème que cursorGlow :
 * Sans guard DOM, document.querySelector() retourne null
 * si le script s'exécute avant que le HTML soit parsé.
 */

export function initTypewriter(selector = '#typewriter', words: string[] = []) {
  // Guard DOM : s'assurer que le DOM est prêt avant querySelector
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initTypewriter(selector, words));
    return;
  }

  try {
    const el = document.querySelector<HTMLElement>(selector);
    if (!el) return; // L'élément n'existe pas → on sort proprement

    let wIndex = 0;
    let cIndex = 1;
    let deleting = false;

    function type() {
      const word = words[wIndex] || '';
      if (!el) return;

      // Écrire ou effacer lettre par lettre
      el.textContent = deleting ? word.slice(0, cIndex--) : word.slice(0, cIndex++);

      if (!deleting && cIndex > word.length) {
        // Mot complet → pause avant d'effacer
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
      if (deleting && cIndex < 0) {
        // Mot effacé → passer au suivant
        deleting = false;
        wIndex = (wIndex + 1) % words.length;
        cIndex = 1;
        setTimeout(type, 200);
        return;
      }

      // Vitesse : effacement plus rapide que l'écriture
      setTimeout(type, deleting ? 45 : 85);
    }

    if (words.length > 0) type();
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('Typewriter init failed', err);
  }
}
