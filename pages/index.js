import ImageSlider from '../components/common/Carousel';
import SearchBox from '../components/common/SearchBox';
import Deals from '../components/desktop/Deals'
import Popular from '../components/desktop/Popular';
import classes from './Home.module.css'
import Footer from '../components/layout/footer/Footer'
const Home = ({id1, id2, id3, images}) =>{
  return (
    <>
    <section className={classes.home}>
      <HomeHeader></HomeHeader>
      <Deals products={id1.products} className={classes.deals} title={'Deals of the Day'}></Deals>
      <ImageSlider images={images}></ImageSlider>
      <Deals products={id2.products} className={classes.deals} title={'Trending'}></Deals>
      <Popular></Popular>
      <Deals products={id3.products} className={classes.deals} title={'Fashion Vista'}></Deals>
    </section>
    <Footer></Footer>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
    </>
  )
}

const HomeHeader = () => {
  return (
    <section>
      <div className={`${classes.header} px-2`}>
        <h1 className="pt-2">Products for every one</h1>
        <div className="pb-4">Search for your favorite products and websites</div>
        <SearchBox className="only-desktop mx-auto w-50" />
        <SearchBox className="only-mobile " />
        <div className={classes.example}>Exapmples: Like, laptops, shirts, shoes etc</div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch('http://localhost:5000/home');
  const data1 = await res.json();
  var id1;
  var id2;
  var id3;
  var id4;
  for (var i=0; i<data1.length; i++) {
    switch(data1[i].id){
      case '1':
        id1=data1[i];
      case '2':
        id2=data1[i];
      case '3':
        id3=data1[i];
      case '4':
        id4=data1[i];
    }

  }
  return { props: { id1: id1, id2: id2, id3: id3, images:id4.images} }
}
export default Home;