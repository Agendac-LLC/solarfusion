const TYPEFORM_SCRIPT_SRC = "https://embed.typeform.com/next/embed.js";

export const CONTACT_TYPEFORM_FORM_ID = "eYcBxXn6";
export const CONTACT_TYPEFORM_URL = `https://form.typeform.com/to/${CONTACT_TYPEFORM_FORM_ID}`;
export const CONTACT_TYPEFORM_HIDDEN_FIELDS = "utm_source=,utm_medium=,utm_campaign=,utm_term=,fbclid=,gclid=,li_uuid=,ttclid=,utm_content=";

declare global {
  interface Window {
    tf?: {
      load?: () => void;
      reload?: () => void;
    };
    __solarfusionTypeformPromise__?: Promise<void>;
  }
}

const waitForTypeformApi = () =>
  new Promise<void>((resolve, reject) => {
    let attempts = 0;
    const maxAttempts = 60;

    const check = () => {
      if (window.tf?.load) {
        resolve();
        return;
      }

      attempts += 1;
      if (attempts >= maxAttempts) {
        reject(new Error("Typeform API was not ready in time."));
        return;
      }

      window.setTimeout(check, 100);
    };

    check();
  });

export const ensureTypeformScript = () => {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.tf?.load) {
    return Promise.resolve();
  }

  if (window.__solarfusionTypeformPromise__) {
    return window.__solarfusionTypeformPromise__;
  }

  window.__solarfusionTypeformPromise__ = new Promise<void>((resolve, reject) => {
    const finishLoading = () => {
      waitForTypeformApi().then(resolve).catch(reject);
    };

    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${TYPEFORM_SCRIPT_SRC}"]`);
    if (existingScript) {
      finishLoading();
      return;
    }

    const script = document.createElement("script");
    script.src = TYPEFORM_SCRIPT_SRC;
    script.async = true;
    script.onload = finishLoading;
    script.onerror = () => {
      window.__solarfusionTypeformPromise__ = undefined;
      reject(new Error("Failed to load Typeform embed script."));
    };
    document.body.appendChild(script);
  }).catch((error) => {
    window.__solarfusionTypeformPromise__ = undefined;
    throw error;
  });

  return window.__solarfusionTypeformPromise__;
};