import React from 'react'
import TrelloCard from '../trello-card/TrelloCard'
import TrelloActionsButton from '../trello-button/TrelloActionsButton'
import './trelloList.css'

const TrelloList = ({ title, cards, listID }) => (
    <div className='trello-list'>
        <div className='trello-title'>
            <h4>{title}</h4>
        </div>
        {
            cards.map(card => <TrelloCard key={card.id} text={card.text} />)
        }
        <TrelloActionsButton listID={listID} />
    </div>
)

export default TrelloList