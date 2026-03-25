import type { NotifyMessage } from "@/core/interfaces/NotifyMessage";
import { createContext } from "react";

type ContextResult = {
  message: NotifyMessage;
  isVisible: boolean;
  notify: () => void;
  setMessage: (input: NotifyMessage) => void;
};

const contextDefault: ContextResult = {
  message: {
    label: "",
    type: "info",
  },
  isVisible: false,
  notify: () => {},
  setMessage: () => {},
};

export const NotifyContext = createContext<ContextResult>(contextDefault);
