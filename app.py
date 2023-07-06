from flask import Flask, render_template, jsonify
import psycopg2
from flask_cors import CORS

with open("password.txt", "r") as file:
    passw = file.read().strip()

app = Flask(__name__)
cors = CORS(app)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/data')
def get_data():
    conn = psycopg2.connect(
        host="localhost",
        database="GenderInequality",
        user="postgres",
        password=passw
    )
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM "GenderInequality"')
    data = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)