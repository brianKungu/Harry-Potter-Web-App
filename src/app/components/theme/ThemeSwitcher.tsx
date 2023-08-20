"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <>
      {theme === "dark" ? (
        <button onClick={() => setTheme("light")} className="font-boldp">Light</button>
      ) : (
        <button onClick={() => setTheme("dark")} className="font-boldp">Dark</button>
      )}
    </>
  );
};
