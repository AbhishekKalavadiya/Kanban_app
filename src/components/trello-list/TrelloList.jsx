import React from 'react'
import TrelloCard from '../trello-card/TrelloCard'
import TrelloActionsButton from '../trello-button/TrelloActionsButton'
import { Droppable } from 'react-beautiful-dnd'
import './trelloList.css'

const TrelloList = ({ title, cards, listID }) => (
    <Droppable droppableId={String(listID)}>
        {provided => (
            <div {...provided.droppableProps} ref={provided.innerRef} className='trello-list'>
                <div className='trello-title'>
                    <h4>{title}</h4>
                </div>
                {
                    cards.map((card, index) => <TrelloCard key={card.id} index={index} text={card.text} id={card.id}/>)
                }
                <TrelloActionsButton listID={listID} />
                {provided.placeholder}
            </div>
        )} 
    </Droppable>
)

export default TrelloList