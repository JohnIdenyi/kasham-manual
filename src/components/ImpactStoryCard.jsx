export default function ImpactStoryCard({ image, text }) {
  return (
    <div className={`impact-stories__card`}>
      <img className="imapct-stories__image" src={image} alt="" />
      <div className="impact-stories__texts">
        <p>Impact stories</p>
        <p className="impact-stories__desc">{text}</p>
      </div>
    </div>
  );
}
