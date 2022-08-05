class Jellyfish extends Fish {

  constructor(options) {
    super(options);

    this.maxSwimSpeed = 80;
    this.imageUri = "/images/jellyfish.png";

  }

  onClick(event) {
    let swimVelocity = this.swimVelocity;
    this.generateSwimVelocity(this.maxSwimSpeed, 1);
  }

  generateSwimVelocity(max, min) {
    if (min && min > max) {
      min = 0;
    }
    var newSpeed = new Vector(randRangeInt(-max / 8, max / 8), randRangeInt(-max, max));
    while (min && newSpeed.magnitude() < min) {
      newSpeed = new Vector(randRangeInt(-max / 8, max / 8), randRangeInt(-max, max));
    }
    return newSpeed;
  }

}
