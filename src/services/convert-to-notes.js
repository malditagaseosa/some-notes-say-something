/**
 * This service provide functions to convert the message to music notes
 * and play it
 */


//Default notes to use to convert the letters
const DEFAULT_NOTES = ["C", "D", "E", "F", "G", "A", "B", "C"];

export default {
  /**
   * This function receives a String and return an Array with
   * every char converted to music note
   *
   * @param {String} message
   * @returns {Array} notes
   */
  convert: function(message) {
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

    return notesMessage;

  }
};
