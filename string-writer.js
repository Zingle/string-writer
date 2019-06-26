const {Writable} = require("stream");
const {StringDecoder} = require("string_decoder");
const {assign} = Object;

/**
 * Create writable stream which evaluates to its concatenated string input.  If
 * encoding is provided, decode buffer input.
 * @param {string} [encoding]
 * @returns {Writable}
 */
function stringWriter(encoding) {
    const chunks = [];
    const writer = new Writable({write});
    const decoder = encoding ? new StringDecoder(encoding) : undefined;

    return assign(writer, {toString});

    function write(chunk, enc, done) {
        chunks.push(decoder ? decoder.write(chunk) : chunk);
        done();
    }

    function toString() {
        // concatenate chunks and save concatenated value as single chunk
        chunks.splice(0, chunks.length, chunks.join(""));

        // return the concatenated chunk
        return chunks[0];
    }
}

module.exports = stringWriter;
