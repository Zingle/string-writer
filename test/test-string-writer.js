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

describe("stringWriter(string)", () => {
    it("should decode buffer input", () => {
        const writer8 = stringWriter("utf8");
        const euro8 = new Buffer("€", "utf8");

        writer8.write(euro8);
        expect(String(writer8)).to.be("€");

        const writer16 = stringWriter("utf16le");
        const euro16 = new Buffer("€", "utf16le");

        writer16.write(euro16);
        expect(String(writer16)).to.be("€");
    });
});
