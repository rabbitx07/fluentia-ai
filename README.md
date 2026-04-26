# 🌸 Fluentia — AI Multilingual Translator

Fluentia is a web-based AI-powered multilingual translation system built using Flask and Hugging Face Transformers.
It enables real-time translation across multiple languages with a clean, modern, and user-friendly interface.

---

## ✨ Features

* 🌍 Multilingual translation (Using M2M100)
* 🗣️ Text-to-Speech (Speak translated output)
* 🎤 Voice input (Speech recognition)
* 🔁 Language swap functionality
* ⚡ Real-time AI translation
* 🎨 Clean and aesthetic UI

---

## 🧠 Tech Stack

* **Backend:** Python, Flask
* **AI Model:** Hugging Face Transformers (M2M100)
* **Frontend:** HTML, CSS, JavaScript
* **Libraries:** PyTorch, SentencePiece

---

## 📁 Project Structure

```
fluentia-ai/
│
├── app.py
├── model.py
├── requirements.txt
│
├── templates/
│   └── index.html
│
├── static/
│   ├── style.css
│   ├── script.js
│   └── images/
│
└── README.md
```

---

## 🚀 How to Run Locally

### 1. Clone the repository

```
git clone https://github.com/rabbitx07/fluentia-ai.git
cd fluentia-ai
```

---

### 2. Create virtual environment

```
python -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows
```

---

### 3. Install dependencies

```
pip install -r requirements.txt
```

---

### 4. Run the application

```
python app.py
```

Open your browser and go to:

```
http://127.0.0.1:5000
```

---

## 🧩 How It Works

1. User inputs text through the frontend
2. Request is sent to Flask backend
3. Transformer model (M2M100) processes translation
4. Translated output is returned
5. Output can be spoken using browser speech synthesis

---

## 📌 Future Improvements

* 🔍 Auto language detection
* 🔊 More natural voice synthesis
* 📜 Translation history
* ☁️ Deployment (Render / Vercel / AWS)

---

## 👩‍💻 Author

**Anshika**
BCA (AI & Data Science)
Graphic Era University

---

## ⭐ Note

This project is built for learning and demonstration purposes, showcasing the practical use of AI and NLP in real-world applications.
