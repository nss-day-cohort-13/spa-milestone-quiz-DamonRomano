// The first IIFE should add a public function (e.g. loadInventory)
// that loads the inventory.json file and stores the inventory in a
// private variable. It should also expose a public getter to read the
// array of cars (e.g. getInventory).

var CarLot =








function populatePage (inventory) {
  // Loop over the inventory and populate the page

  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
