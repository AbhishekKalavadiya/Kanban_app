import React, { useState } from 'react'
import Icon from '@material-ui/core/Icon'
import TextareaAutosize from 'react-textarea-autosize'
import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { addList, addCard } from '../../actions/actions'
import './trelloActionButton.css'

const TrelloActionsButton = ({ list, addList, listID, addCard }) => {

    const [formOpen, setFormOpen] = useState(false)
    const [text, setText] = useState('')
    
    const renderActionButton = () => {

        const buttonText = list ? 'Add another List' : "Add another card"
        
        return (
            <div className='trello-button' onClick={ () => setFormOpen(true) } >
                <div className={`${list? 'list' : 'card'}-button`}>
                    <Icon>add</Icon>
                    <span>{buttonText}</span>
                </div>
            </div>    
        )
    }
    
    const handleAddCard = () => {
        addCard(text, listID)
        setText('')
    }

    const handleAddList = () => {
        addList(text)
        setText('')
    }


    const renderForm = () => {

        const placeholder = list ? 'Enter List title...' : 'Enter title for Card...'
        const buttonTitle = list ? "Add List" : 'Add Card'
        

        return (
            <div>
                <Card className='card-textarea'>
                    <TextareaAutosize  
                        placeholder={placeholder} 
                        autoFocus 
                        value={text} 
                        onBlur={()=>setFormOpen(false)}
                        onChange={(e)=>setText(e.target.value)} 
                        className='textarea'
                    />
                </Card>
                <div className='font-button-group'>
                    <Button  
                        onMouseDown={list ?handleAddList :handleAddCard }
                        style={{color:"white", backgroundColor:"#5aac44", marginLeft: "8px"}} 
                        variant='contained' 
                    >
                        {buttonTitle}{" "}
                    </Button>
                    <Icon style={{marginLeft:"8px", cursor:"pointer"}} >close</Icon>
                </div>
                 
            </div>
        )

      
    }

    return formOpen ?renderForm() : renderActionButton()

}

const mapDispatchToProps = dispatch => ({
    addList: title => dispatch(addList(title)),
    addCard: (text, listID) => dispatch(addCard(text, listID)) 
})

export default connect(null, mapDispatchToProps)(TrelloActionsButton)