import './Card.css';
const Card = ({title,price,description,image}) => {
    return (
        <div className="card__main">
            <img className="card-img" src={`https://imagedelivery.net/95QNzrEeP7RU5l5WdbyrKw/${image}/shopitem`} alt={"No Image."}/>
            <h2>{title}</h2>
            <h3>{price}</h3>
            <h5>{description}</h5>
        </div>
    );
};

export default Card;