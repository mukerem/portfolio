import { useEffect } from 'react';

const useInitTheme = () => {
  useEffect(() => {
    (function (attr, key, fallback, override, options, map, system, colorScheme) {
      const root = document.documentElement;
      const themes = ['light', 'dark'];

      function applyTheme(theme) {
        (Array.isArray(attr) ? attr : [attr]).forEach((el) => {
          const isClass = el === 'class';
          const values = isClass && map ? options.map((t) => map[t] || t) : options;

          if (isClass) {
            root.classList.remove(...values);
            root.classList.add(theme);
          } else {
            root.setAttribute(el, theme);
          }
        });

        if (colorScheme && themes.includes(theme)) {
          root.style.colorScheme = theme;
        }
      }

      applyTheme(override); // <== force light mode
    })('class', 'theme', 'light', 'light', ['light', 'dark'], null, true, true);
  }, []);
};

export default useInitTheme;
