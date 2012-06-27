/**
 * Core will be initialized at the very start of runtime.
 * Class will be accessable throughout the entire application.
 */
Core = function()
{
	this.context 	= null;
	this.loaded 	= false;
	
	this.appLoader = function()
	{
		// Create the base components that the application will run on.
		this.context = document.getElementById('canvas').getContext('2d');
		if(this.context) {
			this.loaded = true;
		}
		
	}
}