"use strict";

{
  btn.addEventListener("click", () => {
    const btn = document.getElementById("btn");
    // const results = ["大吉", "中吉", "凶", "末吉"];
    // const results = ["大吉", "中吉", "凶", "末吉"];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];

    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = "大吉"; //0.05
    } else if (n < 0.2){
      btn.textContent = "中吉";
    } else {
      btn.textContent = "凶";
    }
  });
}
