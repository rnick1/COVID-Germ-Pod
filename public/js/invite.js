const nodeMail = import('../../utils/mail/email')

const sendEmail = (event) => {
        event.preventDefault();
        const email = document.querySelectorAll('#group-invites').nodeValue.split(',').trim();
        
        nodeMail.sendInviteEmail(email);
        
    }

const inviteFormHandler = (event) => {
    event.preventDefault();
    
    // goto another page to enter the emails? use an input thing? create a text field?
    let x = document.querySelector('#email-invite')
    x.removeAttribute('hidden')
    // createTextbox.setAttribute("type", "email");
    // createTextbox.setAttribute("id", "email-invite")
    // document.append(createTextbox)

    const createSendButton = document.createElement('button');
    createSendButton.setAttribute("type", "submit")
    x.appendChild(createSendButton)
    createSendButton.addEventListener("click", sendEmail())

    // create a textbox for the user to enter in an email

    // send email containing group name, user who performed invite, and password

    
}

document
    .querySelector('#invite-button')
    .addEventListener('click', inviteFormHandler)