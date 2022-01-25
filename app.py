import os

from flask import Flask, request, render_template
app = Flask(__name__)
#app.secret_key = 'fasdryrinv4573hf63h4'
#app.config['UPLOAD_FOLDER'] = "static/tracks/"

if(not os.path.exists("static/videos/")):
    os.mkdir("static/videos/")

@app.route('/', methods=('POST', 'GET'))
def index():
    return render_template("player1.html")



if __name__ == '__main__':
    from wsgiref.simple_server import make_server
    server = make_server('', 5000, app)
    server.serve_forever()