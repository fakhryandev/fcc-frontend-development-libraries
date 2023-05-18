$(document).ready(() => {
  getRandomQuote();
});

$("#new-quote").click(() => {
  getRandomQuote();
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
  $("#text").text(content);
  $("#author").text(author);
};
