let minus=document.querySelectorAll(".fa-minus");
let plus=document.querySelectorAll(".fa-plus");
let total=document.querySelector(".payment");
let remove=document.querySelectorAll(".remove");
let shipping=document.querySelector(".shippingprice");


plus.forEach((item)=> {
    item.addEventListener("click",plusOne);
})
function plusOne(){
   let productCount=this.previousElementSibling;
   productCount.innerHTML=parseInt(productCount.innerHTML)+1;

  price=this.parentElement.previousElementSibling.firstElementChild.innerHTML
  
  total.innerHTML="$"+ ((parseFloat(total.innerHTML.slice(1))
  )+(parseFloat(price.slice(1)))).toFixed(2)

  
   
}

minus.forEach((item) => {
    item.addEventListener("click",minusOne);
})

function minusOne(){
    let productCount=this.nextElementSibling;
    if(parseInt(productCount.innerHTML)>1){
    productCount.innerHTML=parseInt(productCount.innerHTML)-1
    price=this.parentElement.previousElementSibling.firstElementChild.innerHTML
    total.innerHTML="$"+ ((parseFloat(total.innerHTML.slice(1))
    )-(parseFloat(price.slice(1)))).toFixed(2)}
}

remove.forEach((item)=>{
    item.addEventListener("click",removeBtn)
})

function removeBtn(){
    let removePrice=parseFloat((this.previousElementSibling.previousElementSibling.firstElementChild.innerHTML).slice(1))
    let removeAmount=parseInt(this.previousElementSibling.firstElementChild.nextElementSibling.innerHTML);

    total.innerHTML="$" + (parseFloat(total.innerHTML.slice(1))-(removePrice*removeAmount)).toFixed(2)
    console.log(total.innerHTML);

    this.parentElement.parentElement.style.display="none";

    if(total.innerHTML=="$19.00"){
        shipping.innerHTML="$"+0.00
        total.innerHTML="$"+0.00
    }

}











