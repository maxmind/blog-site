window.addEventListener('DOMContentLoaded', () => {
  // Reopens the Zaraz consent modal so visitors can change their cookie
  // choices.
  document
    .querySelector('.js-cookie-consent')
    ?.addEventListener('click', showConsentModal);

  // Zaraz adds the Google site search widget only after the visitor allows
  // the "Site search (Google)" purpose. Until then, the search button opens
  // the consent modal instead of doing nothing.
  document
    .querySelector('#searchWidgetTrigger')
    ?.addEventListener('click', () => {
      if (!document.querySelector('gen-search-widget')) {
        showConsentModal();
      }
    });
});

function showConsentModal() {
  if (typeof zaraz === 'undefined') {
    console.error('zaraz is not available; cannot open consent modal');
    return;
  }

  zaraz.showConsentModal();
}
