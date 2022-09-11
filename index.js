/* eslint-disable indent */
const sendData = (url, method, data) =>
  fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json;charset=UTF-8",
    },
  })
    .then((respone) => respone.json())
    .catch((error) => alert(`Error: ${error}`));
const getData = (url) => {
  fetch(url)
    .then((data) => {
      sendData("https://jsonplaceholder.typicode.com/posts", "POST", data);
    })
    .catch((error) => alert(`Error: ${error}`));
};

getData("db.json");
