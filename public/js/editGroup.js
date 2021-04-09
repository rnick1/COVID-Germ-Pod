// This powers the email invitation functionality
const inviteUserHandler = async (event) => {
  event.preventDefault();
  const email = document.querySelector("#emails").value;
  const findId = document.getElementById('group-name')
  const id = findId.getAttribute("data-id");
  console.log(email);

  if (email) {
    const emailCall = await fetch("/api/groups/sendInviteEmail/:id", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });

    const confirm = await emailCall.json();
    console.log(confirm);
    if (emailCall.ok) {
      // alert('created new group')
      await new Promise((r) => setTimeout(r, 1000));
      document.location.replace(`/group/${id}`);
    }
  }
};

// This powers the leave group/delete group email functionality
const requestEmail = (event) => {
  event.preventDefault();
  document.querySelector("#leave-group").setAttribute("hidden", "true");
  document.querySelector("#delete-group").setAttribute("hidden", "true");

  let podEl = document.getElementById("pod-option-area");
  let node = document.createElement("form");
  let emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("multiple", "true");
  emailInput.setAttribute("id", "emails");
  emailInput.setAttribute(
    "placeholder",
    "Enter email addresses here seperated by commas"
  );

  let submitBtn = document.createElement("button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.setAttribute("id", "submit-email");
  submitBtn.innerText = "Submit";

  let resetBtn = document.createElement("button");
  resetBtn.setAttribute("type", "reset");
  resetBtn.setAttribute("id", "reset-btn");
  resetBtn.innerText = "Reset";

  node.appendChild(emailInput);
  node.appendChild(submitBtn);
  // node.appendChild(resetBtn)
  podEl.appendChild(node);

  document
    .querySelector("#submit-email")
    .addEventListener("click", inviteUserHandler);
};

// This allows a user to leave a group
const leaveGroup = async (event) => {
  event.preventDefault();

  const response = await fetch("/api/users/leaveGroup", {
    method: "PUT",
  });
  if (response.ok) {
    await new Promise((r) => setTimeout(r, 1000));
    document.location.replace("/profile");
  } else {
    alert("Failed to leave group");
  }
};

// This enables a user to delete a group
const deleteGroup = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/groups/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      document.location.replace("/profile");
    }
  } else {
    alert("Failed to delete group");
  }
};

document.querySelector("#invite-users").addEventListener("click", requestEmail);

document.querySelector("#leave-group").addEventListener("click", leaveGroup);

document.querySelector("#delete-group").addEventListener("click", deleteGroup);
