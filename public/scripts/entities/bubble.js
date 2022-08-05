class Bubble extends Fish {

  constructor(options) {
    super(options);

    this.maxSwimSpeed = 50;
    this.imageUri = "/images/bubble.png";
    this.generateSwimVelocity(this.maxSwimSpeed, 20);
  }

  onClick(event) {
    // let swimVelocity = this.swimVelocity;

    this.kill();
  }

  generateSwimVelocity(max, min) {
    if (min && min > max) {
      min = 0;
    }
    var newSpeed = new Vector(randRangeInt(-max / 2, max / 2), randRangeInt(-max, max));
    while (min && newSpeed.magnitude() < min) {
      newSpeed = new Vector(randRangeInt(-max /2, max / 2), randRangeInt(-max, max));
    }
    return newSpeed;
  }

}
