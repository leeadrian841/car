var Car = function (speed, color, convertible) {
  this.speed = speed
  this.color = color
  this.convertible = convertible
  this.accelerate = function (accelerate) {
    this.speed += accelerate
  }
  this.setColor = function (newColor) {
    this.color = newColor
  }
}

module.exports = Car
