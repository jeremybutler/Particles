var core = null;

// Start of the application setup.
function onLoad() {
	// Create a new core.
	core = new Core();
	core.appLoader();
	if(core.loaded) {
		log("Core has loaded successfully.");
	}
}

function log(content) {
	console.log(content);
}