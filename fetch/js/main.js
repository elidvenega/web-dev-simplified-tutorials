"use strict";
// Purpose of this project
// Goals
// 1.Understand Fetch
// 2.Understand Promises
// 3.Understand Async Await
// 4.Understand Callback Functions

// JSON Placeholder example
// const getData = () => {
//     try {
//         fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//         body: JSON.stringify({
//             title: 'foo',
//             body: 'bar',
//             userId: 1,
//             weight: 20
//         })

//     })
//     .then((response) => response.json())
//     .then((json) => console.log(json));
//     }
//   catch {
//       console.log('error');
//   }
// }

// getData();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


async function getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('error big time');
  }
}

// create a function to render output
async function renderUsers() {
  try {
    const users = await getUsers();
    let html = "";
    users.forEach((user) => {
      let htmlSegment = `
      <div class='user'>
        <h2>${user.username} ${user.email}</h2>
        <div class="email"><a href="email:${user.email}">${user.email}</a></div>
      </div>
        
        `;
      html += htmlSegment;
    });
    let container = document.querySelector("#data");
    container.innerHTML = html;
  } catch (error) {
    console.log("error big time");
  }
}

renderUsers();