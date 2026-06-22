export const config = { runtime: 'edge' };

export default async function handler(req) {
  // CORS : autorise uniquement mi-endo.vercel.app
  const origin = req.headers.get('origin') || '';
  const autorise = origin.includes('mi-endo.vercel.app') || origin.includes('localhost');

  const headers = {
    'Access-Control-Allow-Origin': autorise ? origin : 'https://mi-endo.vercel.app',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  if (req.method !== 'POST') return new Response(JSON.stringify({ error: 'Méthode non autorisée' }), { status: 405, headers });

  let email;
  try {
    const body = await req.json();
    email = (body.email || '').trim().toLowerCase();
  } catch {
    return new Response(JSON.stringify({ error: 'Corps de requête invalide' }), { status: 400, headers });
  }

  if (!email || !email.includes('@') || !email.includes('.')) {
    return new Response(JSON.stringify({ error: 'Email invalide' }), { status: 400, headers });
  }

  // La clé API est lue depuis les variables d'environnement Vercel (jamais dans le code)
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Configuration serveur manquante' }), { status: 500, headers });
  }

  try {
    const res = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'api-key': apiKey },
      body: JSON.stringify({ email, listIds: [3], updateEnabled: true })
    });

    // 201 = créé, 204 = mis à jour (contact existant)
    if (res.status === 201 || res.status === 204) {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
    }

    const erreur = await res.json();
    // doublon traité comme un succès (l'utilisatrice est déjà inscrite)
    if (erreur.code === 'duplicate_parameter') {
      return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
    }

    console.error('Brevo error:', erreur);
    return new Response(JSON.stringify({ error: 'Erreur Brevo' }), { status: 502, headers });

  } catch (err) {
    console.error('Fetch error:', err);
    return new Response(JSON.stringify({ error: 'Erreur réseau' }), { status: 502, headers });
  }
}
