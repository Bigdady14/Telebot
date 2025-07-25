let balance = 0.0;
let hashrate = 1; // 1 H/s = 0.01 BEX

document.getElementById("mine-btn").addEventListener("click", () => {
  const mined = hashrate * 0.01;
  balance += mined;
  document.getElementById("balance").textContent = balance.toFixed(2) + " BEX";
});