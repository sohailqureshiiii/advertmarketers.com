import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { fullName, bussinessEmail, subject, message } = req.body;

    if (!fullName || !bussinessEmail || !subject) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: process.env.FROM_EMAIL,
            to: process.env.FROM_EMAIL,
            subject: `New booking from ${fullName}`,
            text:
                `Full Name: ${fullName}\n` +
                `Email: ${bussinessEmail}\n` +
                `Subject: ${subject}\n` +
                `Message: ${message || 'N/A'}\n`,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'We have received your details and will contact you soon.' });
    } catch (error) {
        console.error('Email sending error:', error);
        return res.status(500).json({ message: 'Failed to send message. Please try again after some time.' });
    }
}
