import { useEffect, useState } from "react";

export default function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 100); // espera 100ms antes de mostrar
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#04101B] text-white">
      
      <div
        className={`h-[30px] w-full bg-[#410001] transition-opacity duration-700 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div className="h-[60px] w-full bg-[#004141]"></div>
    </div>
  );
}

