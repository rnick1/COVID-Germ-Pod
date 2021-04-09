// This provides functionality for when someone wants to join a group
const joinGroupHandler = async (event) => {
    event.preventDefault();

    const groupName = document.querySelector('#group-name').innerText.trim()
    const inputPassword = document.getElementById('password').value.trim()
    // removes unicode spacing
    const cleanName = groupName.replace(/%20/g, " ")

    console.log(cleanName);
    console.log(inputPassword);

    if (groupName && password) {
        const response = await fetch(`/api/groups/${cleanName}`, {
            method: 'GET',
        })
        if (response.ok) {
            const groupData = await response.json()
            if (groupData.password === inputPassword) {
                const res = await fetch('/api/users/joinGroup', {
                    method: 'PUT',
                    body: JSON.stringify({ group_id: groupData.id }),
                    headers: { 'Content-Type': 'application/json' }
                })
                alert('Welcome to the group');
                document.location.replace(`/group/${groupData.id}`)
            } else {
                alert('Wrong password')
            }
        } 
    }
}

const requestPassword = (event) => {
    event.preventDefault();
    document.querySelector('#join-group').setAttribute('hidden', 'true')

    let podEl = document.getElementById('pod-option-area')
    let node = document.createElement('form')
    let passwordInput = document.createElement('input')
    passwordInput.setAttribute('id', 'password')
    passwordInput.setAttribute('placeholder', 'Enter Password Here')

    let submitBtn = document.createElement('button')
    submitBtn.setAttribute('type', 'submit')
    submitBtn.setAttribute('id', 'submit-password')
    submitBtn.innerText = 'Submit'

    node.appendChild(passwordInput)
    node.appendChild(submitBtn)
    podEl.appendChild(node)

    document
        .querySelector('#submit-password')
        .addEventListener('click', joinGroupHandler)
}

document
    .querySelector('#join-group')
    .addEventListener('click', requestPassword)