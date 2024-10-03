// conflictテスト
"use strict";

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  // const random_num = Math.floor(Math.random() * results.length); // 0~6までのランダムな整数値

  gacha_system();
});

// 10連ガチャの関数
function gacha_system() {
  btn.textContent = "10連ガチャ";
  
  for(let i = 0; i < 10; i++) {
    const random_num = Math.random();
    let result;
    const list_id = document.getElementById("gacha-list");
    const nth_list = list_id.children[i];
    
    // 10回目はSR以上確定
    if(i === 9) {
      if(random_num < 0.03) {
        result = "SSR"; // 3%
      }
      else {
        result = "SR"; // 97%
      }
    }
    else {
      if(random_num < 0.03) {
        result = "SSR"; // 3%
      }
      else if(random_num < 0.13) {
        result = "SR"; // 10%
      }
      else {
        result = "R"; // 87%
      }
    }
    
    nth_list.textContent = result;
    nth_list.className = result;
  }
}