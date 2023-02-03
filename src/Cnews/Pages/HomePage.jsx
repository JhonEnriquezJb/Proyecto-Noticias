import { Banner } from "../Banners/Banner"
import { CallApi } from "../components/CallApi/CallApi"
import { Footer } from "../components/Footer/Footer"

export const HomePage = () => {
  return (
    <>
       
        <CallApi/>
        <Banner src={"/assets/banners/banner02.jpg"}/>
        <Footer/>
    </>
    
  )
}
