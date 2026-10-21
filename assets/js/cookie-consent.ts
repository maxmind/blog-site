// Reopens the Zaraz consent modal so visitors can change their cookie choices.
window.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('.js-cookie-consent')
    ?.addEventListener('click', () => {
      if (typeof zaraz === 'undefined') {
        console.error('zaraz is not available; cannot open consent modal');
        return;
      }

      zaraz.showConsentModal();
    });
});
