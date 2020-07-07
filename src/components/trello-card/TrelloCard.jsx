import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import { Draggable } from 'react-beautiful-dnd'

import './trelloCard.css'

const TrelloCard = ({ text, id, index }) => (
    <Draggable draggableId={String(id)} index={index}>
        {provided => (
            <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                <Card className='trello-card'>
                    <CardContent  style={{padding: '0px'}}> 
                        <Typography gutterBottom>
                            <div className='trello-text'>
                                {text}
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        )} 
    </Draggable>   
)

export default TrelloCard