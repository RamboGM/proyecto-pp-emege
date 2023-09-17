const nodemailer = require('nodemailer');

const pass = process.env.PASSWORD;

// Configura un transporte de correo electrónico
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'marmoran56@gmail.com', // Tu dirección de correo
    pass: pass, // Tu contraseña (es recomendable usar variables de entorno en lugar de guardarla en el código)
  },
});

// Función para enviar el correo electrónico
const sendEmail = async (nombre, apellido, email, mensaje) => {
  try {
    await transporter.sendMail({
      from: 'tu_correo@gmail.com',
      to: 'marmoran56@gmail.com', // La dirección de correo de destino
      subject: 'Mensaje de contacto desde tu sitio web',
      text: `Nombre: ${nombre}\nApellido: ${apellido}\nEmail: ${email}\nMensaje: ${mensaje}`,
    });

    console.log('Correo electrónico enviado con éxito');
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
  }
};

module.exports = sendEmail;
