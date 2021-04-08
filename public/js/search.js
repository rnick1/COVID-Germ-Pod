const searchBarHandler = async (event) => {
    event.preventDefault();

const name = document.querySelector('#searchbar').value.trim()

console.log(name)
if (name) {
    const response = await fetch (`/group/name/${name}`, {
        method: "GET",
        // body: JSON.stringify(name),
        headers: { "Content-Type": "application/json" },
    });
    if(response.ok) {
        document.location.replace("/views/singleGroup.handlebars");
    }else{
        alert(response.statusText);
    }
}
}

document
    .querySelector("#search")
    .addEventListener("click", searchBarHandler);
