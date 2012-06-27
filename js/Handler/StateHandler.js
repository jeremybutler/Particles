StateHandler = function()
{
	// Past states of the application 0 newest 9 oldest
	this.state = new Array();
	
	// Mapping of the different states that are available.
	this.stateOptions = new Array(
		'Running',
		'Paused',
		'Stopped',
		'Activity',
		'limbo'
	);
	
	// Returns the current state of the application
	this.getCurrentState = function() {
		if(this.state.length == 0) {
			// Return the state option for limbo since the app hasn't started yet.
			return this.stateOptions[4];
		}else{
			// Return the first item in the stack.
			return this.state[0];
		}
	}
	
	// Sets the current state of the application
	this.setState = function(state) {
		if(inArray(state, this.stateOptions)) {
			this.state.unshift(state);
			if(this.state.length > 10) {
				this.state.shift();
			}
		}else{
			log("Unable to set current State to: '"+state+"', not in mappings, in StateHandler.js");
		}
	}
}