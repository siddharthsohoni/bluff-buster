// Utility to get the correct base path for dev/prod
export function getBasePath() {
  console.log(import.meta.env.MODE)
  return import.meta.env.MODE === 'production' ? '/bluff-buster/#' : '/#/';
}

export function getFullUrl(path) {
  const base = getBasePath();
  const origin = window.location.origin;
  // Ensure no double slashes
  return `${origin}${base}${path.startsWith('/') ? path : '/' + path}`;
} 