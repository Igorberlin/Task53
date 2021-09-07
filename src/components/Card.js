import Counter from "./Counter";
export default function Card({title, author, cover}) {
    return (
        <div className='card'>
            <p>{title}</p>
            <img src={cover} alt={title} />
            <p>{author}</p>
            <Counter/>
        </div>
    )
}