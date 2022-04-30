from flask import Flask, render_template
from threading import Thread
app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')



run_app = app.run(host='0.0.0.0',port=1000)
while True:
  t=Thread(target= run_app).start()
