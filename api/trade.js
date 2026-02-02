export default async function handler(req, res) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: "🚀 **Alpha Trade Executed**\nConfidence: 88%\nBias: Strong Bullish",
      parse_mode: "Markdown"
    }),
  });
  res.status(200).json({ success: true });
}
