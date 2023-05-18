$(document).ready(() => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  getRandomQuote();
});

$("#new-quote").click(() => {
  document.getElementById("text").style.opacity = "0";
  document.getElementById("author").style.opacity = "0";

  getRandomQuote();

  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  document.body.style.transition = "all 0.5s ease";
});

const getRandomQuote = () => {
  const url = "https://api.quotable.io/random";
  $.ajax({
    url,
    method: "GET",
    success: (res) => {
      renderToPage(res);
    },
  });
};

const renderToPage = ({ content, author }) => {
  document.getElementById("text").style.opacity = "1";
  document.getElementById("author").style.opacity = "1";

  $("#text").text(`" ${content}`);
  $("#author").text(`-- ${author}`);
};
