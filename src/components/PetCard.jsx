function PetCard({
  name,
  type,
  description,
  count,
  boopIncrement,
  image,
  onClick,
}) {
  return (
    <div className="card w-25 m-3">
      <div
        className="card-body d-flex flex-column"
        style={{ width: "250px", height: "225px" }}
      >
        <h2>{name}</h2>
        <span style={{ color: "green" }}>{type}</span>
        <p style={{ color: "grey" }}>{description}</p>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => onClick(boopIncrement)}
        >
          Boops: {count}
        </button>
        <span> {count > 10 ? "This pet is extremely booped." : ""} </span>
      </div>
      <img
        src={image}
        alt={name}
        className="card-image"
        style={{ width: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

export default PetCard;
