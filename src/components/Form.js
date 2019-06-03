import React, {Component} from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            name: '',
            work: '', 
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }    

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
       
    }

    render(){
        const { name, work } = this.state;
        return(
            <form>
                <lable>Name</lable>
                <input 
                    type='text'
                    name='name'
                    value={name}
                    onChange={this.handleChange} />
                <lable>Work</lable>
                <input 
                    type='text'
                    name='work'
                    value={work}
                    onChange={this.handleChange} />
                   
                <input type="button" value="Submit" onClick={this.submitForm} />

            </form>
        );
    }
}

export default Form