async function productss(){

const response = await fetch("https://dummyjson.com/products");

const data = await response.json();
const product = data.products;
console.log(data);
console.log(product);
const result=product.map( function(ele){
return `
<div class="Properties1">
        <h2>${ele.title}</h2>
        <br>
       <img src="${ele.thumbnail}"/>
       <br>
       <span>${ele.price} $</span>
      </div>
`;
}).join('');

document.querySelector(".market").innerHTML=result;

}
productss();

document.querySelector(".market").classList.add('Properties');

