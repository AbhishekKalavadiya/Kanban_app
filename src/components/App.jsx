import React, { Component } from 'react'
import TrelloList from './trello-list/TrelloList'
import { connect } from 'react-redux'
import TrelloActionsButton from '../components/trello-button/TrelloActionsButton'

import './app.css'

class App extends Component {
		
		render() {

			const { lists } = this.props;
		return (
				<div className="app"> 
						<h1>Kanban App</h1>
						<div className='list-item'>
							{
								lists.map(list => <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} /> )
							}
					
							<TrelloActionsButton list />
						</div>
				</div>
			)
		}
	}

const mapStateToProps = ({ lists }) => ({
	lists: lists
})

export default connect(mapStateToProps)(App)