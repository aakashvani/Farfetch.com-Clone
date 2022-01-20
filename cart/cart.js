// <--- fetching data from localStorage --->
var cartArr = JSON.parse(localStorage.getItem("cartItem"));


console.log(cartArr);

// <--- Mapping data --->
cartArr.map(function (data) {
  //<--- creating main div to append every data into it --->
  var mainDiv = document.createElement("div"); 
  mainDiv.setAttribute("id", "mainDiv");

  var image = document.createElement("img");//create a div for image -->
  image.setAttribute("src", data.image_url);

  var brandName = document.createElement("div"); //creating a div for brand name and details-->
  var brand = document.createElement("p");
  brand.textContent = data.brand;
  var name = document.createElement("p");
  name.textContent = data.name;
  brandName.append(brand, name); //appending brand & name into brandName div-->

  var priceDiv = document.createElement("div"); //Created price div-->

  var strikPri = document.createElement("p"); //strik-Off-Price-->
  strikPri.textContent = data.strikedoffprice;
  strikPri.style.textDecoration = "line-through";
  strikPri.style.color = "grey";

  var symPrice = document.createElement("div");
  symPrice.setAttribute("id", "symPrice");

  var symbol = document.createElement("p"); // creating p tag for rupee symbol-->
  symbol.textContent = data.Symbol;
  symbol.style.color = "red";

  var price = document.createElement("p");// creating p tag for price -->
  price.textContent = data.price;
  price.style.color = "red";

  symPrice.append(symbol, price); // appending symbol and price into symPrice for (₹price) this output-->

  priceDiv.append(strikPri, symPrice); // appending strikOffPrice and symPrice Div into Price Div-->

  //appending image,brandName into mainDiv --->
  mainDiv.append(image, brandName, priceDiv);
  document.querySelector(".itemBags").append(mainDiv);
});


// calculating total price of cart item --->
var total = cartArr.reduce(function(acc,cv){
  return acc + Number(cv.price);
},0)


// catching h3 tag from html file and consoling total in it. -->
document.querySelector("h3").textContent = `Total Amount :- ₹ ${total}`;
console.log(total);


// function for Promo code -->


