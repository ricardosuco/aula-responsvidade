import './styles.css'

function Card({cover, title}) {
    return (
        <div className="container-card"
            style={{ backgroundImage: `url(${cover})`}} 
        >
        <div className="container-title">
            <h1>{title}</h1>
        </div>
        </div>
    )
}

export default Card