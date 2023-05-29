import { useTime } from "react-time-sync";

export default function useClock() {
  const currentTime = useTime();

  function getTimeParameters() {
    const time = new Date(currentTime * 1000);
    return {
      hours: String(time.getHours()).padStart(2, "0"),
      minutes: String(time.getMinutes()).padStart(2, "0"),
    };
  }

  return { ...getTimeParameters() };
}
