const { response } = require("express");

const newGroupHandeler = async (event) => {
    event.preventDefaul();

    const name = document.quertySelector('#group-name',).value.trim();     
    const members = document.quertySelector('#group-members',).value.trim();
    const password = document.quertySelector('#group-password',).value.trim();

    if (name && members && password) {
        const response = await fetch('/api/groups', {
            method: 'POST',
            body: JSON.stringify( {name, members, password}),
            headers: {'Content-Type': 'application/json'},
        });
    }

    if(response.ok) {
        document.location.replace('/profile')
    } else{ 
        alert('Failed to create group.')
    }
}

const deleteGroup = async (event) => {
    if (event.target.hasAttribute('data-id')){
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/groups/${id}`, {
            method: 'DELETE',
        })
    }
    if (response.ok) {
        document.location.replace('/profile')
    } else {
        alert('Failed to delete group')
    }
}

document
    .querySelector('new-group-form')
    .addEventListener('submit', newGroupHandeler);
// document
//     .querySelector('') //<I do not know what to put here
//     .addEventListener('click', deleteGroup);
