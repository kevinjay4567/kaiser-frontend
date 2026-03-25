import { useCallback, useMemo, useState } from "react";
import type { NotifyMessage } from "@/core/interfaces/NotifyMessage";
import { Outlet } from "react-router";
import { NotifyContext } from "./NotifyContext";

export const NotifyProvider = () => {
  const [message, setMessage] = useState<NotifyMessage>({
    label: "",
    type: "info",
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const notify = useCallback(() => {
    if (isVisible) return;

    setIsVisible(true);

    setTimeout(() => setIsVisible(false), 5000);
  }, [isVisible]);

  const value = useMemo(
    () => ({
      message,
      setMessage,
      isVisible,
      notify,
    }),
    [message, setMessage, isVisible, notify],
  );

  return (
    <NotifyContext.Provider value={value}>
      <Outlet />
    </NotifyContext.Provider>
  );
};
