export default function EventCard({ date, title, linkLabel, onClick, as = 'a', href = '#', category }) {
  const Tag = as;
  const extraProps = as === 'button'
    ? { onClick, type: 'button', 'data-category': category }
    : { href };

  return (
    <Tag className="event-card" {...extraProps}>
      <div className="event-card__image placeholder-img" />
      <div className="event-card__stripe" />
      <div className="event-card__legend">
        <div className="event-card__top">
          <span className="event-card__date">{date}</span>
        </div>
        <div className="event-card__title">{title}</div>
        <span className="link-arrow">{linkLabel}</span>
      </div>
    </Tag>
  );
}
