export default async function handler(req, res) {
  const code = req.query.code;

  const response = await fetch('https://discord.com/api/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.DISCORD_CLIENT_ID,
      client_secret: process.env.DISCORD_CLIENT_SECRET,
      grant_type: 'authorization_code',
      code: code as string,
      redirect_uri: process.env.DISCORD_REDIRECT_URI,
    }),
  });

  const data = await response.json();
  if (!data.access_token) return res.status(401).send('Auth failed');

  res.redirect('/dashboard');
}