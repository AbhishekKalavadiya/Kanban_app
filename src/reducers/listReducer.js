import { CONSTANTS } from '../actions/actions'

let listID = 2
let cardID = 3

const initialState = [
    {
        title: 'Episode 1',
        id: '0',
        cards: [
            {
                id:0,
                text: 'Hello my friend'
            },
            {
                id:1,
                text: 'you are my best friend'
            }
        ]
    },
    {
        title: 'Episode 2',
        id: '1',
        cards: [
            {
                id:0,
                text: 'Hello my friend'
            },
            {
                id:1,
                text: 'you are my best friend'
            },
            {
                id:2,
                text: 'working in the kanban appp'
            }
        ]
    }
]

const listReducer = (state = initialState, actions)=> {
    switch (actions.type) {
        case CONSTANTS.ADD_LIST: 
            const newList = {
                title: actions.payload,
                cards:[],
                id: listID,
            }
            listID += 1
            return [...state, newList]
        
        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: actions.payload.text,
                id: cardID
            }
            cardID += 1;
            const newState = state.map(list => {
                if(list.id === actions.payload.listID){
                    return {
                        ...list,
                        cards: [...list.cards, newCard]
                    }
                }else { return list }
            }) 
            return newState   
            
        default:
            return state
    }
}

export default listReducer