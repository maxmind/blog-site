// The consent modal and the site search widget both need Zaraz. Content
// blockers can stop Zaraz from loading, so their buttons stay hidden until
// the Zaraz Consent API is ready.
document.addEventListener('zarazConsentAPIReady', showZarazButtons);

window.addEventListener('DOMContentLoaded', () => {
  if (typeof zaraz !== 'undefined' && zaraz.consent?.APIReady) {
    showZarazButtons();
  }

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

function showZarazButtons() {
  document
    .querySelectorAll<HTMLElement>('.js-requires-zaraz-consent')
    .forEach(($button) => {
      $button.hidden = false;
    });
}

function showConsentModal() {
  if (typeof zaraz === 'undefined' || !zaraz.showConsentModal) {
    console.error('Zaraz consent is not available; cannot open consent modal');
    return;
  }

  zaraz.showConsentModal();
}
