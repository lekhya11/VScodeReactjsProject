import {Component} from "react"
import "./App.css"

import DisplayItems from "./component/DisplayItems"

const dataList = [
  "State","Props","Updating the state","Adding new date to the list","Changing the text based on the state or event"
]

class BTSWorld extends Component {
  state = {
    listItems : dataList,  //taking the list in the state
    inputValue : "" //to store the input values entered by user
  }

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value}) // updating the input values on change
  }
  
  onAddButton = () => {
    const {inputValue} = this.state
    this.setState(prevState => ({listItems: [...prevState.listItems, inputValue ], //adding new date to the list using spread operator
      inputValue:" " //clear the input filed after adding the values
    }))
    
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
        <ul >
          {listItems.map(each => 
            //passing the props to the component
            <DisplayItems Item={each} key={each} />)}
        </ul>
      </div>
    )
  }
}

export default BTSWorld