import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

import './trelloCard.css'

const TrelloCard = ({ text }) => (
    <Card className='trello-card'>
        <CardContent  style={{padding: '0px'}}> 
            <Typography gutterBottom>
                <div className='trello-text' >
                    {text}
                </div>
            </Typography>
        </CardContent>
    </Card>
)

export default TrelloCard