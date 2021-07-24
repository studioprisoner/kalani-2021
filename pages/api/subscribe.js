const sgMail = require('@sendgrid/mail')

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { email } = req.body

  const content = {
       to: 'jordyn@kalani-co.com.au',
       from: 'jordyn@kalani-co.com.au',
       subject: `New Subscriber to Newsletter`,
       html: `<p>Please add this email address: ${email} to the newsletter database`
    }

  try {
    await sgMail.send(content)
    res.status(200).send('You have successfully subscribed.')
  } catch (error) {
    console.log('ERROR', error)
    res.status(400).send('There was an error subscribing.')
  }
}