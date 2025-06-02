import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  console.log('=== DÉBUT API CONTACT ===');
  console.log('Méthode:', req.method);
  console.log('Body reçu:', req.body);

  // Permettre seulement les requêtes POST
  if (req.method !== 'POST') {
    console.log('❌ Méthode non autorisée:', req.method);
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  // Vérification des variables d'environnement
  console.log('Variables d\'environnement:');
  console.log('- RESEND_API_KEY existe:', !!process.env.RESEND_API_KEY);
  console.log('- RESEND_API_KEY début:', process.env.RESEND_API_KEY?.substring(0, 10) + '...');
  console.log('- RESEND_FROM_EMAIL:', process.env.RESEND_FROM_EMAIL);
  console.log('- RESEND_TO_EMAIL:', process.env.RESEND_TO_EMAIL);

  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY non configurée');
    return res.status(500).json({ error: 'Configuration serveur manquante - API Key' });
  }

  // Validation des données
  const { name, email, subject, message } = req.body;
  console.log('Données extraites:', { name, email, subject, messageLength: message?.length });

  if (!name || !email || !subject || !message) {
    console.log('❌ Champs manquants');
    return res.status(400).json({ error: 'Tous les champs sont requis' });
  }

  // Validation email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('❌ Email invalide:', email);
    return res.status(400).json({ error: 'Email invalide' });
  }

  try {
    console.log('🚀 Initialisation de Resend...');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@javachrist.fr';
    const toEmail = process.env.RESEND_TO_EMAIL || 'contact@javachrist.fr';

    console.log('📧 Configuration email:');
    console.log('- From:', fromEmail);
    console.log('- To:', toEmail);
    console.log('- Subject:', `[Portfolio] ${subject}`);

    console.log('📤 Envoi de l\'email via Resend...');

    const emailData = {
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
          <h2>Nouveau message depuis votre portfolio</h2>
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <div style="border: 1px solid #ccc; padding: 15px; margin: 15px 0;">
            <h3>Message:</h3>
            <p>${message}</p>
          </div>
          <hr>
          <p style="font-size: 12px; color: #666;">
            Envoyé le ${new Date().toLocaleString('fr-FR')}
          </p>
        </div>
      `,
    };

    console.log('📋 Données email préparées:', {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      replyTo: emailData.replyTo
    });

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('❌ Erreur Resend:', error);
      console.error('❌ Type d\'erreur:', typeof error);
      console.error('❌ Erreur stringifiée:', JSON.stringify(error, null, 2));
      return res.status(500).json({
        error: 'Erreur lors de l\'envoi de l\'email',
        resendError: error
      });
    }

    console.log('✅ Email envoyé avec succès!');
    console.log('✅ ID email:', data?.id);
    console.log('✅ Données complètes:', data);

    return res.status(200).json({
      success: true,
      message: 'Email envoyé avec succès',
      id: data?.id
    });

  } catch (error) {
    console.error('💥 Erreur catch globale:', error);
    console.error('💥 Type d\'erreur:', typeof error);
    console.error('💥 Stack trace:', error instanceof Error ? error.stack : 'Pas de stack trace');

    return res.status(500).json({
      error: 'Erreur interne du serveur',
      details: String(error)
    });
  }
} 