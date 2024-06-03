const Visibility = ({ visibility }) => {
  let status = "";
  let emoji = "";

  if (visibility < 3000) {
    status = "Low";
    emoji = "😓";
  } else if (visibility <= 7000) {
    status = "Moderate";
    emoji = "👍";
  } else {
    status = "High";
    emoji = "😎";
  }

  const mToKm = (m) => {
    if (!m && m !== 0) return null;
    const km = m / 1000;
    return parseFloat(km.toFixed(2));
  };

  const visibilityInKm = mToKm(visibility);

  return (
    <div className="h-48 w-48 rounded-xl bg-white px-4 py-2">
      <h2 className="text-neutral-400">Visibility</h2>
      <div className="mt-10 text-center">
        <span className="text-4xl">{visibilityInKm}</span>
        <span className="ml-1">km</span>
      </div>
      <div className="mt-10">
        <span>
          {status} {emoji}
        </span>
      </div>
    </div>
  );
};

export default Visibility;
