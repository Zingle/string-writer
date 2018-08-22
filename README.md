The `stringWriter` function creates writable streams which can be passed around
and used as strings.

Usage
=====
```js
const stringWriter = require("@zingle/string-writer");

function processReadableStream(input, done) {
    const output = stringWriter();

    // output can be used as a Writable stream
    input.pipe(output).on("end", () => {
        // output can also be used as a String
        console.info("output: ${output}");

        done(String(output))
    });
};
```
