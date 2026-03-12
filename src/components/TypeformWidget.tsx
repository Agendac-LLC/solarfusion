import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { CONTACT_TYPEFORM_HIDDEN_FIELDS, ensureTypeformScript } from "@/lib/typeform";

interface TypeformWidgetProps {
  formId: string;
  formUrl: string;
  title: string;
  embedClassName?: string;
  fallbackMessage?: string;
  fallbackCtaLabel?: string;
  hiddenFields?: string;
  secondaryActionHref?: string;
  secondaryActionLabel?: string;
  secondaryActionExternal?: boolean;
}

const TypeformWidget = ({
  formId,
  formUrl,
  title,
  embedClassName,
  fallbackMessage = "Si le formulaire s'affiche mal sur Safari, ouvrez la version plein ecran.",
  fallbackCtaLabel = "Ouvrir le formulaire",
  hiddenFields = CONTACT_TYPEFORM_HIDDEN_FIELDS,
  secondaryActionHref,
  secondaryActionLabel,
  secondaryActionExternal = false,
}: TypeformWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [embedUnavailable, setEmbedUnavailable] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let readinessTimeout: number | undefined;

    const mountWidget = async () => {
      const container = containerRef.current;
      if (!container) {
        return;
      }

      if (/HeadlessChrome|ReactSnap/i.test(navigator.userAgent)) {
        setEmbedUnavailable(true);
        return;
      }

      setEmbedUnavailable(false);
      container.innerHTML = "";

      const widget = document.createElement("div");
      widget.setAttribute("data-tf-widget", formId);
      widget.setAttribute("data-tf-medium", "snippet");
      widget.setAttribute("data-tf-iframe-props", `title=${title}`);
      widget.setAttribute("data-tf-inline-on-mobile", "");
      widget.setAttribute("data-tf-disable-scroll", "");
      widget.setAttribute("data-tf-auto-resize", "");
      widget.setAttribute("data-tf-transitive-search-params", "");
      if (hiddenFields) {
        widget.setAttribute("data-tf-hidden", hiddenFields);
      }
      widget.style.width = "100%";
      widget.style.height = "auto";
      container.appendChild(widget);

      try {
        await ensureTypeformScript();
        if (cancelled) {
          return;
        }

        window.requestAnimationFrame(() => {
          window.tf?.load?.();
        });

        readinessTimeout = window.setTimeout(() => {
          if (!cancelled && !container.querySelector("iframe")) {
            setEmbedUnavailable(true);
          }
        }, 4000);
      } catch {
        if (!cancelled) {
          setEmbedUnavailable(true);
        }
      }
    };

    void mountWidget();

    return () => {
      cancelled = true;
      if (readinessTimeout) {
        window.clearTimeout(readinessTimeout);
      }
    };
  }, [formId, hiddenFields, title]);

  return (
    <div role="region" aria-label={title}>
      <div
        ref={containerRef}
        className={cn(embedClassName, embedUnavailable && "hidden")}
      />

      <div className="border-t border-border/40 px-5 py-4 sm:px-0 sm:pt-4">
        <p className="text-xs leading-relaxed text-muted-foreground">
          {embedUnavailable
            ? "Le formulaire ne s'est pas charge correctement sur cet appareil."
            : fallbackMessage}
        </p>

        <div className="mt-3 flex flex-wrap gap-3">
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-background transition-colors duration-300 hover:bg-foreground/90"
          >
            {fallbackCtaLabel}
          </a>

          {embedUnavailable && secondaryActionHref && secondaryActionLabel ? (
            <a
              href={secondaryActionHref}
              target={secondaryActionExternal ? "_blank" : undefined}
              rel={secondaryActionExternal ? "noopener noreferrer" : undefined}
              className="inline-flex items-center justify-center rounded-full border border-border/60 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground transition-colors duration-300 hover:border-foreground/60 hover:text-foreground"
            >
              {secondaryActionLabel}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default TypeformWidget;