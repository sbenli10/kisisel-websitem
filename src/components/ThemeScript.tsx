// src/components/ThemeScript.tsx
export default function ThemeScript() {
  const code = `
  (function() {
    try {
      var ls = localStorage.getItem('theme');
      var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var theme = ls || (systemDark ? 'dark' : 'light');
      var root = document.documentElement;
      if (theme === 'dark') root.classList.add('dark');
      else root.classList.remove('dark');
      // color-scheme ipucu (form kontrolleri vs.)
      root.style.colorScheme = theme;
    } catch (_) {}
  })();`;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
