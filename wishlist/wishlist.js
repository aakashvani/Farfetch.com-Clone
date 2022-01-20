var wishArr = JSON.parse(localStorage.getItem("wishItem"));

console.log(wishArr);

wishArr.map(function (data) {
  //main div of product -->
  var div = document.createElement("div");

  //image -->
  var image = document.createElement("img");
  image.setAttribute("src", data.image_url);

  //brand-name -->
  var brand = document.createElement("p");
  brand.textContent = data.brand;

  // name -->
  var name = document.createElement("p");
  name.textContent = data.name;

  //creating a div - contain symPrice & strikedoffprice -->
  var div2 = document.createElement("div");
  div2.setAttribute("id", "div2");
  //creating a small symbol price div which contain rupee symbol and price of product-->
  var symPrice = document.createElement("div");
  symPrice.setAttribute("id", "symPrice");

  var symbol = document.createElement("p");
  symbol.textContent = data.Symbol;

  var price = document.createElement("p");
  price.textContent = data.price;

  symPrice.append(symbol, price);

  var strikPri = document.createElement("p");
  strikPri.textContent = data.strikedoffprice;
  strikPri.style.textDecoration = "line-through";
  strikPri.style.color = "grey";

  div2.append(symPrice, strikPri);

  //appending-->
  div.append(image, brand, name, div2);

  document.querySelector("#container").append(div);
});
