const nodemailer = require('nodemailer')
const { User, Group } = require('../../models')

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ce62c71e98d03f",
      pass: "f21cf9d28a94ed"
    }
  });

const sendEmail = (toEmail, subject, body) => {
    const mailOptions = {
        from: 'youremail@gmail.com',
        to: toEmail,
        subject: subject,
        html: body
    }

    transport.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email send: ' + info.response);
        }
    })
}

const sendInviteEmail = (email, user, group) => {
    let body = ` <style>
        body {
            background-color: lightcyan;
            color: lightseagreen;
        }

        .container {
            padding: 10%;
            background-color: lightskyblue;
            background-blend-mode: overlay;
            border: 7px double darkcyan;
        }

        .container-text {
            padding: 10%;
            background-color: lightcyan;
            background-blend-mode: overlay;
            border: 7px double darkcyan;
            font-family: Helvetica;
        }
    </style>
    <div class="container">
    <div class="container-text">
    <strong><h1>${group.name} <span role="img" aria-label="logo">💉✅</span></h1></strong>
    <hr>
    <p><i>Bubbles, pods, quaranteams: whatever you call them, they can be an effective tool in reducing the spread of disease within a community while reducing the negative impacts of isolation. You have been invited to a pod by ${user.name}.
    <br>
    <br>
        If you haven't already, create an account to view the invite and decide if this group is right for you.</p></i>
    <p>Use this password to join: <b>${group.password}</b></p>
    <hr>
    <br>
    <a href='https://https//git.heroku.com/covid-bubble-app.git/group/${group.id}'>Check out ${group.name}</a>
    </div>
    </div>`

    let subject = `${user.name} wants you in their GermPod`

    sendEmail(email, subject, body);
}


const sendEventEmail = (email, user, event) => {
    let subject= 'Someone from your GermPod Wants You to Know';
    let body = `<style>
        body {
            background-color: lightcyan;
            color: lightseagreen;
        }

        .container {
            padding: 10%;
            background-color: lightskyblue;
            background-blend-mode: overlay;
            border: 7px double darkcyan;
        }

        .container-text {
            padding: 10%;
            background-color: lightcyan;
            background-blend-mode: overlay;
            border: 7px double darkcyan;
            font-family: Helvetica;
        }
    </style>
    <div class="container">
    <div class="container-text">
    <strong><h1>Something Happened <span role="img" aria-label="logo">💉✅</span></h1></strong>
    <hr>
    <i><p>${user.name} from your GermPod wanted you to know that ${event.name}: ${event.description}. Please discuss with your group to determine the best path forward.</p></i>

    <a href='https://https//git.heroku.com/covid-bubble-app.git'>Login and check on your Pod</a>
    </div>
    </div>`
    
    sendEmail(email, subject, body)
}


module.exports = {sendEventEmail, sendInviteEmail}

// Invite to group
// Group event
// 