//define the flower constructor
function Flower(color, petals, smellsPretty) {
    // define attributes we will set when a flower is initialized
    this.color = color;
    this.petals = petals;
    this.smellsPretty= smellsPretty;
}

//define shared methods among all flower instances
Flower.prototype = {
  sniff: function sniff() {
        console.log("Sniff Sniff Sniff!");
  },
  smellsGood: function smellsGood(answer) {
      if (answer) {
        return 'This flower smells amazing!';
      } else {
        return 'What a noxious weed!';
      }
  },
  describe: function describe() {
    alert("This flower is " + this.color + ".")
  },
  compare: function compare(otherFlower) {
      return("My " + this.color + " flower is much prettier than your " +
        otherFlower.color + " flower :P");
  },
  render: function render() {
    var flower = document.createElement('p');
    flower.textContent =
      "My pretty flower is "
      + this.color
      + " and has "
      + this.petals
      + " pristine petals";
    document.querySelector("body").appendChild(flower);
  },
///return(flower2.color + "-" + this.color)
  crossPollination: function crossPollination(flower2) {
    return(flower2.petals + this.petals);
  }
}

// eturn("Color is " + flower2.color + "-" + this.color + " and number of petals is " flower2.petals + this.petals);


//initialize some flower instances
var chrysanthemum = new Flower("pink", 65, false);
var rose = new Flower("red", 32, true);
var lily = new Flower("yellow", 6, true);
var jasmine = new Flower("white", 5, true);
var mountainLaurel = new Flower("purple", 50, true);
var rose = new Flower("red", 7, true);

rose.crossPollination(mountainLaurel);
