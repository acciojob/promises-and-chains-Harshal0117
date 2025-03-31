//your JS code here. If required.
document.getElementById("btn").addEventListener("click", function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    
    if (!name || !age || isNaN(age)) {
        alert("Please enter valid details.");
        return;
    }
    
    const ageValue = parseInt(age);
    
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (ageValue > 18) {
                resolve(`Welcome, ${name}. You can vote.`);
            } else {
                reject(`Oh sorry ${name}. You aren't old enough.`);
            }
        }, 4000);
    })
    .then(message => alert(message))
    .catch(error => alert(error));
});