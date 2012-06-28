Handler = function()
{
	// Mapping of handles we can instantiate
	this.handles = new Array(
		new Array('UnitHandler', ''),
		new Array('NodeHandler', ''),
		new Array('TileHandler', ''),
		new Array('StateHandler', ''),
		new Array('ViewHandler', ''),
		new Array('RenderHandler', ''),
		new Array('ErrorHandler', '')
	);
	
	// Create a new class so long as it is mapped in the handles[]
	this.getHandle = function(handle) {
		for(x in this.handles) {
			if(this.handles[x][0] == handle) {
				if(this.handles[x][1] === ''){
					// Create a new handle.
					log("Creating a new "+this.handles[x][0]);
					this.handles[x][1] = new window[handle]();
					return this.handles[x][1];
				}else{
					log("Loading already created "+this.handles[x][0]);
					// Return the already instanciated object.
					return this.handles[x][1];
				}
			}
		}
		
		// Default to a logged error.
		log("Unable to load handle: '"+handle+"' in Handler.js");
		return false;
	}

}