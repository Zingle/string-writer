const {Writable} = require("stream");
const expect = require("expect.js");
const stringWriter = require("../string-writer");

describe("stringWriter()", () => {
    it("should return a Writable", () => {
        expect(stringWriter()).to.be.a(Writable);
    });

    it("should initially evaluate to empty string", () => {
        expect(String(stringWriter())).to.be("");
    });

    it("should evaluate to concatenated input", () => {
        const writer = stringWriter();

        writer.write("foo");
        writer.write("bar");

        expect(String(writer)).to.be("foobar");
    });
});
