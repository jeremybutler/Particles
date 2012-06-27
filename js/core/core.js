/**
 * Core will be initialized at the very start of runtime.
 * Class will be accessable throughout the entire application.
 */
Core = function()
{
	this.context 	= null;
	this.loaded 	= false;
	this.handler	= null;
	
	this.appLoader = function() {
		// Create the base components that the application will run on.
		this.context = document.getElementById('canvas').getContext('2d');
		if(this.context) {
			this.loadClasses();
			this.loaded = true;
		}
		
	}
	
	// Load classes that will be used in the core.
	this.loadClasses = function() {
		this.handler = new Handler();
	}
	
	// Get Handlers
	this.getHandler = function(handlerName) {
		return this.handler.getHandle(handlerName);
		
	}
}