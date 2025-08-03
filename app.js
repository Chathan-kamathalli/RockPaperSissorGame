let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const compChoices = () => {
  let choy = ["rock", "paper", "scissors"];
  let randomChoice = Math.floor(Math.random() * choices.length);
  //   console.log(randomChoice);
  return choy[randomChoice];
};

const checkWinner = (userSelect) => {
  let compSelect = compChoices();
  console.log(userSelect, compSelect);
  if (userSelect == compSelect) {
    return "Draw";
  } else if (userSelect == choices[0].id && compSelect == choices[1].id) {
    return "comp";
  } else if (userSelect == choices[1].id && compSelect == choices[2].id) {
    return "comp";
  } else if (userSelect == choices[2].id && compSelect == choices[0].id) {
    return "comp";
  } else {
    return "user";
  }
};

let msg = document.querySelector(".msg");
let uScore = document.querySelector("#userScore");
let cScore = document.querySelector("#compScore");

const matchDraw = () => {
  msg.innerText = "Match Draw! Play your move";
  msg.classList.add("msg");
  msg.classList.remove("msgComp");
  msg.classList.remove("msgUser");
};

const wonByUser = () => {
  msg.innerText = "Won by You! Play your move";
  userScore++;
  uScore.innerText = userScore;
  msg.classList.add("msgUser");
  msg.classList.remove("msg");
  msg.classList.remove("msgComp");
};

const wonByComp = () => {
  msg.innerText = "Won by Comp! Play your move";
  compScore++;
  cScore.innerText = compScore;
  msg.classList.add("msgComp");
  msg.classList.remove("msg");
  msg.classList.remove("msgUser");
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let winner = checkWinner(choice.id);
    if (winner == "Draw") {
      matchDraw();
    } else if (winner == "comp") {
      wonByComp();
    } else {
      wonByUser();
    }
  });
});

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  compScore = 0;
  userScore = 0;
  cScore.innerText = compScore;
  uScore.innerText = userScore;
  msg.classList.add("msg");
  msg.classList.remove("msgComp");
  msg.classList.remove("msgUser");
  msg.innerText = "Game Restarted! Play your move";
});
