export default async function handler(req, res) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const newsAlert = "📰 **Alpha Market News**\n\n• BTC showing strong support at $95k.\n• RSI Oversold on 4H timeframe.\n• Positive GDP News detected.";

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text: newsAlert,
      parse_mode: "Markdown"
    }),
  });
  res.status(200).json({ success: true });
}
