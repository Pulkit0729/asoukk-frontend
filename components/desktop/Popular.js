import classes from './Popular.module.css';
const Stores=[
    {name: 'Amazon', image:'./amazon.png', link:'amazon.in'},
    {name: 'Flipkart', image:'./flipkart.png', link:'flipkart.com'},
    {name: 'Myntra', image:'./myntra.png', link:'myntra.com'},
    {name: 'Ajio', image:'./ajio.png', link:'ajio.com'},
    {name: 'TataCliq', image:'./tatacliq.png', link:'tatacliq.com'},
    {name: 'Snapdeal', image:'./snapdeal.png', link:'snapdeal.com'},

]
const Popular = () =>{
    return(
        <div className="bg-white mt-2 ">
            <div className="px-5 pt-5 border-bottom">
            <h3>Popular Stores</h3>
            </div>
            <div className='row'>
                {Stores.map(e=>{
                    return(<Store image={e.image} name={e.name} link={e.link}/>)
                })}
            </div>
        </div>
    )
};

const Store = ({image, name, link}) =>{
    return(
        <div className={`${classes.store} col-lg-2 col-sm-6 col-md-3 col-6 p-3 text-center`} >
                    <a target='_blank' href={`https://www.${link}`}><div className="border text-center p-2">
                        <img src={image}></img>
                        <p>Visit the website</p>
                    </div></a>
                    <span>{name}</span>
                    
                </div>
    )
}
export default Popular;