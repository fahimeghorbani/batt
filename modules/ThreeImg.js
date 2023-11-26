const ThreeImg = async () => {
  let data = await fetch("http://localhost:3006/threeimg");
  let res = await data.json();
  let threeimg = res.map((elem) => {
    return `
      <div class="th">
      <img src="${elem.img}" alt="" />
      <div class="new">
        <p style="top: ${elem.top}"; "left:${elem.left}";>NEW</p>
      </div>
      <div class="text1">
        <div class="dt">
          <img
            src="${elem.img2}"
            alt=""
          />
          <p>${elem.title1}</p>
        </div>
        <div class="p1">
          <h2>${elem.title2}</h2>
        </div>
        <div class="p2">
          <h3>${elem.title3}</h3>
        </div>
        <div class="p3"><h3>${elem.title4}</h3></div>
        <div class="p4"><h2>${elem.title5}</h2></h2></div>
      </div>
      </div>
            `;
  });
  document.querySelector(".threeimage").innerHTML = threeimg.join("");
};
export default ThreeImg;

