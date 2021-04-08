// This responds when a user wants to report an event
const eventEmailHandler = async (event) => {
    event.preventDefault();
    const covidEvent = document.getElementById('events').value

    const response = await fetch('api/users/addEvent', {
        method: 'POST',
        body: JSON.stringify({ event_id: covidEvent }),
        headers: { 'Content-Type': 'application/json' }
    })
    const memberList = await response.json();
    console.log(memberList);
    console.log(covidEvent);
}


const updatePassword = async (event) => {

    event.preventDefault();

    const password = document.querySelector('#password-update').value.trim();
    const id = event.target.getAttribute('data-id');

console.log('id coming in is....', id)
console.log('password coming in is....', password)

    const response = await fetch(`/api/users/${id}`, {
        method: "PUT",
        body: JSON.stringify({password}),
        headers: {
            'Content-type': 'application/json'
        }
    })
    
console.log('response', response)


    if(response.ok) {
        document.location.replace('/profile')
    } else {
        alert('Failed to update.')
    }

}

document
    .querySelector('#update-password-btn')
    .addEventListener('click', updatePassword)

document
    .querySelector('.report-event-form')
    .addEventListener('submit', eventEmailHandler)