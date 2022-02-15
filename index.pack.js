const greetingDisplay = document.getElementById("greeting-display");
const recipientEl = document.getElementById("recipient-input");
const selectGreetingsEl = document.getElementById("greeting-select");
const senderEl = document.getElementById("sender-input");
const customEl = document.getElementById("custom-input");
const customLabelEl = document.querySelector('label[for="custom-input"]');

const msgObject = {
  to: "",
  msg: "",
  from: "",
};

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
      if (shouldFocus === true) {
        customEl.focus();
        customEl.select();
      }
    } else {
      customEl.value = "";
      customEl.style.display = "none";
      customLabelEl.style.display = "none";
    }
    greetingDisplay.innerText = `To: ${msgObject.to} \n\n "${msgObject.msg}" \n\nFrom: ${msgObject.from}.`;
  }
}

recipientEl.addEventListener("input", () => {
  msgObject["to"] = recipientEl.value;
  writeGreeting();
});

// let shouldFocus = false;
selectGreetingsEl.addEventListener("input", () => {
  if (selectGreetingsEl.value === "custom") {
    customEl.value = msgObject["msg"];

    // shouldFocus = true;
    writeGreeting(true);
  } else {
    msgObject["msg"] = selectGreetingsEl.value;
    writeGreeting();
  }
});

customEl.addEventListener("input", () => {
  msgObject["msg"] = customEl.value;
  writeGreeting();
});

senderEl.addEventListener("input", () => {
  msgObject["from"] = senderEl.value;
  writeGreeting();
});



