const contents = document.querySelector(".about-content");

const renderError = (response) => {
  contents.innerHTML = `
  <p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
};

const createCard = (comments) => {
  contents.innerHTML = "";
  comments.forEach((comment) => {
    const newComment = document.createElement("div");
    newComment.classList.add ("comment-text");
    newComment.classList.add("fade")
    newComment.innerHTML = `
      <p>${comment.message}</p>
      <h5>${comment.fullname}</h5>`;
    contents.appendChild(newComment);
  });
};

const apiurl = "http://localhost:4001/api/reviews";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // console.log(data.message);
    createCard(data);
  } catch (error) {
    renderError(error);
  }
};

fetchData(apiurl);

// carousel





