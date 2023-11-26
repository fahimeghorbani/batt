import Menu from "./modules/Menu";
import Slide from "./modules/Slide";
import TowImg from "./modules/TowImg";
import ThreeImg from "./modules/ThreeImg";
import First from "./modules/First";
import Second from "./modules/Second";
import Third from "./modules/Third";
import Forth from "./modules/Forth";
Menu();
Slide();
TowImg();
ThreeImg();
First();
Second();
Third();
Forth();

let ft=[...document.getElementsByClassName("footerimg")]
let img=[...document.getElementsByClassName("ft")]
let ah=[...document.getElementsByClassName("ah")]
let al=[...document.getElementsByClassName("al")]
let ff=[...document.getElementsByClassName("ff")]
let te=[...document.getElementsByClassName("te")]
let as=[...document.getElementsByClassName("as")]




window.addEventListener("resize", function(){

  if (this.innerWidth<950) {
    ft[0].classList.add("changeFooterImg")
    img[0].classList.add("changeImg")
    ah[0].classList.add("changeah")
    al[0].classList.add("changeal")
    ff[0].classList.add("changeff")
    te[0].classList.add("changete")
    as[0].classList.add("changeas")

  }else{
    ft[0].classList.remove("changeFooterImg")
    img[0].classList.remove("changeImg")
    ah[0].classList.remove("changeah")
    al[0].classList.remove("changeal")
    ff[0].classList.remove("changeff")
    te[0].classList.remove("changete")
    as[0].classList.remove("changeas")
  }

  if (this.innerWidth<590) {
    ft[0].classList.add("changeFooterImg2")
    img[0].classList.add("changeImg2")

  }else{
    ft[0].classList.remove("changeFooterImg2")
    img[0].classList.remove("changeImg2")

  }
})
