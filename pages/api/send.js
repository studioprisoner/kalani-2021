const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { full_name, email, phone, message } = req.body

  const content = {
    to: 'jordyn@kalani-co.com.au',
        from: 'jordyn@kalani-co.com.au',
        subject: `Kalani Contact form - from ${full_name}`,
        html: `<p>Name: ${full_name}</p><p>Email: ${email}</p><p>Phone number: ${phone}</p><p>${message}</p>`
    }

  try {
    await sgMail.send(content)
    res.status(200).send('Thank you. Your message has sent successfully.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('There was an error sending the message, please send us an email directly.')
  }
}
