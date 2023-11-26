const Slide = async () => {
  let data = await fetch("http://localhost:3006/slide");
  let res = await data.json();
  let slide = res.map((elem) => {
    return `
        <div class="swiper-slide">
        <img class="sl" src="${elem.img}" alt="" />
        <div class="slider">
          <img style="width:${elem.width}" src="${elem.src1}" alt="" />
          <h2 style="width:${elem.width}">
           ${elem.text}
          </h2>
          <a style="width:${elem.width}" href="${elem.link}">${elem.nameA}</a>
        </div>
      </div> 
        `;
  });
  document.querySelector(".swiper-wrapper").innerHTML = slide.join("");
};
export default Slide;





