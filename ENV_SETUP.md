# 🔧 Configuración de Variables de Entorno (.env)

## 📋 Instrucciones

1. **Crear el archivo**: Crea un archivo llamado `.env` en la raíz del proyecto (mismo nivel que `package.json`)
2. **Copiar contenido**: Copia el contenido de abajo en tu archivo `.env`
3. **Completar valores**: Reemplaza los valores de ejemplo con tus datos reales
4. **Nunca comitear**: Asegúrate de que `.env` esté en tu `.gitignore`

---

## 📝 Archivo .env Completo

```bash
# ========================================
# SURCODE - VARIABLES DE ENTORNO
# ========================================

# ----------------------------------------
# CONFIGURACIÓN DE EMAIL (BREVO/SENDINBLUE)
# ----------------------------------------
# API Key de Brevo (SendinBlue) para envío de emails
# Obtener desde: https://app.brevo.com/settings/keys/api
REACT_APP_BREVO_API_KEY=your_brevo_api_key_here

# Email de destino para el formulario de contacto
REACT_APP_RECIPIENT_EMAIL=contact@sur-code.com

# ----------------------------------------
# CONFIGURACIÓN DE APLICACIÓN
# ----------------------------------------
# Entorno de la aplicación (development, production, test)
NODE_ENV=production

# URL base de la aplicación en producción
REACT_APP_BASE_URL=https://sur-code.com

# URL pública para assets estáticos
PUBLIC_URL=https://sur-code.com

# ----------------------------------------
# CONFIGURACIÓN DE DESARROLLO
# ----------------------------------------
# Puerto para desarrollo local (opcional)
PORT=3000

# Habilitar source maps en producción (opcional)
GENERATE_SOURCEMAP=false

# ----------------------------------------
# CONFIGURACIÓN DE BUILD
# ----------------------------------------
# Tratar warnings como errores en CI
CI=true

# Deshabilitar open browser en desarrollo
BROWSER=none

# ----------------------------------------
# CONFIGURACIÓN DE PERFORMANCE
# ----------------------------------------
# Límite de tamaño de bundle (opcional)
REACT_APP_BUNDLE_SIZE_LIMIT=512kb

# Habilitar análisis de bundle (opcional)
REACT_APP_BUNDLE_ANALYZER=false

# ----------------------------------------
# CONFIGURACIÓN DE SEO
# ----------------------------------------
# Meta información para SEO
REACT_APP_SITE_NAME=SurCode
REACT_APP_SITE_DESCRIPTION=Desarrollo web profesional y soluciones digitales innovadoras
REACT_APP_SITE_KEYWORDS=desarrollo web, react, javascript, diseño web, programación

# ----------------------------------------
# CONFIGURACIÓN DE CONTACTO
# ----------------------------------------
# Información de contacto de la empresa
REACT_APP_COMPANY_NAME=SurCode
REACT_APP_COMPANY_PHONE=+54 9 11 XXXX-XXXX
REACT_APP_COMPANY_ADDRESS=Buenos Aires, Argentina

# ----------------------------------------
# CONFIGURACIÓN OPCIONAL
# ----------------------------------------
# Google Analytics ID (si lo usas)
# REACT_APP_GA_TRACKING_ID=G-XXXXXXXXXX

# URL de API backend (si tienes una)
# REACT_APP_API_URL=https://api.sur-code.com

# URLs de redes sociales
# REACT_APP_SOCIAL_TWITTER=https://twitter.com/surcode
# REACT_APP_SOCIAL_LINKEDIN=https://linkedin.com/company/surcode
# REACT_APP_SOCIAL_GITHUB=https://github.com/surcode
```

---

## 🔑 Variables OBLIGATORIAS

### Para que el formulario de contacto funcione, necesitas configurar:

1. **REACT_APP_BREVO_API_KEY**
   - **Dónde obtenerla**: [Brevo Dashboard > Settings > API Keys](https://app.brevo.com/settings/keys/api)
   - **Formato**: `xkeysib-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxxxxxx`
   - **Ejemplo**: `REACT_APP_BREVO_API_KEY=xkeysib-abc123def456ghi789jkl012mno345pqr678stu901vwx234yz-567890`

2. **REACT_APP_RECIPIENT_EMAIL**
   - **Descripción**: Email donde quieres recibir los mensajes del formulario
   - **Ejemplo**: `REACT_APP_RECIPIENT_EMAIL=info@sur-code.com`

---

## ⚙️ Variables Recomendadas

### Para optimización y SEO:

```bash
# Para producción
NODE_ENV=production
GENERATE_SOURCEMAP=false
CI=true

# Para SEO
REACT_APP_SITE_NAME=SurCode
REACT_APP_SITE_DESCRIPTION=Tu descripción aquí
PUBLIC_URL=https://sur-code.com
```

---

## 🔒 Seguridad

### ⚠️ IMPORTANTE:
- **NUNCA** comites el archivo `.env` al repositorio
- **SIEMPRE** usa variables que empiecen con `REACT_APP_` para que sean accesibles en el frontend
- **MANTÉN** tus API keys seguras y no las compartas

### Agregar a .gitignore:
```
# Variables de entorno
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
```

---

## 🚀 Configuración por Entorno

### Desarrollo (.env.development):
```bash
NODE_ENV=development
REACT_APP_BASE_URL=http://localhost:3000
GENERATE_SOURCEMAP=true
BROWSER=true
```

### Producción (.env.production):
```bash
NODE_ENV=production
REACT_APP_BASE_URL=https://sur-code.com
GENERATE_SOURCEMAP=false
CI=true
```

---

## 📞 Configuración del Servicio de Email

### Para configurar Brevo (SendinBlue):

1. **Crear cuenta**: [brevo.com](https://www.brevo.com)
2. **Obtener API Key**: Dashboard > Settings > API Keys
3. **Verificar dominio**: Settings > Senders & IP
4. **Configurar**: Copia la API key a `REACT_APP_BREVO_API_KEY`

### Ejemplo de configuración mínima:
```bash
REACT_APP_BREVO_API_KEY=xkeysib-abc123...
REACT_APP_RECIPIENT_EMAIL=tu-email@gmail.com
```

---

## ✅ Verificación

### Para verificar que todo está configurado:

1. **Crear el archivo** `.env` en la raíz
2. **Completar** las variables obligatorias
3. **Reiniciar** el servidor de desarrollo: `npm start`
4. **Probar** el formulario de contacto
5. **Verificar** que recibes el email

### Si tienes problemas:
- Revisa que el archivo se llame exactamente `.env`
- Verifica que esté en la raíz del proyecto
- Asegúrate de que no haya espacios alrededor del `=`
- Reinicia el servidor después de cambios en `.env` 