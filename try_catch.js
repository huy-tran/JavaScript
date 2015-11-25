function changeContent(id, update, existing) {
	try {
		var newElement = undefined;
		document.getElementById(id).innerHTML = update;
	} catch (error) {
		// If function cannot match id param, we're gonna check if innerHTML is existing
		try {
			var elems = document.getElementsByTagName('p');
			for (var i = 0, len = elems.length; i < len; i++ ) {
				if (elems[i].innerHTML === existing) {
					elems[i].innerHTML = update;
					elems[i].id = id;
					break;
				}
			}
			throw new Error("Existing element was now found!"); // Throw an error
		} catch (error2) {
			console.log(error2.message + "\nCreating new text node.");
			newElement = document.createTextNode(update); // Creating new text node if id and existing params are not found
		}
	} finally {
		if (newElement !== undefined) {
			console.log("Returning new text node");
			return newElement;
		} else {
			console.log("Modified element \"" + (id || existing) + "\" with innerHTML \"" + update + "\".");
		}
	}
}
