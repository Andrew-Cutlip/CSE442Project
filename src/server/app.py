import sys
from auth import *

from flask import Flask, render_template, request, send_from_directory, url_for
app = Flask(__name__, static_folder="./static")


@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')


@app.route('/about')
def about():
    return render_template('about.html')


@app.route("/register")
def register():
    # got stuff!
    error = []
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        if is_username_valid(username) and is_password_valid(password):
            # TODO register user
            pass
        else:
            error = "Invalid username / password"
    return "Registration page"


@app.route("/login")
def login():
    # got stuff!
    error = []
    if request.method == "POST":
        username = request.form["username"]
        password = request.form["password"]
        # TODO look up username and see if password matches
        pass
    return app.send_static_file("index.html")


@app.route("/static/<path:path>")
def send_static_file(path):
    return send_from_directory(url_for("static"), path)


if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 500
    host = "0.0.0.0"
    app.run(host=host, port=port)
