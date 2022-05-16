'use strict';
// Purpose of this project
// Goals
// 1.Understand Fetch
// 2.Understand Promises
// 3.Understand Async Await
// 4.Understand Callback Functions

// JSON Placeholder example
const getData = () => {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ 
            title: 'foo',
            body: 'bar',
            userId: 1,
            weight: 20
        })
       
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
    }
  catch {
      console.log('error');
  }
}

getData();






