import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

serve(async (req) => {
  try {
    const payload = await req.json()
    
    // Récupération de l'enregistrement inséré dans la table 'leads' via le webhook Supabase
    const record = payload.record || payload.new

    if (!record) {
      return new Response(JSON.stringify({ error: "Aucun enregistrement trouvé" }), { status: 400 })
    }

    const { full_name, email, company, pole_interest, message } = record

    // Appel de l'API Resend pour envoyer l'e-mail à l'administrateur
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Excellencia Mabe Hub <onboarding@resend.dev>',
        to: ['contact@excelenciamabe.org'],
        subject: `[Nouveau Lead] ${full_name} - Pôle ${pole_interest}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 30px; background-color: #FCFAF6; color: #1A1A1A; border: 1px solid #e0e0e0; max-width: 600px; margin: 0 auto;">
            <div style="border-bottom: 2px solid #C9A227; padding-bottom: 15px; margin-bottom: 25px;">
              <h2 style="color: #1A1A1A; text-transform: uppercase; font-size: 18px; margin: 0; letter-spacing: 1px;">Nouveau Message - Excellencia Mabe</h2>
              <span style="color: #C9A227; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; font-weight: bold;">Pôle de communication & Leads</span>
            </div>
            
            <p style="margin: 8px 0;"><strong>Nom complet :</strong> ${full_name}</p>
            <p style="margin: 8px 0;"><strong>Adresse e-mail :</strong> <a href="mailto:${email}" style="color: #C9A227;">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Entreprise / Organisation :</strong> ${company || 'Non renseignée'}</p>
            <p style="margin: 8px 0;"><strong>Pôle d'intérêt :</strong> <span style="background: #C9A227; color: black; padding: 2px 8px; font-size: 11px; font-weight: bold; border-radius: 2px;">${pole_interest}</span></p>
            
            <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
              <p style="text-transform: uppercase; font-size: 10px; letter-spacing: 1.5px; color: #717171; margin-bottom: 10px;"><strong>Message du client :</strong></p>
              <blockquote style="background: #ffffff; padding: 15px; border-left: 3px solid #C9A227; margin: 0; font-style: italic; color: #525252; line-height: 1.6;">
                "${message}"
              </blockquote>
            </div>

            <div style="margin-top: 30px; text-align: center; font-size: 9px; color: #999; text-transform: uppercase; letter-spacing: 1.5px;">
              Notification automatique - CRM Excellencia Mabe Group
            </div>
          </div>
        `,
      }),
    })

    const data = await res.json()

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    })
  }
})