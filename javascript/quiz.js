// The first IIFE should add a public function (e.g. loadInventory)
// that loads the inventory.json file and stores the inventory in a
// private variable. It should also expose a public getter to read the
// array of cars (e.g. getInventory).

var CarLot =

function populatePage (inventory) {
  // Loop over the inventory and populate the page
  for (var i = 0; i < inventory; i++);



  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);

return {
  getInventory: function () {
    return inventory
  },
  loadInventory: function (callback) {
    var pleaseLoadInventory = new XMLHttpRequest();
      pleaseLoadInventory.addEventListener("load", populatePage) ({
        var data = JSON.parse(this.responseText);
        fillInventory(data);
        callback(inventory);
      pleaseLoadInventory.open( "GET", "inventory.json");
      pleaseLoadInventory.send()
      });
  }
}();
