// This powers the search bar
const searchGroupHandler = async (event) => {
    event.preventDefault();

const name = document.querySelector('#group-search').value.trim()

console.log(name)
if (name) {
    const response = await fetch (`/api/groups/${name}`, {
        method: "GET",
        // body: JSON.stringify(name),
        // headers: { "Content-Type": "application/json" },
    });
    const groupData = await response.json()
    if(response.ok) {
        document.location.replace(`/group/${groupData.id}`);
    }else{
        alert(response.statusText);
    }
}
}

// This powers the create searchbar functionality
const createSearchBar = (event) => {
    event.preventDefault();
  
    let podEl = document.getElementById("pod-options");
    let node = document.createElement("form");
    let groupInput = document.createElement("input");
    groupInput.setAttribute("type", "text");
    groupInput.setAttribute("id", "group-search");
    groupInput.setAttribute(
      "placeholder",
      "Enter the group name"
    );
  
    let submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("id", "submit-search");
    submitBtn.innerText = "Submit";
  
    let resetBtn = document.createElement("button");
    resetBtn.setAttribute("type", "reset");
    resetBtn.setAttribute("id", "reset-btn");
    resetBtn.innerText = "Reset";
  
    node.appendChild(groupInput);
    node.appendChild(submitBtn);
    // node.appendChild(resetBtn)
    podEl.appendChild(node);
  
    document
      .querySelector("#submit-search")
      .addEventListener("click", searchGroupHandler);
}

document
    .querySelector("#join-group")
    .addEventListener("click", createSearchBar);
