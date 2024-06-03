const AirQuality = () => {
  return (
    <div className="flex h-48 w-48 justify-center rounded-xl bg-white p-2 px-4 py-2">
      <div className="w-2/3">
        <h2 className="text-neutral-400">Air Quality</h2>
        <div className="mt-8 text-4xl">105</div>
        <div className="mt-12">
          <span>Unhealthy 👎</span>
        </div>
      </div>

      <div className="mr-4 w-1/3 self-center">
        <div className="relative left-[70%] h-24 w-8 overflow-hidden rounded-full border border-gray-300">
          <div
            className={`absolute bottom-0 h-full w-full bg-blue-600`}
            style={{ height: `55%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AirQuality;
