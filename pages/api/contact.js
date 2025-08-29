export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;
    // Here you would normally send the message via email service or save to database.
    // For demonstration, we'll just log it.
    console.log('Nova mensagem de contato:', { name, email, message });
    return res.status(200).json({ ok: true });
  }
  return res.status(405).json({ message: 'Method not allowed' });
}