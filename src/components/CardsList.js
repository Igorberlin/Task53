import Card from "./Card";
const CardList= ({cards})=>{
    return (
        <div className='cardList'>
            {cards.map((card, index) =>
                <Card
                    key={index}
                    id={card.id}
                    title={card.title}
                    author={card.author}
                    cover={card.cover}
                />)}  
        </div>
    )
}
export default CardList;