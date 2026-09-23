export function isSameOrigin(request) {
  const origin = request.headers.get('origin');
  if (!origin) return true;
  try {
    const source = new URL(origin);
    // Next.js may construct request.url using its bind address behind a proxy.
    // Host is the browser's destination; do not accept arbitrary forwarded hosts.
    const destination = request.headers.get('host') || new URL(request.url).host;
    return ['http:', 'https:'].includes(source.protocol) && source.host === destination;
  } catch { return false; }
}
