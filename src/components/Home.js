import Carousel from './Carousel';
import FeatureProduct from './FeatureProduct';
import Herosection from './Herosection';
import Service from './Service';
import Trusted from './Trusted';
const Home = () => {
  const data={
    name:"E-Store",
  }
  return (
    <>
      <Carousel />
      <Herosection myData={data}/>
      <FeatureProduct/>
      <Service/>
      <Trusted/>
    </>
  )
}

export default Home
