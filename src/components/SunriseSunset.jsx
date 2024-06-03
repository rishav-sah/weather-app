import dayjs from "dayjs";
import ArrowCircleDown from "@mui/icons-material/ArrowCircleDown";
import ArrowCircleUp from "@mui/icons-material/ArrowCircleUp";

const SunriseSunset = ({ sys }) => {
  const { sunrise, sunset } = sys;
  return (
    <div className="h-48 w-48 rounded-xl bg-white p-2 px-4 py-2">
      <h2 className="text-neutral-400">Sunrise & Sunset</h2>
      <div className="my-6">
        <ArrowCircleUp color="warning" fontSize="large" />
        <span className="ml-4 font-medium">
          {dayjs.unix(sunrise).format("h:mm A")}
        </span>
      </div>
      <div>
        <ArrowCircleDown color="warning" fontSize="large" />
        <span className="ml-4 font-medium">
          {dayjs.unix(sunset).format("h:mm A")}
        </span>
      </div>
    </div>
  );
};

export default SunriseSunset;
