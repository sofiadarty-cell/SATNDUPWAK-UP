import { useEffect } from 'react';

export default function Modal({ isOpen, onClose, dateBadge, status, title, description, ctaLabel, ctaHref = '#' }) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay is-open"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
        <div className="modal__image placeholder-img" />
        <div className="modal__body">
          <div className="modal__badges">
            <span className="modal__date-badge">{dateBadge}</span>
            {status && <span className="modal__status">{status}</span>}
          </div>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="modal__actions">
            <a href={ctaHref} className="btn btn--filled-dark">{ctaLabel}</a>
            <button className="modal__close-text" onClick={onClose}>Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
