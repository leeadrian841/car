var Car = function (color, convertible) {
  this.speed = 0
  this.color = color
  this.convertible = convertible
  this.accelerate = function (num) {
    this.speed += num
  }
  this.setColor = function (newColor) {
    this.color = newColor
  }
}

module.exports = Car
