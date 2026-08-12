import { useEffect, useId, useRef } from 'react';

export default function Modal({ isOpen, onClose, dateBadge, status, title, description, ctaLabel, ctaHref = '#' }) {
  const titleId = useId();
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousActiveElement = document.activeElement;

    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key !== 'Tab') return;

      const focusableElements = modalRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );

      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    const focusTimeout = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
      window.clearTimeout(focusTimeout);
      previousActiveElement?.focus?.();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay is-open"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div ref={modalRef} className="modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="modal__image placeholder-img" />
        <div className="modal__body">
          <div className="modal__badges">
            <span className="modal__date-badge">{dateBadge}</span>
            {status && <span className="modal__status">{status}</span>}
          </div>
          <h2 id={titleId}>{title}</h2>
          <p>{description}</p>
          <div className="modal__actions">
            <a href={ctaHref} className="btn btn--filled-dark">{ctaLabel}</a>
            <button ref={closeButtonRef} className="modal__close-text" onClick={onClose}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
