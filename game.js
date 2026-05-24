const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

  // Show welcome message
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      background:black;
      color:orange;
      font-size:30px;
      text-align:center;
    ">
      Welcome to AYMPON 144 🌌<br><br>
      Entering Mystic Realm...
    </div>
  `;

  // After 2 seconds go to realm
  setTimeout(() => {
    window.location.href = "realms/realm1-agni/index.html";
  }, 2000);

});
