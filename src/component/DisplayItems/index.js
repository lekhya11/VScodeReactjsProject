import "./index.css"

const DisplayItems = (props) => {
    const {Item} = props //getting the props 
    console.log(Item)
    return (
        <li>
            <h1 className="items">{Item}</h1> 
           
        </li>
    )
}

export default DisplayItems