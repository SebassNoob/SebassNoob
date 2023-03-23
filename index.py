from flask import Flask, render_template, redirect, url_for, request
from threading import Thread
import sys


#defines constants from cmd line

if len(sys.argv) >=2: PORT = sys.argv[1]
else: PORT = 6969 #haha funny number

if len(sys.argv) >=3: DEBUG=sys.argv[2]
else: DEBUG=False


def main():
  app = Flask(__name__)
  
  @app.route('/')
  def index():
    return render_template('index.html')
  
  @app.route('/exp_edu')
  def exp_edu():
    return render_template('exp_edu.html')
  
  
  
  @app.route('/eg', methods = ['GET'])
  def eg():
    #a,b,c are placeholders for individual articles.
    #/eg?pageid=int returns the article html
#uncomment when ready
    
    #if request.method == 'GET':
      #pageid = request.args.get('pageid')
      #switch = {0:'a',1:'b',2:'c'}
      #return render_template(switch.get(pageid,'a'))

    return render_template('eg.html')
    #to be removed
  
  @app.route('/hobbies')
  def hobbies():
    return render_template('hobbies.html')
    
  
  @app.route('/404')
  def pg404():
    return render_template('err404.html')


  @app.route('/about')
  def about():
    return render_template('about.html')
  
  
  @app.errorhandler(404)
  def err404(e):
    return redirect(url_for('pg404'))
  
  

    
  run_app = app.run(host='0.0.0.0',port= PORT, debug= DEBUG)
  
  while True:
    Thread(target= run_app).start()

#runs
if __name__ =='__main__':
  main()