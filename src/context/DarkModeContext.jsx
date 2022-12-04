import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    // setDarkMode((mode) => !mode);
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  // 애플리케이션이 시작될 때 딱 한 번 세팅값을 확인
  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark); // Provider 내부 state에 업데이트
    updateDarkMode(isDark); // html에 class 추가
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    // 로컬 스토리지에 theme을 저장
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}
export const useDarkMode = () => useContext(DarkModeContext);
