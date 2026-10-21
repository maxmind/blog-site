// The Zaraz web API that Cloudflare injects into each page. It is undefined
// when Zaraz does not load.
declare const zaraz:
  | {
      showConsentModal: () => void;
      track: (
        eventName: string,
        properties?: Record<string, string>
      ) => Promise<void>;
    }
  | undefined;
