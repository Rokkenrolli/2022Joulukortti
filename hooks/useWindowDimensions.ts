import { useState, useEffect, useCallback } from "react";

const useWindowDimensions = () => {
  const hasWindow = typeof window !== "undefined";

  const getWindowDimensions = useCallback(() => {
    const width = hasWindow ? window.innerWidth : undefined;
    const height = hasWindow ? window.innerHeight : undefined;
    return {
      width,
      height,
    };
  }, [hasWindow]);

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    const handleResize = () => setWindowDimensions(() => getWindowDimensions());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getWindowDimensions, hasWindow]);

  return windowDimensions;
};
export default useWindowDimensions;
