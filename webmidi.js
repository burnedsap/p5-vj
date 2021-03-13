//set midi global variables here
//CHROME ONLY 

if (!("requestMIDIAccess" in navigator)) {
    document.body.innerHTML = `<h1>:-/</h1><p>I'm sorry, but your browser does not support the WebMIDI API ☹️🚫🎹</p>`;
}

navigator.requestMIDIAccess()
    .then((access) => {

        // Get lists of available MIDI controllers
        const inputs = access.inputs;
        const outputs = access.outputs;

        const inputText = [];
        const outputText = [];
        //  console.log(inputs(0));
        inputs.forEach((midiInput) => {
            midiInput.onmidimessage = function (message) {
                //                console.log("Name: " + midiInput.name); //keep these to figure out your midi keyboard 
                //                console.log("D0: " + message.data[0]);  //set bindings to some global variables here
                //                console.log("D1: " + message.data[1]);  //so that these values can be accessed by your sketch
                //                console.log("D2: " + message.data[2]);
            }
        })
    });
