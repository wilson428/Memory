// Object inheritance primer: https://codeburst.io/javascript-inheritance-25fe61ab9f85

// the master object linking all unique ids to their Memories
const spine = {};

// Memory is the most primative unit. It presently takes two inherited subclasses: Neuron and Synapse
const Memory = function(type) {
	// id and type are immutable
	const _id = uuidv4();
	const _type = type;

	this._id = _id;
	this._type = _type;

	spine[this._id] = this;
	// console.log("I'm a new", this._type);
}

Memory.prototype.save = function() {
	// to do
	console.log(`Saving Memory of type ${ this._type } with id ${ this._id }`)
	console.log(spine[this._id])
}

// A Neuron contains information. It links to at least one synapse, often many
const Neuron = function() {
	Memory.call(this, "Neuron");
	// console.log("And my id is", this._id);
}

// A Synapse is a single relationship between two Neurons. The neurons to which it points may change over time
// Synapses are not directional. Any information about the nature of the connection is contained in interstitial Neurons

const Synapse = function(_nA, _nB) {
	Memory.call(this, "Synapse");
}

Neuron.prototype = Object.create(Memory.prototype);
Synapse.prototype = Object.create(Memory.prototype);


let n = new Neuron();
n.save();


// https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}
