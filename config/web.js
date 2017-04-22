export const web = {
  port  : process.env.HTTP_PORT || 3000
};

export function normalizePort(val) {
  let port = (typeof val === 'string') ? parseInt(val, 10) : val;
  if (isNaN(port)) return val;
  else if (port >= 0) return port;
  else return false;
}
