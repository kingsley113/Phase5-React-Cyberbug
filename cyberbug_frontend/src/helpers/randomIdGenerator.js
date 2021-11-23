class RandomIdGenerator {
  static createBase36(length) {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let string = "";
    for (let i = 0; i < length; i++) {
      string += characters[Math.floor(Math.random() * characters.length)];
    }
    return string;
  }
}

export default RandomIdGenerator;
