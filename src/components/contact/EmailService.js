import axios from 'axios';

class EmailService {
  constructor() {
    console.log('🔧 EmailService constructor llamado');
    this.apiKey = process.env.REACT_APP_BREVO_API_KEY;
    this.baseURL = 'https://api.brevo.com/v3';
    
    console.log('🔧 EmailService inicializado');
    console.log('🔑 API Key:', this.apiKey ? 'Configurada' : 'NO CONFIGURADA');
    console.log('📬 Email destinatario:', process.env.REACT_APP_RECIPIENT_EMAIL || 'NO CONFIGURADO');
    console.log('🌐 Base URL:', this.baseURL);
  }

  async sendEmail(formData) {
    console.log('🚀 Iniciando envío de email...');
    console.log('📧 Datos del formulario:', formData);
    console.log('🔑 API Key configurada:', this.apiKey ? 'SÍ' : 'NO');
    console.log('📬 Email destinatario:', process.env.REACT_APP_RECIPIENT_EMAIL);
    
    try {
      const emailData = {
        sender: {
          name: 'SurCode Contact Form',
          email: 'blackflameroma@gmail.com'
        },
        to: [
          {
            email: process.env.REACT_APP_RECIPIENT_EMAIL,
            name: 'SurCode Team'
          }
        ],
        subject: `Nuevo mensaje de contacto: ${formData.subject}`,
        htmlContent: this.generateEmailHTML(formData),
        textContent: this.generateEmailText(formData)
      };

      console.log('📤 Datos del email a enviar:', emailData);
      console.log('🌐 URL de la API:', `${this.baseURL}/smtp/email`);

      const response = await axios.post(
        `${this.baseURL}/smtp/email`,
        emailData,
        {
          headers: {
            'api-key': this.apiKey,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('✅ Email enviado exitosamente!');
      console.log('📨 Respuesta de Brevo:', response.data);

      return {
        success: true,
        message: 'Email enviado correctamente',
        data: response.data
      };
    } catch (error) {
      console.error('❌ Error enviando email:', error);
      console.error('🔍 Detalles del error:', {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data
      });
      
      return {
        success: false,
        message: 'Error al enviar el email. Por favor, intenta nuevamente.',
        error: error.response?.data || error.message
      };
    }
  }

  generateEmailHTML(formData) {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Nuevo mensaje de contacto - SurCode</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #66d3fa, #ffd26f); padding: 20px; border-radius: 8px; margin-bottom: 20px; }
          .header h1 { color: #fff; margin: 0; text-align: center; }
          .content { background: #f9f9f9; padding: 20px; border-radius: 8px; }
          .field { margin-bottom: 15px; }
          .field-label { font-weight: bold; color: #66d3fa; }
          .field-value { margin-top: 5px; }
          .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Nuevo Mensaje de Contacto</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="field-label">Nombre:</div>
              <div class="field-value">${formData.name}</div>
            </div>
            <div class="field">
              <div class="field-label">Email:</div>
              <div class="field-value">${formData.email}</div>
            </div>
            <div class="field">
              <div class="field-label">Asunto:</div>
              <div class="field-value">${formData.subject}</div>
            </div>
            <div class="field">
              <div class="field-label">Mensaje:</div>
              <div class="field-value">${formData.message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>Este mensaje fue enviado desde el formulario de contacto de SurCode</p>
            <p>Fecha: ${new Date().toLocaleString('es-AR')}</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  generateEmailText(formData) {
    return `
Nuevo mensaje de contacto - SurCode

Nombre: ${formData.name}
Email: ${formData.email}
Asunto: ${formData.subject}

Mensaje:
${formData.message}

---
Enviado desde el formulario de contacto de SurCode
Fecha: ${new Date().toLocaleString('es-AR')}
    `;
  }
}

export default EmailService; 