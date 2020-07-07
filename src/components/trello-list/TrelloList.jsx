import React from 'react'
import TrelloCard from '../trello-card/TrelloCard'
import TrelloActionsButton from '../trello-button/TrelloActionsButton'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const ListContainer = styled.div`
    background-color: #dfe3e6;
    border-radius: 3;
    width: 300px;
    height: 100%;
    margin-right: 8px;
`
const ListTitle = styled.div`
    padding-left: 15px;
`

const TrelloList = ({ title, cards, listID, index }) => (
    <Draggable draggableId={String(listID)} index={index}>
        {provided => 
            <ListContainer {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                <Droppable droppableId={String(listID)} type="card">
                    {provided => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            <ListTitle>
                                <h4>{title}</h4>
                            </ListTitle>
                            {
                                cards.map((card, index) => <TrelloCard key={card.id} index={index} text={card.text} id={card.id}/>)
                            }
                            {provided.placeholder} 
                            <TrelloActionsButton listID={listID} />
                        </div>    
                    )} 
                </Droppable>
            </ListContainer>
        }
    </Draggable>
    
)

export default TrelloList