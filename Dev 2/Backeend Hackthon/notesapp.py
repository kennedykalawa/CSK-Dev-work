from flask import Flask, request, jsonify
import sqlite3
import time

app = Flask(__name__)

db = sqlite3.connect(":memory:", check_same_thread=False)
cursor = db.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS notes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    text TEXT,
    createdAt TEXT
)
""")
db.commit()


@app.route("/notes", methods=['POST'])
def write_notes():
    current_time = time.time()
    details = request.get_json()

    if not details or 'text' not in details:
        return jsonify({'error': 'Missing text field'}), 400

    note = details.get('text')

    cursor.execute(
        "INSERT INTO notes (text, createdAt) VALUES (?, ?)",
        (note, current_time)
    )
    db.commit()

    return jsonify({'response': 'updated successfully!'})

@app.route('/notes', methods=['GET'])
def ReadNotes():
    cursor.execute('''
SELECT * FROM notes
''')
    notes = cursor.fetchall()
    return(jsonify(notes))

@app.route('/notes/<int:id>')
def read_specific_note(id):
    cursor.execute(
        "SELECT * FROM notes WHERE id = ?",
        (id,)
    )
    note = cursor.fetchone()

    if not note:
        return jsonify({'error': 'Note not found'}), 404

    return jsonify({
        "id": note[0],
        "text": note[1],
        "createdAt": note[2]
    })

@app.route('/notes/<int:id>', methods=['DELETE'])
def delete_note(id):
    cursor.execute("DELETE FROM notes WHERE id = ?", (id,))
    db.commit()

    if cursor.rowcount == 0:
        return jsonify({'error': 'Note not found'}), 404

    return '', 204


if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')