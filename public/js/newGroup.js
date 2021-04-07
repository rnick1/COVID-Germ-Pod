
const newGroupHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#group-name").value.trim();
  // const members = document.querySelector("#group-members").value.trim();
  const password = document.querySelector("#group-password").value.trim();
  
  // require name and password
  if (name && password) {
    const response = await fetch("/api/groups", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const groupCall = await fetch(`api/groups/${name}`, {
        method: 'GET',
      })
      const groupData = await groupCall.json()
      const assignLeader = await fetch('api/users/joinGroup', {
          method: 'PUT',
          body: JSON.stringify({ group_id: groupData.id }),
          headers: { 'Content-Type': 'application/json' },
      })
      // console.log(assignLeader);
      // response.json(assignLeader)
      alert("New Germ Pod Created")
    document.location.replace("/profile");
  } 
    } else {
      alert("Requires name and password to work");
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
