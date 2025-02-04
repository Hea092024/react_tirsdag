import "./Card.css"
const myCard = (props) =>{
    return (
        <div id="card_holder">
            <h1>{props.tittel}</h1>
            <p>{props.id}</p>
            <p>{props.pris}</p>
        </div>
    )
}

export default myCard