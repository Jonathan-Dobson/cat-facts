import React from 'react';
import { withCat } from '../Context'


const Home = (props) => {
    // console.log(props.facts.all[0]);
    const getAll = () => {
        props.getRandomFact()
        props.getRandomPicture()
    }

    const saveQuote = () => {
        let savedQuotes = JSON.parse(localStorage.getItem("facts"))
        savedQuotes = savedQuotes === null ? [] : savedQuotes
        const newSavedQuotes = [props.fact, ...savedQuotes]
        localStorage.setItem("facts", JSON.stringify(newSavedQuotes))
    }

    const saveImage = () => {
        // get the array from local storage
        let savedImages = JSON.parse(localStorage.getItem("cats"))
        // console.log(savedImages) 
        // check if local storage is null (empty) and if so set as array
        savedImages = savedImages === null ? [] : savedImages
        // add the image to new array
        const newSavedImages = [props.image.url , ...savedImages]
        // save the new array to local storage
        localStorage.setItem("cats", JSON.stringify(newSavedImages))
    }
    
    return (
        <div>
            Home
            <div>Fact result</div>
            <button onClick={getAll} >Meow Now</button>
            {props.image.url && 
            <>
                <div>
                    {props.fact}
                    <button onClick={ saveQuote }>Save to Favorite Quotes</button>
                </div>
                <img src={props.image.url} alt='catimage' width="450" />
                <div>
                    <button onClick={ saveImage }>Save to Favorite Images</button>
                </div>
            </>
            }
        </div>
    )
}

export default withCat(Home)