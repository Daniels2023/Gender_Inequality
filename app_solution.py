from flask import Flask, render_template, jsonify
import psycopg2

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/data')
def get_data():
    conn = psycopg2.connect(
        host="localhost",
        database="GenderInequality",
        user="postgres",
        password="dantas1987"
    )
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM "GenderInequality"')
    data = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)