const Menu = async () => {
  let data = await fetch("http://localhost:3006/menu");
  let res = await data.json();
  let menu = res.map((elem) => {
    return `<li><a href="${elem.link}">${elem.name}</a></li>`;
  });
  document.querySelector(".nav-bar").innerHTML = menu.join("");


  let data2 = await fetch("http://localhost:3006/menu2");
  let res2 = await data2.json();
  let menu2 = res2.map((elem) => {
    return `
    <li>
    <a href="${elem.link}">${elem.name}</a>
   <ul>
    ${elem.dropdown.map((element)=>{
      return `
      
      <li class="vv">
        <img src="${element.img}" alt="">
       <div class="vs">
        <a href="${element.link}">${element.name1}</a>
        <a style=" color: rgba(255, 255, 255, 0.48);
        font-size: 12px;" href="${element.link}">${element.name2}</a>
       </div>
      </li>
      `
    }).join("")}
     
    </ul>
  </li>            
    `;
  });
  document.querySelector(".navbar").innerHTML = menu2.join("");
};
export default Menu;

let submenu=document.querySelector("div.submenu")
let close=document.querySelector("div.close")
let ha=document.querySelector("div.ham>a")
ha.addEventListener("click", function(){
  submenu.classList.add("active")
})
close.addEventListener("click", function(){
  submenu.classList.remove("active")
})



let menu=[...document.getElementsByClassName("menu")]
let ulMenu=[...document.getElementsByClassName("nav-bar")]
let imgMenu=[...document.getElementsByClassName("imgmenu")]
let first=[...document.getElementsByClassName("first")]
let third=[...document.getElementsByClassName("third")]
let second=[...document.getElementsByClassName("second")]
let ham=[...document.getElementsByClassName("ham")]


window.addEventListener("resize",function(){

  if (this.innerWidth<1266) {
    first[0].classList.add("changeFirst1")
  }else{
    first[0].classList.remove("changeFirst1")
  }
  if (this.innerWidth<1041) {
    first[0].classList.add("changeFirst3")
  }else{
    first[0].classList.remove("changeFirst3")
  }
  if (this.innerWidth<997) {
    first[0].classList.add("changeFirst2")
  }else{
    first[0].classList.remove("changeFirst2")
  }
  if (this.innerWidth<960) {
    menu[0].classList.add("changeMenu")
    ulMenu[0].classList.add("changeUl")
    imgMenu[0].classList.add("changeImgMenu")
    first[0].classList.add("changeFirst")
    third[0].classList.add("changeThird")
    second[0].classList.add("changeSecond")
    ham[0].classList.add("changeham")


  }else{
    menu[0].classList.remove("changeMenu")
    ulMenu[0].classList.remove("changeUl")
    imgMenu[0].classList.remove("changeImgMenu")
    first[0].classList.remove("changeFirst")
    third[0].classList.remove("changeThird")
    second[0].classList.remove("changeSecond")
    ham[0].classList.remove("changeham")
  }
  
  if (this.innerWidth<650) {
    imgMenu[0].classList.add("changeImgMenu2")
  }else{
    imgMenu[0].classList.remove("changeImgMenu2")
  }

})