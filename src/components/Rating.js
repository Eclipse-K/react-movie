const RATINGS = [1, 2, 3, 4, 5];

function Star({ selected = false }) {
  const className = `Rating-star ${selected ? "selected" : ""}`;
  return <span className={className}>★</span>;
}

function Rating({ value = 0 }) {
  return (
    <div>
      <Rating selected={value >= 1} />
      <Rating selected={value >= 2} />
      <Rating selected={value >= 3} />
      <Rating selected={value >= 4} />
      <Rating selected={value >= 5} />
    </div>
  );
}

export default Rating;
