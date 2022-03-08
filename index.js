let mainCont = document.querySelector("main");

fetch("https://game-of-thrones-quotes.herokuapp.com/v1/characters")
  .then((resolve) => {
    return resolve.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((quote) => {
      // * Crating the div that holds each
      let quoteCont = document.createElement("div");
      quoteCont.className = "quote-cont";
      mainCont.appendChild(quoteCont);
      // * Creating the heading that will hold the author name.
      let author = document.createElement("h3");
      author.className = "author";
      author.appendChild(
        document.createTextNode("- The author is: " + quote.name + ".")
      );
      quoteCont.appendChild(author);
      // * Creating the heading element that will hold house name.
      let houseOf = document.createElement("h5");
      houseOf.className = "house-name";
      houseOf.textContent = "- From the house of: " + quote.house.name + ".";
      quoteCont.appendChild(houseOf);
      // * Creating the ul element that will hold the  li elements for the quotes.
      let quotesUl = document.createElement("ul");
      quotesUl.className = "ul-quotes";
      quoteCont.appendChild(quotesUl);
      if (quote.quotes.length > 1) {
        // * Creating the first quote li element
        let quoteOne = document.createElement("li");
        quoteOne.className = "quote-one";
        quoteOne.textContent = quote.quotes[0];
        // * Creating the second quote li element
        let quoteTwo = document.createElement("li");
        quoteTwo.className = "quote-one";
        quoteTwo.textContent = quote.quotes[1];
        quotesUl.appendChild(quoteOne);
        quotesUl.appendChild(quoteTwo);
      } else {
        // * Creating the first quote li element
        let quoteOne = document.createElement("li");
        quoteOne.className = "quote-one";
        quoteOne.textContent = quote.quotes[0];
        quotesUl.appendChild(quoteOne);
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });
