import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const CardContainer = styled.div`
    margin: 8px;
`

const TrelloCard = ({ text, id, index }) => (
    <Draggable draggableId={String(id)} index={index}>
        {provided => (
            <CardContainer {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
              
                    <Card >
                        <CardContent    > 
                            <Typography gutterBottom>
                                {/* <div className='trello-text'> */}
                                    {text}
                                {/* </div> */}
                            </Typography>
                        </CardContent>
                    </Card>

            </CardContainer>
        )} 
    </Draggable>   
)

export default TrelloCard