// find value of event box/id
// send email to group

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

document
    .querySelector('.report-event-form')
    .addEventListener('submit', eventEmailHandler)