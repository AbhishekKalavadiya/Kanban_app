import React from 'react'
import TrelloCard from '../trello-card/TrelloCard'
import './trelloList.css'

const TrelloList = ({ title }) => (
    <div className='trello-list'>
        <h4>{title}</h4>
        <TrelloCard />
    </div>
)

export default TrelloList