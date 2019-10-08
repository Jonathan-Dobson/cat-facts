import React from 'react';
import axios from 'axios';

// Context allows your app to manage state and share it directly with any
// component without the need to pass through all its parent components' props

// initialize context
const CatContext = React.createContext()


class CatProvider extends React.Component {
    constructor() {
        super()
        this.state = {
            facts: {},
            fact: '',
            image: {
                url: '',
                width: 0,
                height: 0
            }
        }
    }
    
    componentDidMount(){
        this.getFacts()
    }

    getFacts = () => {
        axios.get("getfacts")
            .then(response=>{
                console.log(response.data)
                this.setState({facts: response.data})
            },()=>console.log(this.state.facts))
            .catch(error=>console.log(error))
    }

    getRandomFact = () => {
        const num = Math.floor(Math.random()*this.state.facts.all.length)
        console.log(this.state.facts.all[num].text)
        this.setState({fact: this.state.facts.all[num].text})
    }

    getRandomPicture = () => {
        axios.get('https://api.thecatapi.com/v1/images/search')
            .then(response => {
                // console.log(response.data[0].url)
                this.setState({image: response.data[0]})
            })
            .catch(error=>console.log(error))
    }
    
    render() {
        console.log(this.state.facts)

        return (
            <CatContext.Provider value={{
                getRandomFact: this.getRandomFact,
                getRandomPicture: this.getRandomPicture,
                fact: this.state.fact,
                image: this.state.image
            }}>
                {this.props.children}
            </CatContext.Provider>
        )
    }
}

export const withCat = C => props => (
    <CatContext.Consumer>
        {value => <C {...value} {...props}/>} 
        {/* These are the children because they are inside of CatContext.Consumer  */}
    </CatContext.Consumer>
)


// children 
//



export default CatProvider
