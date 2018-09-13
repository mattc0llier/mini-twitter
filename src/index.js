const formNode = document.querySelector("form");

const timelineNode = document.querySelector(".timeline");

const charCount = function(input) {
  const pNode = document.querySelector(".counter");
  pNode.innerHTML = `Character count: ${input}`;
  pNode.style.color = input < 25 ? "black" : "red";
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
  tweetNode.appendChild(button);
  timelineNode.appendChild(tweetNode);
  input.value = "";
  charCount("0");

  button.addEventListener("click", function(event) {
    timelineNode.removeChild(event.target.parentElement);
  });
};

formNode.addEventListener("submit", function(event) {
  event.preventDefault();
  submitTweet();
});

formNode.addEventListener("keyup", function(event) {
  const inputText = document.querySelector(".text-area-input");
  charCount(inputText.textLength);
});
