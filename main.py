from flask import Flask
from flask import send_file
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/all")
def index():
    return send_file("coor.json")

# punto d
@app.route("/snorlax")
def snorlax():
    f = open('coor.json') 
    data = json.load(f) 
    return data['coor'][random.randrange(0,13)] 

@app.route("/pikachu")
def pikachu():
    f = open('coor.json') 
    data = json.load(f) 
    return data['coor'][random.randrange(0,13)] 

@app.route("/charmender")
def charmender():
    f = open('coor.json') 
    data = json.load(f) 
    return data['coor'][random.randrange(0,13)] 

@app.route("/bulbasaur")
def bulbasaur():
    f = open('coor.json') 
    data = json.load(f) 
    return data['coor'][random.randrange(0,13)] 

# fine punto d
if __name__ == "__main__":
    app.run()