const formNode = document.querySelector("form");

const timelineNode = document.querySelector(".timeline");

let currentCharCount = 0;

const charCount = function(input) {
  const pNode = document.querySelector(".counter");
  pNode.innerHTML = `Character count: ${input}`;
  pNode.style.color = input < 25 ? "black" : "red";
  currentCharCount = input;
};

const submitTweet = function() {
  // create tweet node
  const tweetNode = document.createElement("div");
  tweetNode.className = "tweet";
  // get textarea input
  const input = document.querySelector(".text-area-input");
  tweetNode.innerHTML = `<span>${input.value}</span> `;
  // create button node
  const button = document.createElement("button");
  button.textContent = "x";
  // appending delete button to tweet node
  tweetNode.appendChild(button);
  //append tweet node to timelineNode
  timelineNode.appendChild(tweetNode);
  // clears text area
  // init character count
  charCount("0");
  //Setting event listener on delete button
  button.addEventListener("click", function(event) {
    timelineNode.removeChild(event.target.parentElement);
  });
};

formNode.addEventListener("submit", function(event) {
  event.preventDefault();
  const inputText = document.querySelector(".text-area-input");
  if (currentCharCount > 0) {
    // return tranformed mapped array here
    transformTwitterHandle(inputText.value);
    submitTweet();
    // console.log(inputText.value);
  }
  inputText.value = "";
});

formNode.addEventListener("keyup", function(event) {
  const inputText = document.querySelector(".text-area-input");
  charCount(inputText.textLength);
});

const transformTwitterHandle = function(string) {
  //console.log(string.split(" "));
  let wordArray = string.split(" ");

  const transformedWordsArr = wordArray.map(function(word) {
    // console.log(word);
    const atRegex = /@/g;
    if (word.match(atRegex) && word[0] === "@") {
      console.log("@");
    }
  });
};
