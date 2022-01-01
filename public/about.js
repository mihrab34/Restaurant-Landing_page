const contents = document.querySelector(".content");

const renderError = (response) => {
  contents.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
};

const createCard = (comments) => {
  contents.innerHTML = "";
  comments.forEach((comment) => {
    const newComment = document.createElement("div");
    // const {fullname, message} = comment
    newComment.className = "review-text";
    newComment.innerHTML = `
      <p>${comment.message}</p>
      <h3>${comment.fullname}</h3>`;
    contents.appendChild(newComment);
  });
};

const apiurl = "http://localhost:4001/api/reviews";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = response.json();
    console.log(data);
    console.log(data);
    createCard(data);
  } catch (error) {
    renderError(error);
  }
};

fetchData(apiurl);



