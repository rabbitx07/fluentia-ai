from flask import Flask, render_template, request, jsonify
from model import translate_text

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/translate", methods=["POST"])
def translate():
    try:
        data = request.get_json()

        text = data.get("text")
        target_lang = data.get("target_lang")

        if not text:
            return jsonify({"error": "No text provided"}), 400

        result = translate_text(text, tgt_lang=target_lang)

        return jsonify({
            "translation": result
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=10000)