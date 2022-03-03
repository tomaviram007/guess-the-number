let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");

let answer = Math.floor(Math.random() * 100);
let no_Guesses = 0;
let guesesed_num = [];

// user prompt name
function userNamePrint() {
  let person = prompt("Enter username", "");
  pesronName = document.getElementById("message4").innerHTML =
    " Hello " +
    person +
    " it is great to see you.<br> can you guess the number?";
  console.log(person);
}
userNamePrint();

// guess button to start to play

function play() {
  let user_guess = document.getElementById("guessNumInput").value;

  if (user_guess < 1 || user_guess > 100) {
    alert("please try a number between 1-100");
  } else {
    guesesed_num.push(user_guess);
    no_Guesses += 1;
  }

  if (user_guess < answer) {
    msg1.textContent = "Your guess is too low.";
    msg2.textContent = "no. of guess: 0 ";
    no_Guesses;
    msg3.textContent = "Guessed number are:" + guesesed_num;
  } else if (user_guess > answer) {
    msg1.textContent = "Your guess is too high.";
    msg2.textContent = "no. of guess: 0 ";
    no_Guesses;
    msg3.textContent = "Guessed number are:" + guesesed_num;
  } else if (user_guess == answer) {
    msg1.textContent = `Great Success You Win!!!`;
    msg2.textContent = "The Number was:" + answer;
    msg3.textContent = "You Guessed it in " + no_Guesses + " Guesses";
    document.getElementById("guess_btn").disabled = true;
  }
}
