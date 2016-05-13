// The final IIFE should augment the object with two more functions:
var Carlot = (function(lot){


// One function resets the border thickness and background color
// for each car element back to the original values.


// The other function changes the thickness of the border of a car element,
// and changes its background color. The function must accept two arguments:
//   A car DOM element that was clicked on.
//   A color name.

// The first IIFE should add a public function (e.g. loadInventory)
// that loads the inventory.json file and stores the inventory in a
// private variable. It should also expose a public getter to read the
// array of cars (e.g. getInventory).


  var loadArray = [];

  function loadCarlot() {
    var loadJsonArr = JSON.parse(this.responseText);
    loadArray = loadJsonArr.cars;
    carlot.initialMessages();
  };

  var infoRequest = new XMLHttpRequest();
  infoRequest.addEventListener("load", loadCarlot);
  infoRequest.open("GET", "/data/inventory.json");
  infoRequest.send();

  carlot.getInventory = function() {
    return loadArray;
  };

  return lot;

}(Carlot || {}));




