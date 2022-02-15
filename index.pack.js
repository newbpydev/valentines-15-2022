const greetingDisplay = document.getElementById("greeting-display");
const recipientEl = document.getElementById("recipient-input");
const selectGreetingsEl = document.getElementById("greeting-select");
const senderEl = document.getElementById("sender-input");
const customEl = document.getElementById("custom-input");
const customLabelEl = document.querySelector('label[for="custom-input"]');
const btnJokeEl = document.querySelector(".btn-rand");

const msgObject = {
  to: "",
  msg: "",
  from: "",
};

const randValentinesJoke = [
  "Who always has a date on Valentine’s Day? A calendar.",
  "What Valentine’s message can you find in a honeycomb? “Bee mine.”",
  "Which new Taylor Swift tune is the best couple’s song for two ghosts to share? “Invisible String.”",
  "How did the coin propose to his girlfriend? He gave her a jingle.",
  "What did one Hershey’s bar say to the other who arrived long past their date time? “You’re choco-late.”",
  "Why are artichokes so beloved? They’re known for their hearts.",
  "What did the love-obsessed candle say when it was lit? “I found the perfect match!”",
  "What do you call a colorful heart that loves books? “Well-red.”",
  "How did the orca ask the other to be their Valentine ? “Whale you be mine ?”",
  "Why did the magnet hit on the refrigerator? He found her to be very attractive.",
  "What’s the best recipe for a perfect morning on February 14? A hug and a quiche.",
  "What did one piece of toast say to the other? “You’re my butter half!”",
  "Why didn’t the two dogs make serious Valentine’s Day plans? It was just puppy love.",
  "Why did the dad approve of his daughter’s goalie-boyfriend? He was a real keeper.",
  "When do bed bugs fall in love? In the spring.",
  "Related: 50 Galentine’s Gift Ideas",
  "How did one Bloody Mary share their strong feelings with another? “Olive you.”",
  "What do you call two sparrows who just got engaged? “Lovebirds.”",
  "What is it called when your aunt went off to get married on V-Day? Antelope.",
];


function writeGreeting(shouldFocus = false) {
  // Write a function update the message in the greeting-display paragraph each
  // time the form is updated.
  if (
    recipientEl.value === "" &&
    senderEl.value === "" &&
    selectGreetingsEl.value === ""
  ) {
    greetingDisplay.textContent = "Greeting will go here";
  } else {
    if (selectGreetingsEl.value === "custom") {
      customEl.style.display = "block";
      customLabelEl.style.display = "block";
      btnJokeEl.style.display = "block";
      if (shouldFocus === true) {
        customEl.focus();
        customEl.select();
      }
    } else {
      customEl.value = "";
      customEl.style.display = "none";
      customLabelEl.style.display = "none";
      btnJokeEl.style.display = "none";
    }

    greetingDisplay.innerText = `To: ${msgObject.to} \n\n "${msgObject.msg}" \n\nFrom: ${msgObject.from}`;
  }
}

recipientEl.addEventListener("input", () => {
  msgObject["to"] = recipientEl.value;
  writeGreeting();
});

selectGreetingsEl.addEventListener("input", () => {
  if (selectGreetingsEl.value === "custom") {
    customEl.value = msgObject["msg"];
    writeGreeting(true);
  } else {
    msgObject["msg"] = selectGreetingsEl.value;
    writeGreeting();
  }
});

const getRandJoke = () => {
  const randIndex = Math.floor(Math.random() * randValentinesJoke.length);
  return randValentinesJoke[randIndex];
}

customEl.addEventListener("input", () => {
  msgObject["msg"] = customEl.value;
  writeGreeting();
});

btnJokeEl.addEventListener("click", () => {
  msgObject["msg"] = getRandJoke();
  customEl.value = msgObject['msg'];
  writeGreeting();
})

senderEl.addEventListener("input", () => {
  msgObject["from"] = senderEl.value;
  writeGreeting();
});

// //////////////////////////////////////////////////////////////////
