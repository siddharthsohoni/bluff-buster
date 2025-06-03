// Utility to get the correct base path for dev/prod
export function getBasePath() {
  return import.meta.env.MODE === 'production' ? '/bluff-buster/#' : '/#/';
}

export const getFullUrl = (path) => {
  const baseUrl = import.meta.env.MODE === 'production' 
    ? 'https://bluff-buster.web.app' 
    : 'http://localhost:5173';
  // Ensure path starts with /#/ for proper routing
  const formattedPath = path.startsWith('/') ? path : `/${path}`;
  const hashPath = formattedPath.startsWith('/#') ? formattedPath : `/#${formattedPath}`;
  return `${baseUrl}${hashPath}`;
}; 