/**
 * Scroll Reveal — Intersection Observer
 *
 * 📚 LEÇON — Intersection Observer API
 * Permet de détecter quand un élément entre dans le viewport (la zone visible).
 * AVANT : on utilisait window.addEventListener('scroll') → exécuté des centaines
 *         de fois par seconde, très coûteux en performance.
 * MAINTENANT : IntersectionObserver → le navigateur te prévient seulement quand
 *              l'élément croise le viewport. Zéro polling, très performant.
 */

export function initScrollReveal(): void {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initScrollReveal);
        return;
    }

    // Respecter prefers-reduced-motion : pas d'animation si l'utilisateur le demande
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    // Une fois révélé, on arrête d'observer (pas besoin de re-animer)
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,      // Déclenche quand 10% de l'élément est visible
            rootMargin: '0px 0px -60px 0px', // Déclenche un peu avant le bord bas
        }
    );

    // Observer toutes les sections et glass-cards
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        observer.observe(el);
    });
}
