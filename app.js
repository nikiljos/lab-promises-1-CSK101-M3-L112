// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data
function getData() {
        fetch("https://jsonplaceholder.typicode.com/users").then((res) => {
            if (!res.ok) {
                throw({
                    "status":res.status,
                    "message":"Error: HTTP Error"
                });
            }
            return res.json();
        }).then(data=>{
            // Progression 2: Display the fetched data in the form of list
            console.log(data);
            let playerDiv = document.getElementById("message");
            playerDiv.innerHTML="<h2>Lists of Users</h2>";
            data.forEach((user) => {
                let player = document.createElement("div");
                player.classList.add("player");
                player.innerHTML = `
                    <div class="strength">Name : ${user.name}</div>
                    <div>Email   : ${user.email}</div>
                    <div>Phone   : ${user.phone}</div>
                    <div>Website : ${user.website}</div>
                    <div>Company : ${user.company.name}</div>
                    <div>City    : ${user.address.city}</div>
                    <div>Zipcode : ${user.address.zipcode}</div>
                `;
                playerDiv.append(player);
            });
            document.body.append(playerDiv);
        })
        .catch(error=>{
            // Progression 3: When the promise call is rejected then throw an error
            console.log("Promise rejected.");
            console.log(error.message);
        })
}

document.getElementById("btnGet").onclick=getData;
