console.log("Welcome to News Daily");

let newsAccordion = document.getElementById("newsAccordion");
newsAccordion.innerHTML = `Use "Search from the top news websites" above to show latest news.`;

let apiKey = "34100b693d8344bab8487b8284ffdfc3";
let source;

let the_times_of_india = document.getElementById("thetimesofindia");
the_times_of_india.addEventListener("click", function () {
  source = "the-times-of-india";
  //Creating GET request
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
    true
  );
  xhr.onprogress = function () {
    let str = `<div class="d-flex align-items-center">
      <strong>Loading...</strong>
      <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
      </div>`;
    newsAccordion.innerHTML += str;
  };
  xhr.onload = function () {
    if (this.status === 200) {
      // newsAccordion.innerHTML = "";
      let json = JSON.parse(this.responseText);
      //   console.log(json);
      let newsHTML = "";
      json.articles.forEach(function (element, index) {
        let news = `<div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading${index}">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                            <b>#${index + 1}&nbsp;</b>${element.title}
                            </button>
                            </h2>
                            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}"
                            data-bs-parent="#newsAccordion">
                        <div class="accordion-body">${
                          element.content
                        } <a href="${
          element.url
        }" target="_blank">Read more here</a><br><br>
                        <b>Published At:</b> ${element.publishedAt}</div>
                        </div>
                        </div>`;
        newsHTML += news;
      });
      newsAccordion.innerHTML = newsHTML;
    } else {
      newsAccordion.innerHTML = `Some error occured! Check back later.`;
    }
  };
  xhr.send();
});
