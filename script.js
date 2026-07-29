const input = document.getElementById("userInput");
const output = document.getElementById("output");

function askAI() {
  const message = input.value.trim();

  if (message === "") {
    output.innerHTML = "Please type something first.";
    return;
  }

  output.innerHTML = "<strong>You:</strong> " + message;

  setTimeout(() => {
    output.innerHTML +=
      "<br><br><strong>AI:</strong> Thanks for your message! This is a demo response. We'll connect it to a real AI model next.";
  }, 800);

  input.value = "";
}
