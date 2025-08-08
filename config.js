const config = require('./config');

sock.ev.on('messages.upsert', async ({ messages }) => {
  const msg = messages[0];
  if (!msg.message || !msg.message.conversation) return;

  const text = msg.message.conversation.trim().toLowerCase();
  const from = msg.key.remoteJid;

  if (text === '.owner') {
    const ownerNumber = config.ownerNumber.replace('@s.whatsapp.net', '');

    await sock.sendMessage(from, {
      text: `🤖 *Owner de Kirito-Bot*:\n\n📱 Número: +529241560311${ownerNumber}\n\nPuedes contactarlo para soporte o dudas.`,
      // Opcional: Puedes agregar contacto vCard:
      contacts: [
        {
          displayName: 'Owner Manuvps22',
          contacts: [{ vcard: `
BEGIN:VCARD
VERSION:3.0
FN:Owner Kirito-Bot
TEL;waid=${ownerNumber}:${ownerNumber}
END:VCARD
          ` }],
        },
      ],
    });
  }
});
