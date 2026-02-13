/**
 * RD Station Marketing API Integration
 * 
 * This service sends contact form data to RD Station via their API.
 * 
 * Setup instructions:
 * 1. Get the API key from RD Station Marketing > Integrações > API
 * 2. Replace RD_STATION_API_KEY with the actual key
 * 3. Optionally configure the conversion identifier
 * 
 * API Docs: https://developers.rdstation.com/reference/conversions
 */

const RD_STATION_API_KEY = ''; // TODO: Add the client's RD Station API key
const RD_STATION_CONVERSION_URL = 'https://api.rd.services/platform/conversions';

interface RDStationPayload {
  nome: string;
  email: string;
  empresa: string;
  telefone: string;
  mensagem: string;
}

export async function sendToRDStation(data: RDStationPayload): Promise<boolean> {
  if (!RD_STATION_API_KEY) {
    console.warn('[RD Station] API key not configured. Form data not sent.');
    return false;
  }

  try {
    const payload = {
      event_type: 'CONVERSION',
      event_family: 'CDP',
      payload: {
        conversion_identifier: 'contato-site',
        name: data.nome,
        email: data.email,
        company: data.empresa,
        mobile_phone: data.telefone,
        cf_mensagem: data.mensagem,
      },
    };

    const response = await fetch(RD_STATION_CONVERSION_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RD_STATION_API_KEY}`,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`[RD Station] API error [${response.status}]: ${errorBody}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error('[RD Station] Failed to send conversion:', error);
    return false;
  }
}
