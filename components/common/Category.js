const Dummy_Categories = [
    {
        title: 'All Categories',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'
    },
    {
        title: 'All Categories',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'
    },
    {
        title: 'All Categories',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'
    },
    {
        title: 'All Categories',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'
    },
    {
        title: 'All Categories',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'
    },
    {
        title: 'All Categories',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'
    },
    {
        title: 'All Categories',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'
    },
    {
        title: 'All Categories',
        img: 'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'
    }
]

const Category = (props) => {
    
    return (
            <div className="category">
            {Dummy_Categories.map(category => (
                    <CategoryTile
                        title={category.title}
                        src={category.img} />
            ))}
            </div>
    )
}
export default Category;

const CategoryTile = (props) => {
    return (
        <div className="category-tile">
            <a href={'/productList'}>
                <img src={props.src} alt='Category Image' />
                <span>{props.title}</span>
            </a>
        </div>
    )
}