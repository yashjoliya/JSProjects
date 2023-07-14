const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to Select MEdia Stream, Pass To Video Element, Then Play

async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); 
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //Catch Error
        console.log('Ooops, Error Here',error);
    }
}

button.addEventListener('click',async () => {
    //Disable Button
    button.disabled = true;

    //Start Picture in Picture
    await videoElement.requestPictureInPicture();

    //Reset Button
    button.disabled = false;
});

//On Load
selectMediaStream();