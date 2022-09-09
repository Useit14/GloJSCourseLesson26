/* eslint-disable indent */
const sendData = (url, method, data) =>
  fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  }).then((respone) => respone.ok);
const getData = (url) => fetch(url).then((respone) => respone.json());

getData("db.json")
  .then((data) =>
    sendData("https://jsonplaceholder.typicode.com/posts", "POST", data).catch(
      (error) => alert(`Error: ${error}`)
    )
  )
  .catch((error) => alert(`Error: ${error}`));
