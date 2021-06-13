console.log("Welcome to the main module")

document.getElementById('fetchUserDateBtn').addEventListener('click', fetchUserData)

function fetchUserData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((json) => {
            let output = '<h2>List of users</h2>'
            output += '<ul> ';
            json.map(j => {
                console.log(j)
                output += `<li>
    ${j.name}
</li>`;
            })
            output += '</ul>'
            document.getElementById('response').innerHTML = output
        })
}