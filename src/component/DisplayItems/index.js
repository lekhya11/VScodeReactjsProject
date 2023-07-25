import "./index.css"

const DisplayItems = (props) => {
    const {Item,onClicStarImage,deleteList} = props //getting the props 
    const {Topic, isCompleted,id} = Item
    console.log(Item)

    const starImgUrl = isCompleted
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

    const ClickedStar = () => {
        onClicStarImage(id)
    }

    const onClickDelete = () => {
        deleteList(id)
    }

    return (
        <li>
            <h1 className="items">{Topic}</h1> 
            <div>
            <img src={starImgUrl} alt="star" onClick={ClickedStar} />     
            <button className="deleteButton" onClick ={onClickDelete}>
                <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete" />
            </button>
            </div>
        </li>
    )
}

export default DisplayItems