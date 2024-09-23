"use client";

import { HiOutlineSun as SunIcon, HiOutlineMoon as MoonIcon } from "react-icons/hi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
 
    if (!theme) {
      setTheme("light");
    }
  }, [theme, setTheme]);

  if (!mounted) return <>...</>;

  if (currentTheme === "dark") {
    return <SunIcon className="h-6 w-6 cursor-pointer" onClick={() => setTheme("light")} />;
  }

  return (
    <MoonIcon className="h-6 w-6 text-primary cursor-pointer" onClick={() => setTheme("dark")} />
  );
}
