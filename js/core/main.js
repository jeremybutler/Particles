var core = null;

// Start of the application setup.
function onLoad() {
	// Create a new core.
	core = new Core();
	core.appLoader();
	if(core.loaded) {
		log("Core has loaded successfully.");
	}
	
	// Call core to start the application
	core.start();
	
	/*
	 * No further actions should take place in this file.
	 * On load should call on core and begin the application
	 * 
	 */
}

function log(content) {
	console.log(content);
}