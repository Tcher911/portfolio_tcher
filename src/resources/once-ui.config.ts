import type {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  StyleConfig,
} from "@/types";
import { home } from "./index";

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL: string = "https://tcher.co";

const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
};

const display: DisplayConfig = {
  location: true,
  time: true,
  themeSwitcher: true,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes: ProtectedRoutesConfig = {
  // Add protected routes here if needed
};

// Import and set font for each variant
import localFont from 'next/font/local';

const heading = localFont({
  src: [
    {
      path: '../../public/fonts/LINESeedSansTH_W_Th.woff',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LINESeedSansTH_W_Rg.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LINESeedSansTH_W_Bd.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LINESeedSansTH_W_He.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LINESeedSansTH_W_XBd.woff',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-heading',
  display: 'swap',
  preload: true,
  fallback: ['LINE Seed Sans TH', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

const body = localFont({
  src: [
    {
      path: '../../public/fonts/LINESeedSansTH_W_Rg.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LINESeedSansTH_W_Bd.woff',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-body',
  display: 'swap',
  preload: true,
  fallback: ['LINE Seed Sans TH', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

const label = localFont({
  src: [
    {
      path: '../../public/fonts/LINESeedSansTH_W_Rg.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/LINESeedSansTH_W_Bd.woff',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-label',
  display: 'swap',
  preload: true,
  fallback: ['LINE Seed Sans TH', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

const code = localFont({
  src: [
    {
      path: '../../public/fonts/LINESeedSansTH_W_Rg.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-code',
  display: 'swap',
  preload: true,
  fallback: ['LINE Seed Sans TH', 'JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
});

const fonts: FontsConfig = {
  heading: heading,
  body: body,
  label: label,
  code: code,
};

// default customization applied to the HTML in the main layout.tsx
const style: StyleConfig = {
  theme: "system", // dark | light | system
  neutral: "gray", // sand | gray | slate | custom
  brand: "aqua", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  accent: "aqua", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan | custom
  solid: "contrast", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const dataStyle: DataStyleConfig = {
  variant: "gradient", // flat | gradient | outline
  mode: "categorical", // categorical | divergent | sequential
  height: 24, // default chart height
  axis: {
    stroke: "var(--neutral-alpha-weak)",
  },
  tick: {
    fill: "var(--neutral-on-background-weak)",
    fontSize: 11,
    line: false,
  },
};

const effects: EffectsConfig = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    opacity: 100,
    x: 50,
    y: 60,
    width: 100,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "page-background",
  },
  dots: {
    display: true,
    opacity: 40,
    size: "2",
    color: "brand-background-strong",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-weak",
    size: "16",
    thickness: 1,
    angle: 45,
  },
};

const mailchimp: MailchimpConfig = {
  action: "https://tcher.co/subscribe",
  effects: {
    mask: {
      cursor: true,
      x: 50,
      y: 0,
      radius: 100,
    },
    gradient: {
      display: true,
      opacity: 90,
      x: 50,
      y: 0,
      width: 50,
      height: 50,
      tilt: 0,
      colorStart: "accent-background-strong",
      colorEnd: "static-transparent",
    },
    dots: {
      display: true,
      opacity: 20,
      size: "2",
      color: "brand-on-background-weak",
    },
    grid: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      width: "0.25rem",
      height: "0.25rem",
    },
    lines: {
      display: false,
      opacity: 100,
      color: "neutral-alpha-medium",
      size: "16",
      thickness: 1,
      angle: 90,
    },
  },
};

// default schema data
const schema: SchemaConfig = {
  logo: "",
  type: "Person",
  name: "Teach Akarachat",
  description: "Product Engineer specializing in UX/UI design and development",
  email: "teach.akarachat@gmail.com",
};

// social links
const sameAs: SameAsConfig = {
  threads: "https://www.tiktok.com/@tcher.co",
  linkedin: "https://github.com/Tcher911",
  discord: "mailto:teach.akarachat@gmail.com",
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  effects,
  dataStyle,
};
