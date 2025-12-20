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
  const rgb = hexToRgb(colorHex);
  return {
    backgroundColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.18)`,
    border: `1px solid rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.7)`,
    color: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
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
