'use strict';
// Purpose of this project
// Goals
// 1.Understand Fetch
// 2.Understand Promises
// 3.Understand Async Await
// 4.Understand Callback Functions

// JSON Placeholder example
fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
            weight: 20
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));



