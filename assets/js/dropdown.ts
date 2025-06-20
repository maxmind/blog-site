window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.js-dropdown').forEach((dropdown) => {
    const dropdownBtn = dropdown.querySelector('.js-dropdown-btn');
    const dropdownContent = dropdown.querySelector('.js-dropdown-content');
    const caret = dropdownBtn?.querySelector('.js-dropdown-caret');

    dropdownBtn?.addEventListener('click', () => {
      const isExpanded = dropdownBtn?.getAttribute('aria-expanded') === 'true';

      dropdownBtn?.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
      dropdownContent?.classList.toggle('show');
      caret?.classList.toggle('rotate', !isExpanded);
    });
  });
});

// Close the dropdown if the user clicks outside of it
document.addEventListener('click', (event) => {
  const target = event.target as Element;
  if (!target.closest('.js-dropdown')) {
    document
      .querySelectorAll('.js-dropdown-content.show')
      .forEach((dropdownContent) => {
        dropdownContent.classList.remove('show');

        const dropdown = dropdownContent.closest('.js-dropdown');
        const dropdownBtn = dropdown?.querySelector('.js-dropdown-btn');
        const caret = dropdownBtn?.querySelector('.js-dropdown-caret');

        dropdownBtn?.setAttribute('aria-expanded', 'false');
        caret?.classList.remove('rotate');
      });
  }
});
