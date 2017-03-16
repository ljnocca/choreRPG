import React from 'react'
import STORE from '../store'

var ChoresView = React.createClass({
	getInitialState: function(){
		return STORE.data
	},
	//componentwill mount before the 1st render
	//if there is a collection, we can fetch it here
	//we also subscribe to our store here. any time the store's stateful info changes,
	//we react by setting our state.
	//in this scenario, when we click one of the buttons, we call set on the store,
	//which changes the property in the store corresponding to the button clicked.
	componentWillMount: function() {
		STORE.on('dataUpdated', ()=>{
			this.setState(STORE.data)
		})
	},
	

	//as soon as the store changes, we immediately reflect that change by changing
	//the component on the view which transmits its state down to its first child.

	//stats is a variable you are declaring and assigning to the newest store data
	render: function(){
		return (
			<div className = 'chore'>
				<Buttons />
				<Stats stats={STORE.data} />
			</div>
		)
	}
	
})

var Buttons = React.createClass({
	render: function(){
		return(
			<div className='buttons'>
				<ul>

				<li><button onClick={function() {{STORE.set('strength')}}}> Lift Some Weights! </button></li>
				<li><button onClick={function() {{STORE.set('knowledge')}}}> Read a Book! </button></li>
				<li><button onClick={function() {{STORE.set('cleaning')}}}> Clean your Room! </button></li>
				<li><button onClick={function() {{STORE.set('health')}}}> Eat Your Vitamins! </button></li>
				</ul>
			</div>
		)
	}

})

var Stats = React.createClass({
	render: function(){
		return(
			<div className='statistics'>
				<p>Strength: {this.props.stats.strength}</p>
				<p>Knowledge: {this.props.stats.knowledge}</p>
				<p>Cleanliness: {this.props.stats.cleaning}</p>
				<p>Healthiness: {this.props.stats.health}</p>
				<p>Total Errands Complete: {this.props.stats.choresCompleted}</p>
			</div>
		)
	}

})
		

export default ChoresView