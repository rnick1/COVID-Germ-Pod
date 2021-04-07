const searchBarHandler = async (event) => {
    event.preventDefault();

const input = document.getElementById('searchbar').value.trim()

if (input) {
    const response = await fetch ("/api/groups/:name", {
        method: "GET",
        body: JSON.stringify({ id, name }),
        headers: { "Content-Type": "application/json" },
    });
    if(response.ok) {
        document.location.replace("/searchResults");
    }else{
        alert(response.statusText);
    }
}
}

document.querySelector("#search").addEventListener("submit", searchBarHandler);
