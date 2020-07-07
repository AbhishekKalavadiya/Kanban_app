import React, { Component } from 'react'
import TrelloList from './trello-list/TrelloList'
import { connect } from 'react-redux'
import TrelloActionsButton from '../components/trello-button/TrelloActionsButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { sort } from '../actions/listActions'
import styled from 'styled-components'

const ListContainer = styled.div`
	display: flex;
	flex-direction: row;
`

class App extends Component {

	onDragEnd = result => {
		const { destination, source, draggableID, type } = result

		if(!destination) {
			return;
		}
		
			this.props.sort(
				source.droppableId,
				destination.droppableId,
				source.index,
				destination.index,
				draggableID,
				type
			)

	}
		
		render() {

			const { lists } = this.props;
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
				<h1>Kanban App</h1>
				<Droppable droppableId='all-lists' direction='horizontal' type='list'>
					{provided => 
						<ListContainer {...provided.droppableProps} ref={provided.innerRef}>
							{
								lists.map((list, index) => <TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} index={index}/> )
							}
							{provided.placeholder}
							<TrelloActionsButton list />
						</ListContainer>
					}
				</Droppable>
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
			draggableID,
			type
			) => dispatch(sort (
				droppableIdStart,
				droppableIdEnd,
				droppableIndexStart,
				droppableIndexEnd,
				draggableID,
				type
			))

})

export default connect(mapStateToProps, mapDispatchToProps)(App)