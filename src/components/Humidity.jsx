const Humidity = ({ humidity }) => {
  let status = "";
  let emoji = "";

  if (humidity < 30) {
    status = "Low";
    emoji = "😓";
  } else if (humidity <= 60) {
    status = "Normal";
    emoji = "👍";
  } else {
    status = "High";
    emoji = "😰";
  }

  return (
    <div className="flex h-48 w-48 justify-center rounded-xl bg-white p-2 px-4 py-2">
      <div className="w-2/3">
        <h2 className="text-neutral-400">Humidity</h2>
        <div className="mt-8 text-4xl">
          {humidity}
          <sup>%</sup>
        </div>

        <div className="mt-12">
          <span>
            {status} {emoji}
          </span>
        </div>
      </div>

      <div className="mr-4 w-1/3 self-center">
        <div className="relative left-[70%] h-24 w-8 overflow-hidden rounded-full border border-gray-300">
          <div
            className={`absolute bottom-0 h-full w-full bg-blue-600`}
            style={{ height: `${humidity}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
