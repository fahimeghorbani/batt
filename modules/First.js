const First = async () => {
  let data = await fetch("http://localhost:3006/first");
  let res = await data.json();
  let first = res.map((elem) => {
    return `
      <div class="child1">
      <img src="${elem.img}" alt="" />
      <div class="n1">
        <p>NEW</p>
      </div>
      <div class="t1">
        <div class="dn">
          <img src="${elem.img2}" alt="" />
          <p>NEW</p>
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
  document.querySelector(".ch1").innerHTML = first.join("");

  let data2 = await fetch("http://localhost:3006/first1");
  let res2 = await data2.json();
  let first1 = res2.map((elem) => {
    return `
      <div class="child1">
      <img src="${elem.img}" alt="" />
      <div class="n1">
        <p>NEW</p>
      </div>
      <div class="t1">
        <div class="dn">
          <img src="${elem.img2}" alt="" />
          <p>NEW</p>
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
  document.querySelector(".ch2").innerHTML = first1.join("");
};
export default First;
