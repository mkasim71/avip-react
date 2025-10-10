import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // cleanup: hapus interval saat komponen unmount
    return () => clearInterval(timer);
  }, []); // hanya sekali jalan

  return (
    <div>
      <h2>Waktu Sekarang: </h2>
      <h1>{time}</h1>
    </div>
  );
}
