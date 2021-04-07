const newGroupHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#group-name").value.trim();
  // const members = document.querySelector("#group-members").value.trim();
  const password = document.querySelector("#group-password").value.trim();
  const rules = Array
    .from(document.querySelectorAll('input[type="checkbox"]'))
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => parseInt(checkbox.value))

  // console.log(checkboxes);
  console.log(rules);
  // const getId = () => {
  //   const x = this.value
  //   return x;
  // }

  // const rules = checkboxes.map(getId())
  
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
      
      
      addRules(rules, groupData)

      // if (rules) {
      //   const ruleCall = await fetch('/api/groups/addRule', {
      //     method: 'POST',
      //     body: JSON.stringify({ rule_id: rules, group_id: groupData.id})
      //   })
        // if (ruleCall.ok) {
          // console.log(rule_id, group_id);
          // document.location.replace('/podDashboard')
        // }
      // }
      
      alert("New Germ Pod Created")
    // document.location.replace("/profile");
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

const addRules = async (rules, groupData) => {
  rules.forEach(element => {
    console.log(element);
    const ruleCall = await fetch('api/groups/addRule', {
      method: 'POST',
      body: JSON.stringify({ rule_id: element, group_id: groupData.id})
    })
    if (ruleCall.ok) {
      console.log('did it work?');
    }
    // console.log(rule_id);
  });
}

document
  .querySelector(".new-group-form")
  .addEventListener("submit", newGroupHandler);
// document
//     .querySelector('') //<I do not know what to put here
//     .addEventListener('click', deleteGroup);
