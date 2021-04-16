const recorderContainer = document.getElementById("jsRecordContainer");
const recordBtn = document.getElementById("jsRecordBtn")
const videoPreview = document.getElementById("jsVideoPreview");

let streamObject;
let videoRecorder;

const handleVideoData = (event) => {
	// console.log(event.data);
	const { data: videoFile } = event;
	const link = document.createElement("a");
	link.href = URL.createObjectURL(videoFile);
	link.download = "recorded.webm";
	document.body.appendChild(link);
	link.click();
}

const startRecording = () => {
  //console.log(streamObject);
	videoRecorder = new MediaRecorder(streamObject);
	videoRecorder.start();
	//console.log(videoRecorder);
	videoRecorder.addEventListener("dataavailable", handleVideoData);
	recordBtn.addEventListener("click", stopRecording);
}

const stopRecording = () => {
	videoRecorder.stop();
	recordBtn.removeEventListener("click", stopRecording);
	recordBtn.addEventListener("click", getVideo);
	recordBtn.innerHTML = "Start recording";
}

const getVideo = async () => {
	try {
		const stream = await navigator.mediaDevices.getUserMedia({
			audio: true,
			video: { width: 1280, height: 720 }
		});
		// console.log(stream);
		videoPreview.srcObject = stream;
		videoPreview.muted = true;
		videoPreview.play();
		recordBtn.innerHTML = "Stop recording";
		streamObject = stream;
		startRecording();
	} catch(error) {
		recordBtn.innerHTML = "Cant record";
	} finally {
		recordBtn.removeEventListener("click", getVideo);
	}
}

function init() {
  recordBtn.addEventListener("click", getVideo);
}

if (recorderContainer) {
  init();
}