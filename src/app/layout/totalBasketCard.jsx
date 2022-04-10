const TotalBasketCard = ({allSum}) => {
    return (
        <div className='content-total'>
            <div className='total'>
                <div>ИТОГО</div>
                <div>₽ {allSum}</div>
            </div>
            <div className='registration'>
            <button className='registration-btn'>Перейти к оформлению</button>
            </div>
        </div>
    )
}

export default TotalBasketCard