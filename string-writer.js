const {assign} = Object;
const {Writable} = require("stream");

/**
 * Create writable stream which evaluates to its concatenated string input.
 * @returns {Writable}
 */
function stringWriter() {
    const chunks = [""];
    const writer = new Writable({write});

    return assign(writer, {toString});

    function write(chunk, enc, done) {
        chunks.push(chunk);
        done();
    }

    function toString() {
        const len = chunks.length;

        if (chunks.length > 1) {
            chunks.splice(0, len, chunks.join(""));
        }

        return chunks[0];
    }
}

module.exports = stringWriter;
