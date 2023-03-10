document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUser').addEventListener('click', getUser);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('addPost').addEventListener('submit', addPost);


function getText() {
    fetch('sample.txt')
        .then((response) => {
            console.log(response.text);
            return response.text();
        }
        )
        .then((data) => {
            document.getElementById('output').innerHTML = data;
            console.log(data);
        }
        )
}

function getUser() {
    fetch('user.json')
        .then((response) => response.json())
        .then((data) => {
            let output = `<h2 class="mb-4">Users</h2>`;
            data.forEach((user) => {
                output += `<ul class="list-group mb-3">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">User Name: ${user.name}</li>
                    <li class="list-group-item">User Subject: ${user.subject}</li>
                </ul>`;
            });
            document.getElementById('output').innerHTML = output;
        })
}

function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            let output1 = "";
            data.forEach((user) => {
                output1 += `<div>
                    <h1>${user.title}</h1>
                    <p>${user.body}</p>
                </div>`
            })
            document.getElementById('output').innerHTML = output1;
        });
}

function addPost(e) {
    e.preventDefault();
    /* The preventDefault() method cancels the event if it is cancelable,
    meaning that the default action that belongs to the event will not occur.
    For example, this can be useful when: Clicking on a "Submit" button, prevent it from submitting a form. */
    console.log("hello")

    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Accept": "application/json, text/plain, */*",
            "content-type": "application/json"
        }, body: JSON.stringify({ title: title, body: body })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
}