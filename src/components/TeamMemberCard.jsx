export default function TeamMemberCard({ name, role, image }) {
  return (
    <div className="member">
      <img src={image} alt={`${name}`} className="member__img" />
      <h4 className="member__name">{name}</h4>
      <p className="member__role">{role}</p>
    </div>
  );
}
