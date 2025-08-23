"use client";

import { dataStyle, style } from "@/resources";
import { useEffect } from "react";

export function ThemeInitializer() {
  useEffect(() => {
    try {
      const root = document.documentElement;
      const defaultTheme = "system";

      // Set defaults from config
      const config = {
        brand: style.brand,
        accent: style.accent,
        neutral: style.neutral,
        solid: style.solid,
        "solid-style": style.solidStyle,
        border: style.border,
        surface: style.surface,
        transition: style.transition,
        scaling: style.scaling,
        "viz-style": dataStyle.variant,
      };

      // Apply default values
      for (const [key, value] of Object.entries(config)) {
        root.setAttribute(`data-${key}`, value);
      }

      // Resolve theme
      const resolveTheme = (themeValue: string | null) => {
        if (!themeValue || themeValue === "system") {
          return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }
        return themeValue;
      };

      // Apply saved theme
      const savedTheme = localStorage.getItem("data-theme");
      const resolvedTheme = resolveTheme(savedTheme);
      root.setAttribute("data-theme", resolvedTheme);

      // Apply any saved style overrides
      const styleKeys = Object.keys(config);
      for (const key of styleKeys) {
        const value = localStorage.getItem(`data-${key}`);
        if (value) {
          root.setAttribute(`data-${key}`, value);
        }
      }
    } catch (e) {
      console.error("Failed to initialize theme:", e);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  return null;
}
