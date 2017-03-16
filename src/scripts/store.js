import Backbone from 'backbone'

var STORE = Object.assign({},Backbone.Events,{
	data:{
		strength: 0,
		knowledge: 0,
		cleaning: 0,
		health: 0,
		choresCompleted: 0
	},

	set: function(obj){
		this.data[obj] += 1
		this.data.choresCompleted += 1
		this.data = Object.assign(this.data, this.data[obj], this.data.choresCompleted)
		this.trigger('dataUpdated')
		
	}
})

export default STORE