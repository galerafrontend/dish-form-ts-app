import { useEffect } from "react";

const useStatus = (
  status: string | null,
  setStatus: React.Dispatch<React.SetStateAction<string | null>>
) => {
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [status, setStatus]);
};

export default useStatus;
