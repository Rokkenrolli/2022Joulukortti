import React from "react";

export const useKeyboard = (functions: ((event: KeyboardEvent) => any)[]) => {
  React.useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      functions.forEach((fn) => {
        fn(e);
      });
    };

    document.addEventListener("keydown", handleEnter);
    return () => {
      document.removeEventListener("keydown", handleEnter);
    };
  }, [functions]);

  return null;
};
