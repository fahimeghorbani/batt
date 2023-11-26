const Second = async () => {
  let data = await fetch("http://localhost:3006/second");
  let res = await data.json();
  let second = res.map((elem) => {
    return `
        <div class="child1">
        <img src="${elem.img}" alt="" />
        <div class="n1">
          <p>NEW</p>
        </div>
        <div class="t1">
          <div class="dn">
            <img src="${elem.img2}" alt="" />
            <p>${elem.title1}</p>
          </div>
          <div class="p1"><h2>${elem.title2}</h2></div>
          <div class="p2">
            <h3>${elem.title3}</h3>
          </div>
          <div class="p3"><h3>${elem.title4}</h3></div>
          <div class="p4"><h2>${elem.title5}</h2></div>
        </div>
      </div>
        `;
  });
  document.querySelector(".ch3").innerHTML = second.join("");

  let data2 = await fetch("http://localhost:3006/second1");
  let res2 = await data2.json();
  let second1 = res2.map((elem) => {
    return `
        <div class="child1">
        <img src="${elem.img}" alt="" />
        <div class="n1">
          <p>NEW</p>
        </div>
        <div class="t1">
          <div class="dn">
            <img src="${elem.img2}" alt="" />
            <p>${elem.title1}</p>
          </div>
          <div class="p1"><h2>${elem.title2}</h2></div>
          <div class="p2">
            <h3>${elem.title3}</h3>
          </div>
          <div class="p3"><h3>${elem.title4}</h3></div>
          <div class="p4"><h2>${elem.title5}</h2></div>
        </div>
      </div>   
        `;
  });
  document.querySelector(".ch4").innerHTML = second1.join("");
};
export default Second;
