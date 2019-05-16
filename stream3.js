const { Transform } = require("stream");

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    let str = chunk.toString();
    str.replace(/apple|banana|orange/gi, item => item.toUpperCase());
    this.push(str.toUpperCase());
    callback();
  }
});

process.stdin.pipe(upperCaseTransform).pipe(process.stdout);
