export const TAG_COLORS = {
  Python: "#3776AB",
  SQL: "#2CA5A9",
  "Node.js": "#83CD29",
  React: "#61DAFB",
  Tailwind: "#38BDF8",
  Kafka: "#231F20",
  dbt: "#F96800",
  Airflow: "#017CEE",
  GraphQL: "#E10098",
  FastAPI: "#059669",
  "LangChain": "#6D28D9",
  "OpenAI API": "#00A67E",
  "Vector DB": "#7C3AED",
  Vite: "#646CFF",
  Supabase: "#3FCF8E",
};

export function tagStyle(colorHex) {
  const textColor = getContrastColor(colorHex);
  return {
    backgroundColor: colorHex,
    color: textColor,
  };
}

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  const bigint = parseInt(h, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

function getContrastColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  const [sr, sg, sb] = [r, g, b].map(v => v / 255);
  const a = [sr, sg, sb].map(c => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
  const luminance = 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  return luminance > 0.5 ? '#0B0B0B' : '#FFFFFF';
}
