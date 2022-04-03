const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt the user to select a media stream 
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play(); 
        }
    } catch(error){
        // Catch Error
        console.log('whoops, error here:',error);
    }

}
button.addEventListener('click',async () => {
    // Disable the button when we click on it 
    button.disable=true;
    // Start Picture in Picture mode 
    await videoElement.requestPictureInPictureMode();
    // Reset the button 
    button.disableed=false;
});

// On Load
 selectMediaStream();