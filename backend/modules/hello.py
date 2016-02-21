import os
import wave
from flask import Flask, request, redirect, url_for, send_from_directory
from werkzeug import secure_filename

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!'

UPLOAD_FOLDER = '../uploads'
AUDIO_FOLDER = '../audio'
TEMP_FOLDER = '../temp'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['AUDIO_FOLDER'] = AUDIO_FOLDER
app.config['TEMP_FOLDER'] = TEMP_FOLDER

@app.route('/upload', methods=['POST'])
def upload_file():
	file = request.files['video']
	filename = secure_filename(file.filename)

	UPLOAD_PATH = os.path.join(app.config['UPLOAD_FOLDER'], filename)
	file.save(UPLOAD_PATH)

	AUDIO_PATH = os.path.join(app.config['AUDIO_FOLDER'], change_extension(filename))
	os.system("ffmpeg -i " + UPLOAD_PATH + " -ar 16000 -ac 1 " + AUDIO_PATH)
	split_audio(AUDIO_PATH)
		
	return redirect(url_for('uploaded_file', filename=filename))

@app.route('/uploads/<filename>')
def uploaded_file(filename):
	return send_from_directory(app.config['UPLOAD_FOLDER'], filename)


def change_extension(filename):
	tail = os.path.split(filename)[1]
	root = os.path.splitext(tail)[0]
	return root + ".wav"

def split_audio(filename):

    f = wave.open(filename, "rb")
    i = 1
    print f.getnframes()

    while f.tell() < f.getnframes():
         out = open(os.path.join(app.config['TEMP_FOLDER'], str(i)), 'wb')
         frames = f.readframes(80000)
         out.write(frames)
         print f.tell()
         out.close()
         i += 1
    print 'done'


if __name__ == '__main__':
    app.run(debug=True)
