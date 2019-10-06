import React from 'react'

class Facts extends React.Component {
  constructor(){
    super()
    this.state = {
      quotes: JSON.parse(localStorage.getItem("facts")) || []
    }
  }
  removeQuote = (index) => {
    // make a function that returns a boolean
    const updatedQuotes = this.state.quotes.filter((quote,i) => index !== i )
    // remove the fav quote from local storage
    localStorage.setItem("facts", JSON.stringify(updatedQuotes))
    // remove the fav quote from virtual DOM
    this.setState({quotes: updatedQuotes})
  }
  

  mappedFacts = () => this.state.quotes.map((quote,index)=><p key={index}>
    {quote}
    <button onClick={()=>this.removeQuote(index)}>Delete</button>
  </p>)

  render(){
    return (
      <div>
        Fav Facts
        {this.mappedFacts()}
      </div>
    )
  }
  }

export default Facts