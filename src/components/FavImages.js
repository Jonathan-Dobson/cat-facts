import React from 'react';
import {Button} from 'primereact/button';


class FavImages extends React.Component {
    constructor(){
      super()
      this.state = {
          saved: JSON.parse(localStorage.getItem('cats')) || []
      }
    }

    deleteFav = (index) => {
      const updatedimgs = this.state.saved.filter((img,i) => index !== i )
      localStorage.setItem("cats", JSON.stringify(updatedimgs))
      this.setState({saved: updatedimgs})
    }

    mappedFavs = () => this.state.saved.map((cat,index)=>(
        <div>  
          <div className='fav-facts' key={index}>
            <img src={cat} alt={index} width="450" />
          </div>
            <Button onClick={()=>this.deleteFav(index)} icon='pi pi-trash' className='p-button-primary btn-del-img'/>
        </div>
        )
      )
     
    render(){
        return (
          <div className=''>
          {this.state.saved.length>0 ? this.mappedFavs() : <h1>No Favorites Saved Yet.</h1>}
        </div>
      )
    }
  }

export default FavImages