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

const sendInviteEmail = (email) => {
    const mailOptions = {
        from: 'youremail@gmail.com',
        to: email,
        subject: 'Someone wants you to join their quaranteam',
        html: `<h1>GermPods</h1>
        <p>Bubbles, pods, quaranteams: whatever you call them, they can be an effective tool in reducing the spread of disease within a community while reducing the negative impacts of isolation. You have been invited to a pod. If you haven't already, create an account to view the invite and decide if this group is right for you. </p> 
        <a href='https://https//git.heroku.com/covid-bubble-app.git'>Start your podship here!</a>`
    }

    transport.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email send: ' + info.response);
        }
    })
}


const sendGroupEmail = () => {
    const groupEvent = {
        from: 'youremail@gmail.com',
        to: 'to@email.com',
        subject: 'There was an event',
        html: `<h1>Something Happened</h1>
        <p>Someone in your germpod had an interaction they wanted you to know about. Please login to your account to view the update.</p>
        <a href='https://https//git.heroku.com/covid-bubble-app.git'>See the update</a>`
    }

    transport.sendMail(groupEvent, function(err, info) {
        if (err) {
            console.log(err);
        } else {
            console.log('Email send: ' + info.response);
        }
    })
}


exports.sendGroupEmail = sendGroupEmail;
exports.sendInviteEmail = sendInviteEmail;

// Invite to group
// Group event
// 