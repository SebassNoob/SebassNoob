from flask import Flask, render_template, redirect, url_for
from threading import Thread
app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/exp_edu')
def exp_edu():
  return render_template('exp_edu.html')



@app.route('/eg')
def eg():
  return render_template('eg.html')

@app.route('/hobbies')
def hobbies():
  return render_template('hobbies.html')
  

@app.route('/404')
def pg404():
  return render_template('err404.html')



@app.errorhandler(404)
def err404(e):
  return redirect(url_for('pg404'))
run_app = app.run(host='0.0.0.0',port=1111)
while True:
  t=Thread(target= run_app).start()
