export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const data = req.body;

  const embed = {
    embeds: [{
      title: "Novo Acesso ao Site",
      description: `**IP:** \`${data.ip}\`\n**País:** ${data.country}\n**Cidade:** ${data.city}\n**Região:** ${data.region}\n**Provedor:** ${data.isp}`,
      color: 16753920,
      footer: { text: "Informações coletadas via site" },
      timestamp: new Date().toISOString()
    }]
  };

  await fetch("https://discord.com/api/webhooks/1377330816664731709/bl_oh9S8js6rhNgBNMmqSplQc7f__4dde322QGU-qSnq-VzQVvjQ_JwRjwDDQX2SDa6I", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(embed)
  });

  res.status(200).json({ status: 'ok' });
}
