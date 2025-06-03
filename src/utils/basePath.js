// Utility to get the correct base path for dev/prod
export function getBasePath() {
  return import.meta.env.MODE === 'production' ? '/bluff-buster/#' : '/#/';
}

export const getFullUrl = (path) => {
  // Use the current origin (domain) for the base URL
  const baseUrl = window.location.origin;
  // Add the base path for GitHub Pages in production
  const basePath = import.meta.env.MODE === 'production' ? '/bluff-buster' : '';
  // Ensure path starts with /#/ for proper routing
  const formattedPath = path.startsWith('/') ? path : `/${path}`;
  const hashPath = formattedPath.startsWith('/#') ? formattedPath : `/#${formattedPath}`;
  return `${baseUrl}${basePath}${hashPath}`;
}; 