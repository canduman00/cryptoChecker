function Coin({name, icon, symbol, price, priceChange1h, priceChange1d, priceChange1w}){

    const profit = (percent) => {
        return percent < 0 ? {color:"red"} : {color:"#00C853"}
    }

    return (
        <>
        <div className="coin-section">
            <img src={icon} alt="" style={{width:"50px", aspectRatio:"1"}}/>
            <h2>{name} - {symbol}</h2>
            <h2>{price.toLocaleString("en-US", {style:"currency", currency:"USD", minimumFractionDigits: 5})}</h2>
            
            <div className="priceChange">
                <div className="one-hour change-section">
                    <p>1h %</p>
                    <p style={profit(priceChange1h)}>{priceChange1h}%</p>
                </div>
                <div className="one-day change-section">
                    <p>24h %</p>
                    <p style={profit(priceChange1d)}>{priceChange1d}%</p>
                </div>
                <div className="one-week change-section">
                    <p>7d %</p>
                    <p style={profit(priceChange1w)}>{priceChange1w}%</p>
                </div>
            </div>
        </div>
        </>
    );
}

export default Coin;