// This responds when a user wants to invite someone to their group
const nodeMail = import('../../utils/mail/email')
const sendEmail = (event) => {
        event.preventDefault();
        const email = document.querySelector('#email-invite').nodeValue.trim();
        const response = await fetch('/')
        nodeMail.sendInviteEmail(email);
    }

document
    .querySelector('#invite-button')
    .addEventListener('click', inviteFormHandler)