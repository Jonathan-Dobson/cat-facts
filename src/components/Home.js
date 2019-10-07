import React from 'react';
import { withCat } from '../Context';
import {Button} from 'primereact/button';
import {Growl} from 'primereact/growl';


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
        <>
            <Button className="p-button-primary" icon="pi pi-refresh" onClick={getAll} label="Meow Now!"></Button>
            {props.image.url && 
            <>
                <div className="fact-content">
                    {props.fact}
                </div>
                <div>

                <Button className="p-button-primary btn-save-quote" icon="pi pi-heart" onClick={ saveQuote } tooltip="Save this quote to favorites" />
                </div>
                <img src={props.image.url} alt='catimage' width="450" className="catimg"/>
                <div>
                    <Button className="p-button-primary btn-save-img" icon="pi pi-heart" onClick={ saveImage } tooltip="Save this picture to favorites" />
                </div>
            </>
            }
        </>
    )
}

export default withCat(Home)