const searchBarHandler = async (event) => {
    event.preventDefault();

const name = document.querySelector('#searchbar').value.trim()

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

document
    .querySelector("#search")
    .addEventListener("click", searchBarHandler);
