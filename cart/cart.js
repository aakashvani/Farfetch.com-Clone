var cartArr = JSON.parse(localStorage.getItem("cartItem"));

console.log(cartArr);

cartArr.map(function (data) {
    var mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "mainDiv");

  //creating 2 div inside container (1stDiv = itemDiv & 2ndDiv = totalDiv)-->
  var itemDiv = document.createElement("div");
  itemDiv.setAttribute("id", "itemsDiv");

  var totalDiv = document.createElement("div");
  totalDiv.setAttribute("id", "totalDiv");

  var imgDiv = document.createElement("div"); //create a div for image
  var image = document.createElement("img");
  image.setAttribute("src", data.image_url);
  imgDiv.append(image); //appending image into imgDiv

  var brandName = document.createElement("div"); //creating a div for brand name and details
  var brand = document.createElement("p");
  brand.textContent = data.brand;
  var name = document.createElement("p");
  name.textContent = data.name;
  brandName.append(brand, name); //appening brand & name into brandName div

  var priceDiv = document.createElement("div"); //Created price div

  var strikPri = document.createElement("p"); //strik-Off-Price
  strikPri.textContent = data.strikedoffprice;
  strikPri.style.textDecoration = "line-through";
  strikPri.style.color = "grey";


  var symPrice = document.createElement("div");
  symPrice.setAttribute("id", "symPrice");

  var symbol = document.createElement("p");
  symbol.textContent = data.Symbol;
  symbol.style.color = "red";

  var price = document.createElement("p");
  price.textContent = data.price;
  price.style.color = "red";

  symPrice.append(symbol, price);

  priceDiv.append(strikPri,symPrice)



  //appending into itemDiv
  itemDiv.append(imgDiv, brandName,priceDiv);

  mainDiv.append(itemDiv, totalDiv)

  //appending itemDiv And totalDiv into container-Div-->
  document.querySelector("#container").append(mainDiv);
});
