// The first IIFE should add a public function (e.g. loadInventory)
// that loads the inventory.json file and stores the inventory in a
// private variable. It should also expose a public getter to read the
// array of cars (e.g. getInventory).

var Carlot = (function(lot){

  var loadArray = [];

  function loadCarlot() {
    var loadJsonArr = JSON.parse(this.responseText);
        loadArray = loadJsonArr.cars;
    populatePage(loadArray);
  };

  var infoRequest = new XMLHttpRequest();
    infoRequest.addEventListener("load", loadCarlot);
    infoRequest.open("GET", "/data/inventory.json");
      lot.loadInventory = function() {
    infoRequest.send();
  };

  lot.getInventory = function() {
    return loadArray;
  };

  return lot;

}(Carlot || {}));

