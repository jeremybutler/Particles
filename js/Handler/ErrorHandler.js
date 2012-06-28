ErrorHandler = function()
{
	// Array of errors.
	this.errors = new Array();
	
	// Add an error to the stack
	this.addError = function(message, level) {
		// Adds an error object to the stack.
		this.errors.unshift(new Array(message, level));
	}
	
	// Get the last item
	this.getLast = function(){
		return this.errors[0];
	}
	
	// Clear the errors array.
	this.clear = function(){this.errors = new Array();}
	
	
}