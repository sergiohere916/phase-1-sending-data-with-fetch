// Add your code here
const url = "http://localhost:3000";
const h1 = document.createElement("h1");
const h2 = document.createElement("h2");
const body = document.querySelector("body")


function submitData(userName, userEmail) {
    const user = {
        name: userName,
        email: userEmail
    }

    return fetch(`${url}/users`, {
        method: 'POST',
        headers: {'Content-Type':'application/json',
        "Accept": "application/json"},
        body: JSON.stringify(user)
    })
    .then( res => res.json())
    .then(data => {
        h1.id = data.id; 
        h1.textContent = data.id; // Just for visibility directly on webpage
        body.append(h1);
    })
    .catch(error => {
        alert("There was some error")
        h2.textContent = error.message;
        body.append(h2);
        
    })
}

submitData("Sergio", "sergio@gmail.com");