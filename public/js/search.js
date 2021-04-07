const searchBarHandler = async (event) => {
    event.preventDefault();

const input = document.querySelector('#searchbar').value.trim()

console.log(input)
if (input) {
    const response = await fetch (`/group/name/${name}`, {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: { "Content-Type": "application/json" },
    });
    if(response.ok) {
        document.location.replace("/singleGroup");
    }else{
        alert(response.statusText);
    }
}
}

document
    .querySelector("#search")
    .addEventListener("submit", searchBarHandler);
