async function translateText() {
    console.log("BUTTON CLICKED");

    let text = document.getElementById("text").value;
    let lang = document.getElementById("language").value;
    let resultBox = document.getElementById("result");

    if (!text.trim()) {
        alert("Enter something first");
        return;
    }

    resultBox.innerText = "Translating...";

    try {
        let response = await fetch("/translate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                text: text,
                target_lang: lang
            })
        });

        let data = await response.json();
        console.log("API RESPONSE:", data);

        resultBox.innerText = (data.translation || "No translation");

    } catch (error) {
        console.error(error);
        resultBox.innerText = "Error occurred";
    }
}

function copyText() {
    let text = document.getElementById("result").innerText;
    navigator.clipboard.writeText(text);
    alert("Copied!");
}

function speakText() {
    let text = document.getElementById("result").innerText;

    if (!text.trim()) return;

    window.speechSynthesis.cancel(); // 👈 clears stuck queue

    let speech = new SpeechSynthesisUtterance(text);

    let lang = document.getElementById("language").value;

    const langMap = {
        "ja": "ja-JP",
        "hi": "hi-IN",
        "fr": "fr-FR",
        "es": "es-ES",
        "de": "de-DE"
    };

    speech.lang = langMap[lang] || "en-US";

    window.speechSynthesis.speak(speech);
}

function startListening() {
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        document.getElementById("text").value = event.results[0][0].transcript;
    };

    recognition.start();
}

function swapLang() {
    let textBox = document.getElementById("text");
    let resultBox = document.getElementById("result");
    let select = document.getElementById("language");

    let temp = textBox.value;
    textBox.value = resultBox.innerText;
    resultBox.innerText = temp;

    if (select.value === "fr") {
        select.value = "en";
    } else {
        select.value = "fr";
    }
}