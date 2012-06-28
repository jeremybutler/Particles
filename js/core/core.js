/**
 * Core will be initialized at the very start of runtime.
 * Class will be accessable throughout the entire application.
 */
Core = function()
{
	this.context 	= null;
	this.settings	= null;
	this.loaded 	= false;
	this.handler	= null;
	
	this.appLoader = function() {
		
		// Load the handler
		this.loadClasses();
		
		// Add a canvas to the screen.
		var canvas = '<canvas id="canvas" width="'+this.settings.applicationWidth+'" height="'+this.settings.applicationHeight+'"></canvas>';
		document.getElementsByTagName('body')[0].innerHTML = canvas;
	
		// Create the base components that the application will run on.
		this.context = document.getElementById('canvas').getContext('2d');
		if(this.context) {
			
			this.loaded = true;
		}
	}
	
	// Starts the applications state and sets it to running. Default is limbo.
	this.startApplication = function() {
		var State = this.getHandler('StateHandler');
		State.setState('Running');
	}
	
	// Load classes that will be used in the core.
	this.loadClasses = function() {
		this.handler = new Handler();
		this.settings = new Settings();
	}
	
	// Get Handlers
	this.getHandler = function(handlerName) {
		return this.handler.getHandle(handlerName);
		
	}
	
	// Register interaction
	this.registerInteraction = function() {
		// Create a click handler
	}
	
	// Add event Listeners to the document
	this.addEventListeners = function() {
		// Add an event listener handler.
	}
}