/*
 * protowrap.js
 * author: mafumafuultu
 * License: MIT
 */

/**
 * extends prototype wrapper
 * 
 * @param {String} type constructor.name
 * @param {Object} prop propert
 * @param {Object} proto Prototpe object
 */
const $$ = (type = '', prop = {}, proto = {}) => (o => (Object.defineProperties(o[type].prototype, proto),o))({
	[type] : function(id) {
		return this.$(id);
	},
	$ (id) {
		return Object.create(this[type].prototype, {
			id : {get () {return id;}},
			...prop
		});
	}
});