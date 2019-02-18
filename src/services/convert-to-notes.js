/**
 * This service provide functions to convert the message to music notes
 * and play it
 

import Tone from "tone";

const synth = new Tone.Synth().toMaster();

*/

//Default notes to use to convert the letters
const DEFAULT_NOTES = ["C", "D", "E", "F", "G", "A", "B", "C","C4", "D4", "E4",
                      "F4", "G4", "A4", "B4", "C4","C7","D7", "E7", "F7", "G7", 
                      "A7", "B7", "C75","C5","D5","E5"];
const ALPHABET = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ',
                  'O','P','Q','R','S','T','U','V','W','X','Y','Z'];

export default {
  /**
   * This function receives a String and return an Array with
   * every char converted to music note
   *
   * @param {String} message
   * @returns {String}
   */
  convert: function(message) {
    /*
    let notesMessage, unicodeMessage;

    unicodeMessage = message
      .split("")
      .map(currentValue => {
        return currentValue.charCodeAt().toString();
      })
      .join("");

    notesMessage = unicodeMessage
      .split("")
      .map(currentValue => {
        let n;

        currentValue > DEFAULT_NOTES.length - 1
          ? (n = DEFAULT_NOTES[Math.floor(Math.random()*DEFAULT_NOTES.length)])
          : (n = DEFAULT_NOTES[currentValue]);

        return n;
    });

    return notesMessage.join("");
    */
    let notes = message.split("").map(currentValue => {
      return DEFAULT_NOTES[ALPHABET.indexOf(currentValue.toUpperCase())];
    }).join("");


    return notes;

  },
  play: function(notes){
    /*
    let pattern = new Tone.Pattern((time, note)=>{
      console.log(note);
      synth.triggerAttackRelease(note + "4", 1, time);
    }, notes);

    pattern.start(0);
    */
    console.log(ALPHABET.length, DEFAULT_NOTES.length);
  }
};
