import { getWindDirection } from "../utils/utilities";

const WindStatus = ({ wind }) => {
  const { speed, deg } = wind;

  // Default: Wind direction, degrees (meteorological), As per the design, we get the direction code from the utility function.
  const windDirection = getWindDirection(deg);

  const mphToKmph = (mph) => {
    if (!mph && mph !== 0) return null;
    const kmph = mph * 1.609344;
    return parseFloat(kmph.toFixed(2));
  };

  const speedInKmph = mphToKmph(speed.toFixed(2));

  return (
    <div className="h-48 w-48 rounded-xl bg-white px-4 py-2">
      <h2 className="text-neutral-400">Wind Status</h2>
      <div className="mt-10 text-center">
        <span className="text-4xl">{speedInKmph}</span>
        <span className="ml-1">km/h</span>
      </div>
      <div className="mt-10">
        <span>{windDirection}</span>
      </div>
    </div>
  );
};

export default WindStatus;
