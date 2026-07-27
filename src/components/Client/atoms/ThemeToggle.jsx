import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "../../../hooks/useTheme";

const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={`grid h-9 w-9 place-items-center rounded-full border border-line
                  bg-surface text-muted transition-colors duration-200
                  hover:text-ink ${className}`}
    >
      {isDark ? <LuSun className="h-4 w-4" /> : <LuMoon className="h-4 w-4" />}
    </button>
  );
};

export default ThemeToggle;
