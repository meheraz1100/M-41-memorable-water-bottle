import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    const {id, name, seller, price, img} = bottle;
    // console.log(bottle)
    return (
        <div className="bottle">
            <h3>Bottle name: {name}</h3>
            <p><small>Bottle ID: {id}</small></p>
            <p>Bottle Seller: {seller}</p>
            <img src={img} alt="" />
            <h4>Price: ${price}</h4>
            <button onClick={() => handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;