/**
 * Global Design System Tokens & Color Theme for Asmual-AquaNature
 * Aquatic Ocean Theme
 */

export const themeColors = {
  // Primary (deep navy-teal) -> top bar, footer, primary buttons, headings
  primary: {
    DEFAULT: "#0B4A6F",
    dark: "#083A57",
    foreground: "#FFFFFF",
  },
  // Accent (bright aqua/cyan) -> highlighted words, badges, subscribe button, active links
  accent: {
    DEFAULT: "#22D3EE",
    soft: "#E0F7FA",
    foreground: "#0F172A",
  },
  // Neutral / Layout
  background: "#FFFFFF",
  surface: {
    DEFAULT: "#F1F6F9",
    foreground: "#0F172A",
  },
  border: "#E2E8F0",
  // Typography
  text: {
    primary: "#0F172A",
    muted: "#64748B",
  },
  // Special Tags
  highlight: "#F59E0B", // Gold: Star ratings only
  danger: "#EF4444", // Red: Small "Hot" / "Deals" tags only
} as const;

export const designTokens = {
  borderRadius: {
    card: "12px",
    input: "10px",
    button: "9999px", // fully rounded (pill)
  },
  shadows: {
    soft: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    hover: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  },
  spacing: {
    section: "py-12 md:py-16",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  },
  transitions: {
    default: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    smooth: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;
