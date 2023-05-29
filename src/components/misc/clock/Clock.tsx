import useClock from "./useClock";
import "./Clock.scss";

export default function Clock() {
  const { hours, minutes } = useClock();
  return (
    <div id="clock">
      <div className="time-container">
        {hours.split("").map((t) => (
          <span key={t} className="time-container--value">
            {t}
          </span>
        ))}
      </div>
      <span className="divider"> : </span>
      <div className="time-container">
        {minutes.split("").map((t) => (
          <span key={t} className="time-container--value">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
