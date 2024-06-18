import React, { useState } from "react";
import Toggle from "react-toggle";
// import { useMediaQuery } from "react-responsive";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  //   const systemPrefersDark = useMediaQuery(
  //     {
  //       query: "(prefers-color-scheme: dark)",
  //     },
  //     undefined,
  //     (isSystemDark) => setIsDark(isSystemDark)
  //   );

  return (
    <Toggle
      checked={isDark}
      onChange={({ target }) => setIsDark(target.checked)}
      icons={{ checked: "🌙", unchecked: "🔆" }}
      aria-label="Dark mode toggle"
    />
  );
};
