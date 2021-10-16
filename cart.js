let cart=[];

const products = [
  {name: "beanie",prand:"RVCA",img:"https://image.shutterstock.com/image-photo/winter-beanie-hat-260nw-482174479.jpg",color:"green",price:250}
  ,{name:"dressees",prand:"Plear",img:"images/dresse.jpg",color:"grey",price:250} ,
  {name:"Jackets",prand: "BRAVE SOUL",img:"images/jackets.jpg" ,color:"beige",price:250},
  {name:"scarfe",prand:"MANGO",img:"images/scarf.jpg",color:"beige",price:250},
  {name:"shoose",prand:"converse",img:"images/shoose.jpg",color:"beige",price:250},
  {name:"sweatshirt",prand:"GAP",img:"images/sweatshirt.jpg",color:"grey",price:250} 
]

 function addtocart(index) {
   if(cart.includes(products[index])){
     products[index].cont++;
    saveTolocelstoreg();
   }
   else{
    products[index]["cont"]=1;
     cart.push(products[index]);
    console.log(cart) 
    saveTolocelstoreg();
  }

 }

 function saveTolocelstoreg() {
   localStorage.setItem("cart",JSON.stringify(cart));
 }
 function loadfromstoreg() {
   cart=JSON.parse(localStorage.getItem("cart"))
 }
 if(localStorage.getItem("cart")!=null){
   loadfromstoreg();
 }
 

 cart.forEach(function(item) {
  console.log("add to cart")
  let smalldiv=document.createElement("div")
  let img=document.createElement("IMG")
  img.style.width="200px" 
  img.style.height="200px"
   let titel=document.createElement("h4")
   let price=document.createElement("p")
   let cont=document.createElement("p")
   cont.innerText="cont: "+item.cont;
   img.src=item.img;
   titel.innerText=item.name;
   price.innerText=item.price;
   let div=document.getElementById("addto")
   smalldiv.appendChild(img);
   smalldiv.appendChild(titel);
   smalldiv.appendChild(price);
   smalldiv.appendChild(cont);
   div.appendChild(smalldiv);
 })
//delet
// function deleteItem() {
//   localStorage.removeItem()
// }

// //copun
// function copun(code) {
//   if(code=="13%discount"){
//   (total*(1-(13/100))
//   }
//   else{
//     ("totla")
//   }
  
// }
  
function gettotal(){
  let subtotal=0;
  let total=0;
  let delivery=0;
  let discount=0;
  for(i in cart){
    let count = cart[i].cont
    let p = cart[i].price
    subtotal+=count*p;
  }
//-------------delivery part------------------------------
if(document.getElementById('del').checked){
  delivery=30;
}
else{
  delivery=0;
}

let tax=0;
tax=subtotal*15/100;
total=tax+subtotal;   //عشان يكون لتوتل قيمة قبل الخصم ف يخصم

//-------------copun part------------------------------
if(document.getElementById("coupon").value=="marah13"){

    discount=total*(13/100);
    }
    else{
      discount=0;
    }
    console.log(discount);

//------------finel total--------------------------------

total=total+delivery;
total=total-discount;
document.getElementById("subtotal").innerText=subtotal;
document.getElementById("delivery").innerText=delivery;
document.getElementById("discount").innerText=discount;
document.getElementById("tax").innerText=tax;
document.getElementById("total").innerText=total;

}

function getRandomString(length) {
  var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
document.getElementById("code").innerText=result;
}

function clearCart() {
  console.log("clear")
  localStorage.removeItem("cart")
  window.location.replace("/home.html")
  
}