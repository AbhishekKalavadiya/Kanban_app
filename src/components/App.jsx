import React, { Component } from 'react'
import TrelloList from './trello-list/TrelloList'
import { connect } from 'react-redux'
import TrelloActionsButton from '../components/trello-button/TrelloActionsButton'
import { DragDropContext } from 'react-beautiful-dnd'
import { sort } from '../actions/listActions'

import './app.css'

class App extends Component {

	onDragEnd = result => {
		const { destination, source, draggableID } = result

		if(!destination) {
			return;
		}
		
			this.props.sort(
				source.droppableId,
				destination.droppableId,
				source.index,
				destination.index,
				draggableID,
			)

	}
		
		render() {

			const { lists } = this.props;
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
					<div className="app"> 
							<h1>Kanban App</h1>
							<div className='list-item'>
								{
									lists.map(list => <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} /> )
								}
						
								<TrelloActionsButton list />
							</div>
					</div>
			</DragDropContext>
			)
		}
	}

const mapStateToProps = ({ lists }) => ({
	lists: lists
})

const mapDispatchToProps = dispatch => ({
	sort: (
			droppableIdStart,
			droppableIdEnd,
			droppableIndexStart,
			droppableIndexEnd,
			draggableID
			) => dispatch(sort (
				droppableIdStart,
				droppableIdEnd,
				droppableIndexStart,
				droppableIndexEnd,
				draggableID
			))

})

export default connect(mapStateToProps, mapDispatchToProps)(App)