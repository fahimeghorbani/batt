const TowImg = async () => {
  let data = await fetch("http://localhost:3006/towimg");
  let res = await data.json();
  let towimg = res
    .map((elem) => {
      return `
      <div class="firstimg">
      <img src="${elem.img}" alt="" />
      <div class="new1">
        <p style="top: ${elem.top}"; "left:${elem.left}";>${elem.title1}</p>
      </div>
      <div class="firsttext">
        <div class="dd">
          <img
            src="${elem.img2}"
            alt=""
          />
          <p>${elem.title2}</p>
        </div>
        <div class="p1">
          <h2>${elem.title3}</h2>
        </div>
        <div class="p2">
          <h3>${elem.title4}</h3>
        </div>
        <div class="p3"><h3>${elem.title5}</h3></div>
        <div class="p4"><h2>${elem.title6}</h2></h2></div>
      </div>
      </div>
          `;
    })
    
  document.querySelector(".towImg").innerHTML = towimg.join("");
};
export default TowImg;







