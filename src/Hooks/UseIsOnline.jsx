import { useEffect, useState } from "react";

export default useIsOnline = (recheckTimeinSeconds) => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    const valueOfInterval = setTimeout(() => {
      window.addEventListener("online", () => {
        setIsOnline(true);
      });
    }, recheckTimeinSeconds * 1000);

    window.addEventListener("online", () => {
      setIsOnline(true);
    });

    return () => {
      clearInterval(valueOfInterval);
    };
  }, [isOnline]);
};
