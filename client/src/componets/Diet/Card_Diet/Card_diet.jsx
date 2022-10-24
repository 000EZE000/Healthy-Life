export default function CardDiet({ id, name, info, image }) {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p>{info}</p>
    </div>
  );
}
