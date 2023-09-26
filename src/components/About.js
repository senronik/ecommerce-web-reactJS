import { useProductcontext } from '../context/Productcontext'
import Herosection from './Herosection'

const About = () => {
  const {myName}=useProductcontext();
  const data={
    name:"Ecommerce-Store",
  }
  return (
    <>
      {myName}
      <Herosection myData={data}/>
    </>
  )
}

export default About
