import "./Card.css"
const myCard = (props) =>{
    return (
        <div id="card_holder">
            <h1>Test</h1>
            <p>{props.name}</p>
            <p>{props.age}</p>
        </div>
    )
}

export default myCard