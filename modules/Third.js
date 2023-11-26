const Third = async () => {
    let data = await fetch("http://localhost:3006/third");
    let res = await data.json();
    let third = res.map((elem) => {
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
    document.querySelector(".ch5").innerHTML = third.join("");
  
    let data2 = await fetch("http://localhost:3006/third1");
    let res2 = await data2.json();
    let third1 = res2.map((elem) => {
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
    document.querySelector(".ch6").innerHTML = third1.join("");
  };
  export default Third;
  