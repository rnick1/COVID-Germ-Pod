const { response } = require("express");

const newGroupHandler = async (event) => {
  event.preventDefaul();

  const name = document.querySelector("#group-name").value.trim();
  const members = document.querySelector("#group-members").value.trim();
  const password = document.querySelector("#group-password").value.trim();

  if (name && members && password) {
    const response = await fetch("/api/groups", {
      method: "POST",
      body: JSON.stringify({ name, members, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        const assignLeader = await fetch('api/users/joinGroup', {
            method: 'PUT',
            body: JSON.stringify({ group_id }),
            headers: { 'Content-Type': 'application/json' },
        })
        response.status(200).json(assignLeader)
      document.location.replace("/profile");
    } else {
      alert("Failed to create group.");
    }
  }
};

const deleteGroup = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/groups/${id}`, {
      method: "DELETE",
    });
  }
  if (response.ok) {
    document.location.replace("/profile");
  } else {
    alert("Failed to delete group");
  }
};

document
  .querySelector(".new-group-form")
  .addEventListener("submit", newGroupHandler);
// document
//     .querySelector('') //<I do not know what to put here
//     .addEventListener('click', deleteGroup);
