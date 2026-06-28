export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Méthode non autorisée' });

  try {
    const email = String(req.body?.email || '').trim().toLowerCase();
    if (!email || !email.includes('@')) return res.status(400).json({ error: 'Email invalide' });

    const apiKey = process.env.BREVO_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'Clé manquante' });

    const brevoRes = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
      body: JSON.stringify({ email, listIds: [3], updateEnabled: true })
    });

    if (brevoRes.status === 201 || brevoRes.status === 204) return res.status(200).json({ ok: true });

    const err = await brevoRes.json().catch(() => ({}));
    if (err.code === 'duplicate_parameter') return res.status(200).json({ ok: true });

    return res.status(502).json({ error: 'Erreur Brevo', detail: err });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
}
