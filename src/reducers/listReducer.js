import { CONSTANTS } from '../actions/actions'

let listID = `list-${2}`
let cardID = `card-${5}`

const initialState = [
    {
        title: 'Episode 1',
        id: `list-${0}`,
        cards: [
            {
                id:`card-${0}`,
                text: 'Hello my friend'
            },
            {
                id:`card-${1}`,
                text: 'you are my best friend'
            }
        ]
    },
    {
        title: 'Episode 2',
        id: `list-${1}`,
        cards: [
            {
                id:`card-${2}`,
                text: 'Hello my friend'
            },
            {
                id:`card-${3}`,
                text: 'you are my best friend'
            },
            {
                id:`card-${4}`,
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
                id: `list-${listID}`,
            }
            listID += 1
            return [...state, newList]
        
        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: actions.payload.text,
                id: `card-${cardID}`
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
        }

        case CONSTANTS.DRAG_HAPPENED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableID,
                type
            } = actions.payload

            const newState = [...state]

            //dragging list aorund
            if(type === "list"){
                const list = newState.splice(droppableIndexStart, 1);
                newState.splice( droppableIndexEnd, 0, ...list)
                return newState
            }

            //in the same list
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list => droppableIdStart === list.id)
                const card = list.cards.splice(droppableIndexStart, 1)
                list.cards.splice(droppableIndexEnd, 0, ...card)
            }

            //other list
            if(droppableIdStart !== droppableIdEnd){
                //find the liat where drag happened
                const listStart = state.find(list=> droppableIdStart === list.id)
                //pull out the ccard from the list
                const card = listStart.cards.splice(droppableIndexStart,1)
                //find the list where to drag end
                const listEnd = state.find(list=> droppableIdEnd === list.id)
                //put the card in the new list
                listEnd.cards.splice(droppableIndexEnd, 0, ...card)
            }
            
            return newState

        default:
            return state
    }
}

export default listReducer