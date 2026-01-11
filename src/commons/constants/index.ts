/**
 * 主题模式
 */
export const THEME_MODE = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
} as const;

/**
 * 主题模式类型
 */
export type ThemeMode = (typeof THEME_MODE)[keyof typeof THEME_MODE];
