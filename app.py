from flask import Flask, render_template
import os

# create flask app
app = Flask(__name__)


@app.route("/")
def hazard():
    return render_template('index.html')


port = int(os.getenv('PORT', 8000))

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=port)
