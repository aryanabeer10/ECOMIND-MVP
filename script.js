
let userProfile = {};

document.getElementById('onboardingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    data.forEach((value, key) => {
        userProfile[key] = value;
    });

    localStorage.setItem("ecomind_user", JSON.stringify(userProfile));
    document.getElementById('onboardingForm').style.display = 'none';
    document.getElementById('chatbox').style.display = 'block';
    document.getElementById('chatlog').innerHTML += `<div><strong>EchoMind:</strong> Hi! I’m ready to support you based on what I’ve learned from you.</div>`;
});

function sendMessage() {
    const input = document.getElementById('userInput');
    const msg = input.value.trim();
    if (msg === "") return;

    document.getElementById('chatlog').innerHTML += `<div><strong>You:</strong> ${msg}</div>`;
    input.value = "";

    const reply = generateEchoReply(msg);
    document.getElementById('chatlog').innerHTML += `<div><strong>EchoMind:</strong> ${reply}</div>`;
    document.getElementById('chatlog').scrollTop = document.getElementById('chatlog').scrollHeight;
}

function generateEchoReply(msg) {
    if (!userProfile || !userProfile.style) {
        return "Tell me more so I can respond like you would.";
    }

    if (msg.toLowerCase().includes("business")) {
        return `Based on your business goals, I'd suggest focusing on clarity and momentum. Want help building a landing page?`;
    }

    if (msg.toLowerCase().includes("motivate")) {
        return `Remember what you said motivates you: "${userProfile.motivation}". Let's use that today.`;
    }

    return `That’s a good point. Based on your tone (“${userProfile.style}”), I’d suggest responding calmly and confidently.`;
}
