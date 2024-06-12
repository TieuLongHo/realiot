from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)


@app.route("/webhook", methods=["POST"])
def webhook():
    if request.method == "POST":
        data = request.json
        if data["ref"] == "refs/heads/production":
            subprocess.call(["/home/pi/services/webhook/deploy.sh"])
            print("Push on production branch, deploying...")
        return jsonify({"message": "Webhook received!"}), 200
    else:
        return jsonify({"message": "Method not allowed"}), 405


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=6000)
