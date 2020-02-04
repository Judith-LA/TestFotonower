var front=true;

function affichageWebcam(){
	const video = document.querySelector('video');

	navigator.mediaDevices.getUserMedia({video: {facingMode: (front? "user" : "environment")}}).
	then((stream) => {video.srcObject = stream});
}

function captureImage(){
	const video = document.querySelector('video');
	const canvas = document.querySelector('canvas');
	const context = canvas.getContext('2d');

	canvas.width = video.clientWidth;
	canvas.height = video.clientHeight;
	context.drawImage(video,0,0);
}

function rotationCamera() {
	front = !front;
}