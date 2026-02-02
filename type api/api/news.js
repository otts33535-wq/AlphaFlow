export default async function handler(req, res) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  // Fetching from a free news sample
  const news = "📰 *Market Alert:* BTC showing strong support at $95k. High volume detected in Alpha flows.";

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: news,
      parse_mode: "Markdown"
    }),
  });

  res.status(200).json({ success: true });
}
