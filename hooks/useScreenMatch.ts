import { useState, useEffect } from "react";

const useScreenMatch = (size: number) => {
  const [isMatch, setIsMatch] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMatch(window.innerWidth < size);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  return isMatch;
};

export default useScreenMatch; 