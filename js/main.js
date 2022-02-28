"use strict";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  // const results = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];
  // const random_num = Math.floor(Math.random() * results.length); // 0~6までのランダムな整数値

  // btn.textContent = results[random_num];

  const random_num = Math.random();
  let result;

  if(random_num < 0.03) {
    btn.textContent = "SSR"; //3%
    result = "SSR";
  }
  else if(random_num < 0.13) {
    btn.textContent = "SR"; //10%
    result = "SR";
  }
  else {
    btn.textContent = "R"; //87%
    result = "R";
  }

  console.log(result);
});