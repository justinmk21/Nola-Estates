import { Routes, Route } from 'react-router-dom'
import { useState, useEffect, createContext } from "react"
import axios from 'axios'
import Footer from './AppComponents/Footer'
import InfoPage from './AppComponents/InfoPage'
import LandingPage from './AppComponents/LandingPage'
import ListingPage from './AppComponents/ListingPage'
import Testimonials from './AppComponents/Testimonials'
import Contact from './AppComponents/Contact'
import HeaderSection from './AppComponents/HeaderSection'
import Properties from './AppComponents/Properties'
import PropertyPreview from './AppComponents/PropertyPreview'
import SimilarProperties from './AppComponents/SimilarPropertis'
import PropertyInfo from './AppComponents/PropertySectionInfo'
import PropertyImage from './AppComponents/PropertyImage'
import ForestHouse from './AppComponents/images/ForestHouse.jpg'
import CityView from './AppComponents/images/Outdoor view.jpg'
import './App.css'

export const UserContext = createContext();

function App() {

  const [listings, setListings] = useState([]);

  // Fetch property data
  useEffect(() => {
      const fetchListings = async () => {
          try {
              const responce = await axios.get('https://real-estate-api-ti97.onrender.com/nolalisting/properties/');
              console.log('Fetched data:', responce.data);
              setListings(responce.data)
          } catch (error) {
              console.error('Error fetching listings:', error);
          }
      };

      fetchListings();
  },[])

  useEffect(() => {
      console.log('Listings', listings);
  },[listings])

  return (
    <UserContext.Provider value={listings}>
      <HeaderSection/>
      <Routes>
        <Route path='/Nola-Estates/' element={
          <>
            <LandingPage/>
            <InfoPage/>
            <PropertyImage
              img={ForestHouse}
              />
            <PropertyPreview/>
            <PropertyInfo/>
            <PropertyImage
              img={CityView}
              />
            <Testimonials/>
          </>
        }/>
        <Route path='/listing/:id' element={
          <>
          <ListingPage/>
          <Contact/>
          <SimilarProperties/>
          </>
        }/>
        <Route
            path='/listings' element={
              <>
              <Properties/>
              </>
            }
          />
      </Routes>
      <Footer/>
    </UserContext.Provider>
  )
}

export default App
