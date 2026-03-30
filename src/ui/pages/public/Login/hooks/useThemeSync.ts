import { useEffect, useState } from "react";

export function useThemeSync() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const syncTheme = () => {
      const fromData = document.documentElement.getAttribute("data-theme") === "dark";
      const fromClass = document.documentElement.classList.contains("dark");
      setIsDarkMode(fromData || fromClass);
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "class"] });

    window.addEventListener("storage", syncTheme);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  return isDarkMode;
}
