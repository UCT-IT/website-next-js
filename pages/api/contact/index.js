
const nodemailer = require("nodemailer");

export default function handler(req, res) {
	const contactEmail = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASSWORD,
		},
	});

	contactEmail.verify((error) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Sending');
		}
	});

	const { name, email, phone, message } = req.body;
	const mail = {
		from: name,
		to: process.env.EMAIL,
		subject: "Contact Form Submission",
		html: `<p>Name: ${name}</p>
           		<p>Email: ${email}</p>
				<p>Phone: ${phone}</p>
           		<p>Message: ${message}</p>`,
	};

	contactEmail.sendMail(mail, (error) => {
		if (error) {
			console.log(error);
			res.status(200).json({ message: 'Error' })
		} else {
			res.status(200).json({ message: 'Message Sent' })
		}
	});
}
