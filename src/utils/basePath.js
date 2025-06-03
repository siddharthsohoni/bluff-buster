// Utility to get the correct base path for dev/prod
export function getBasePath() {
  console.log(import.meta.env.MODE)
  return import.meta.env.MODE === 'production' ? '/bluff-buster/#' : '/#/';
}

export function getFullUrl(path) {
  const base = getBasePath();
  const origin = window.location.origin;
  // Remove leading slash from path if it exists
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${origin}${base}${cleanPath}`;
} 