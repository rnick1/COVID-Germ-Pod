const joinGroupHandler = async (event) => {
    event.preventDefault();

    const groupName = document.querySelector('#group-name').innerText.trim()
    const inputPassword = document.getElementById('password').value.trim()
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

    let ruleEl = document.getElementById('rule-area')
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
    ruleEl.appendChild(node)

    document
    .querySelector('#submit-password')
    .addEventListener('click', joinGroupHandler)
}

document
    .querySelector('#join-group')
    .addEventListener('click', requestPassword)