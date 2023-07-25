import {Component} from "react"
import {v4 as uuidv4} from 'uuid'
import "./App.css"

import DisplayItems from "./component/DisplayItems"

const dataList = [
  {
    id: uuidv4(),
    Topic: "Props and State",
    isCompleted: false
  },
   {
    id: uuidv4(),
    Topic: "class component and function component",
    isCompleted: false
  },
  {
    id: uuidv4(),
    Topic: "Adding new data to the list",
    isCompleted: false
  }, 
  {
    id: uuidv4(),
    Topic: "Props",
    isCompleted: false
  },

]

class BTSWorld extends Component {
  state = {
    listItems : dataList,  //taking the list in the state
    inputValue : "" //to store the input values entered by user
  }

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value}) // updating the input values on change
  }

  onClicStarImage = (id) => {
    const {listItems} = this.state
    // iterating in each object in te list and using if statemnet to check the each.id is same as id and updating the isComplete value.
    const updatedList = listItems.map(each => {
      if (each.id === id) {
        return {...each, isCompleted: !each.isCompleted}
      }
      //return the rest as it is 
      return each
     })

     this.setState({listItems:updatedList})
  }
  
  onAddButton = () => {
    const {inputValue} = this.state
    const newDetails = {
      id: uuidv4(),
      Topic:inputValue,
      isCompleted:false
    }

    this.setState(prevState => ({listItems: [...prevState.listItems, newDetails], //adding new date to the list using spread operator
      inputValue:" " //clear the input filed after adding the values
    }))
    
  }

  deleteList = (id) => {
     const {listItems} = this.state
     //console.log(id)
     //filter method give condition
     const filterList = listItems.filter(each => each.id !== id)
     this.setState({listItems:filterList})
  }

  render () {
    const {listItems,inputValue} = this.state
    return (
      <div className="ulElement">
        <h1> Learning Plan in the  react concept</h1>
        <div>
        <input type="text" 
        value={inputValue} //setting the input filed values based on the state value
        className="inputElement" 
        onChange={this.onChangeInput} 
        />
        <button className="button" onClick={this.onAddButton}>ADD</button>
        </div>
        { listItems.length === 0 ? <p>You have not planned yet </p> :
        <ul >
          {listItems.map(each => 
            //passing the props to the component
            <DisplayItems Item={each} key={each} onClicStarImage={this.onClicStarImage} deleteList={this.deleteList}/>)}
        </ul>
       }
      </div>
    )
  }
}

export default BTSWorld