var midi_d1 = 0;
var midi_d2 = 0;
var midi_d3 = 0;
var midi_d4 = 0;
var midi_d5 = 0;
var midi_d6 = 0;
var midi_d7 = 0;
var midi_d8 = 0;
var midi_b1 = false;
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
                //                console.log("Name: " + midiInput.name); //keep these to figure out the 
                //                console.log("D0: " + message.data[0]);
                //                console.log("D1: " + message.data[1]);
                //                console.log("D2: " + message.data[2]);
                if (message.data[1] == 1) {
                    midi_d1 = message.data[2];
                }
                if (message.data[1] == 2) {
                    midi_d2 = message.data[2];
                }
                if (message.data[1] == 3) {
                    midi_d3 = message.data[2];
                }
                if (message.data[1] == 4) {
                    midi_d4 = message.data[2];
                }
                if (message.data[1] == 5) {
                    midi_d5 = message.data[2];
                }
                if (message.data[1] == 6) {
                    midi_d6 = message.data[2];
                }
                if (message.data[1] == 7) {
                    midi_d7 = message.data[2];
                }
                if (message.data[1] == 8) {
                    midi_d8 = message.data[2];
                }
                if (message.data[1] == 40) {
                    if (message.data[0] == 144) {
                        midi_b1 = true;
                    }
                    if (message.data[0] == 128) {
                        midi_b1 = false;
                    }
                }
            }
        })
    });
