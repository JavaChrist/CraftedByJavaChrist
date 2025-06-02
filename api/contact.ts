const { Resend } = require('resend');

module.exports = async function handler(req: any, res: any) {
  // Permettre seulement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  // Vérification de la clé API
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY non configurée');
    return res.status(500).json({ error: 'Configuration serveur manquante' });
  }

  // Validation des données
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis' });
  }

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email invalide' });
  }

  // Protection anti-spam
  if (message.length > 5000) {
    return res.status(400).json({ error: 'Message trop long (max 5000 caractères)' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@javachrist.fr';
    const toEmail = process.env.RESEND_TO_EMAIL || 'contact@javachrist.fr';

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Nouveau message depuis votre portfolio</h1>
          </div>
          
          <div style="padding: 30px;">
            <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #3b82f6;">
              <h2 style="color: #1f2937; margin: 0 0 15px 0; font-size: 18px;">Informations du contact</h2>
              <p style="margin: 8px 0; color: #374151;"><strong>Nom :</strong> ${name}</p>
              <p style="margin: 8px 0; color: #374151;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></p>
              <p style="margin: 8px 0; color: #374151;"><strong>Sujet :</strong> ${subject}</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 25px; border: 1px solid #e5e7eb; border-radius: 12px; margin-bottom: 25px;">
              <h3 style="color: #1f2937; margin: 0 0 15px 0; font-size: 16px; border-bottom: 2px solid #f3f4f6; padding-bottom: 10px;">Message :</h3>
              <div style="line-height: 1.6; color: #374151; white-space: pre-wrap;">${message}</div>
            </div>
            
            <div style="background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); padding: 20px; border-radius: 12px; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #1e40af;">
                <strong>💡 Pour répondre :</strong> Cliquez sur "Répondre" ou utilisez directement l'email ${email}
              </p>
            </div>
          </div>
          
          <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
            <p style="margin: 0; font-size: 12px; color: #6b7280;">
              Ce message a été envoyé via le formulaire de contact de votre portfolio<br>
              ${new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' })}
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
    }

    console.log('✅ Email envoyé avec succès:', data?.id);
    return res.status(200).json({
      success: true,
      message: 'Email envoyé avec succès',
      id: data?.id
    });

  } catch (error) {
    console.error('Erreur serveur:', error);
    return res.status(500).json({ error: 'Erreur interne du serveur' });
  }
}; 