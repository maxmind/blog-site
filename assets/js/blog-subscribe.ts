// Submits the blog subscription form to HubSpot via the Zaraz HubSpot tool.
// The property names passed to zaraz.track() must match the internal field
// names of the HubSpot form.
declare const zaraz:
  | {
      track: (
        eventName: string,
        properties?: Record<string, string>
      ) => Promise<void>;
    }
  | undefined;

window.addEventListener('DOMContentLoaded', () => {
  const $form = document.querySelector<HTMLFormElement>('#blog-subscribe-form');
  if (!$form) {
    return;
  }

  const showError = () => {
    let $error = $form.querySelector<HTMLParagraphElement>('.hs-error-msg');
    if (!$error) {
      $error = document.createElement('p');
      $error.className = 'hs-error-msg';
      $form.append($error);
    }
    $error.innerText =
      'Sorry, something went wrong. Please try again in a moment.';
  };

  $form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (typeof zaraz === 'undefined') {
      console.error('zaraz is not available; subscription not submitted');
      showError();
      return;
    }

    const formData = new FormData($form);
    const properties: Record<string, string> = {};
    formData.forEach((value, key) => {
      if (typeof value === 'string') {
        properties[key] = value;
      }
    });

    zaraz
      .track('blog_subscription', properties)
      .then(() => {
        const $message = document.createElement('p');
        $message.className = 'submitted-message';
        $message.innerText =
          'Thanks for subscribing. Keep an eye out for new articles!';
        $form.replaceWith($message);
      })
      .catch((error) => {
        console.error(error);
        showError();
      });
  });
});
