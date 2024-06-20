import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = `${newTheme}-mode`;
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = `${savedTheme}-mode`;
    } else {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultTheme = prefersDarkScheme ? "dark" : "light";
      setTheme(defaultTheme);
      document.body.className = `${defaultTheme}-mode`;
    }
  }, []);

  return (
    <div className="absolute top-5 right-5 flex items-center">
      <label className="relative inline-block w-[60px] h-[34px]">
        <input
          type="checkbox"
          className="opacity-0 w-0 h-0"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[#ccc] rounded-[34px] duration-[0.4s] before:absolute before:content-[''] before:h-[26px] before:w-[26px] before:left-1 before:bottom-1 before:bg-white before:rounded-full before:duration-[0.4s] after:content-['☀️'] after:absolute after:left-[5px] after:bottom-[3px] after:text-lg after:duration-[0.4s] slider"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
