
const messages = document.getElementById('messages');
const input = document.getElementById('user-input');

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
});

function sendMessage() {
  const userText = input.value.trim();
  if (userText === "") return;

  const userMsg = document.createElement("div");
  userMsg.textContent = "You: " + userText;
  messages.appendChild(userMsg);

  let response = "";
  if (userText.includes("sad") || userText.includes("depressed")) {
    response = "EchoMind: I’m here with you. Remember what your father once said about resilience...";
  } else if (userText.includes("motivate") || userText.includes("tired")) {
    response = "EchoMind: Let’s remember your mission. You said you want to inspire millions — let’s keep going.";
  } else if (userText.includes("what should I do")) {
    response = "EchoMind: Based on your past logic, take a step back and reflect. You always find the best way forward.";
  } else {
    response = "EchoMind: That’s deep. I’ll learn more about your style and logic as we go.";
  }

  const aiMsg = document.createElement("div");
  aiMsg.textContent = response;
  messages.appendChild(aiMsg);

  input.value = "";
  messages.scrollTop = messages.scrollHeight;
}
