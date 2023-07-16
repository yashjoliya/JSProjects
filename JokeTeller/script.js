const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

//Disable/Enable Button
function toggleButton() {
  button.disabled = !button.disabled;
}

// Pass Joke to VoiceRSS API
function tellMe(joke) {
  const jokeString = joke.trim().replace(/ /g,'%20');
  console.log('Tell Me JOoe : ',joke);
      VoiceRSS.speech({
        key: '5970634acf7648139a504be77f5b18a1',
        src: jokeString,
        hl: 'en-in',
        v: 'Jai',
        r: -1, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
  
}

//GEt Joke From API
async function getJokes(){
    let joke ='';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming';
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if(data.setup){
            joke = `${data.setup} ... ${data.delivery}`;
        }else{
            joke = data.joke;
        }
        //Text-To-Speech
        tellMe(joke);
        //Disabled Button
        toggleButton();
    } catch (error) {
        console.log('Unable to Get Data',error)
    }
}

//Event Listner
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended',toggleButton);