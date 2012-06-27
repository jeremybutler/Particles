Handler = function()
{
	// Mapping of handles we can instantiate
	this.handles = new Array(
		'UnitHandler',
		'NodeHandler',
		'TileHandler',
		'StateHandler',
		'ViewHandler',
		'RenderHandler'
	);
	
	// Create a new class so long as it is mapped in the handles[]
	this.getHandle = function(handle) {
		if(inArray(handler, this.handler)) {
			return new this[handle]();
		}else{
			log("Unable to load handle: '"+handle+"' in Handler.js");
			return false;
		}
	}

}