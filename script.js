let computer = ["snake", "water", "gun"];
let random;

let userChances = 10;

let tie = 0;
let userWin = 0;
let compWin = 0;

const genrate = () => {
  random = computer[Math.floor(Math.random() * computer.length)];
  console.log(random);
};

if (userChances != 0) {
  genrate();
}

window.onload = function () {
  let bt = Array.from(document.getElementsByClassName("btn1"));
  bt.forEach((value) => {
    value.addEventListener("click", () => {
      let askToUser = Array.from(
        document.getElementsByClassName("askUserToPlay1")
      );
      askToUser.forEach((value) => {
        value.style.display = "none";
      });
    });
  });
};

let user = document.querySelectorAll(".img");

Array.from(user).forEach((user) => {
  user.addEventListener("click", (e) => {
    if (random == "snake" && e.target.alt == "snake image") {
      if (userChances != 0) {
        alert("Oops! Game Tie");
        genrate();
        let tieNo = Array.from(document.querySelectorAll(".turns3"));
        tieNo.forEach((value) => {
          tie = tie + 1;
          value.innerHTML = tie;
        });
      }
    } else if (random == "snake" && e.target.alt == "water image") {
      if (userChances != 0) {
        alert("Try Again! Computer Wins");
        genrate();
        let compTie = Array.from(document.querySelectorAll(".turns2"));
        compTie.forEach((value) => {
          compWin = compWin + 1;
          value.innerHTML = compWin;
        });
      }
    } else if (random == "snake" && e.target.alt == "gun image") {
      if (userChances != 0) {
        alert("Yehh! User Wins");
        genrate();
        let userTie = Array.from(document.querySelectorAll(".turns1"));
        userTie.forEach((value) => {
          userWin = userWin + 1;
          value.innerHTML = userWin;
        });
      }
    } else if (random == "water" && e.target.alt == "snake image") {
      if (userChances != 0) {
        alert("Yehh! User Wins");
        genrate();
        let userTie = Array.from(document.querySelectorAll(".turns1"));
        userTie.forEach((value) => {
          userWin = userWin + 1;
          value.innerHTML = userWin;
        });
      }
    } else if (random == "water" && e.target.alt == "water image") {
      if (userChances != 0) {
        alert("Oops! Game Tie");
        genrate();
        let tieNo = Array.from(document.querySelectorAll(".turns3"));
        tieNo.forEach((value) => {
          tie = tie + 1;
          value.innerHTML = tie;
        });
      }
    } else if (random == "water" && e.target.alt == "gun image") {
      if (userChances != 0) {
        alert("Try Again! Computer Wins");
        genrate();
        let compTie = Array.from(document.querySelectorAll(".turns2"));
        compTie.forEach((value) => {
          compWin = compWin + 1;
          value.innerHTML = compWin;
        });
      }
    } else if (random == "gun" && e.target.alt == "snake image") {
      if (userChances != 0) {
        alert("Try Again! Computer Wins");
        genrate();
        let compTie = Array.from(document.querySelectorAll(".turns2"));
        compTie.forEach((value) => {
          compWin = compWin + 1;
          value.innerHTML = compWin;
        });
      }
    } else if (random == "gun" && e.target.alt == "water image") {
      if (userChances != 0) {
        alert("Yehh! User Wins");
        genrate();
        let userTie = Array.from(document.querySelectorAll(".turns1"));
        userTie.forEach((value) => {
          userWin = userWin + 1;
          value.innerHTML = userWin;
        });
      }
    } else if (random == "gun" && e.target.alt == "gun image") {
      if (userChances != 0) {
        alert("Oops! Game Tie");
        genrate();
        let tieNo = Array.from(document.querySelectorAll(".turns3"));
        tieNo.forEach((value) => {
          tie = tie + 1;
          value.innerHTML = tie;
        });
      }
    }
  });
});

Array.from(user).forEach((user) => {
  user.addEventListener("click", () => {
    if (userChances != 0) {
      userChances = userChances - 1;
    } else {
      let askToUser = Array.from(
        document.getElementsByClassName("askUserToPlay")
      );
      askToUser.forEach((value) => {
        value.style.display = "flex";
      });
      let bt = Array.from(document.getElementsByClassName("btn"));
      bt.forEach((value) => {
        value.addEventListener("click", () => {
          window.location = window.location.href;
        });
      });
    }
    let chs = Array.from(document.getElementsByClassName("ch"));
    chs.forEach((value) => {
      value.innerHTML = userChances + " ";
    });
  });
});
