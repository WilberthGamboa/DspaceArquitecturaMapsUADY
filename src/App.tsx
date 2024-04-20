import './index.css'
import GoogleMapReact from 'google-map-react';
import { useGetQueryString } from './maps/hooks/useGetQueryString';
import { useGeolocated } from "react-geolocated";
function App() {
  const {coordinates} = useGetQueryString()
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  });
   console.log(coords)
   console.log(isGeolocationAvailable)
   console.log(isGeolocationEnabled)
 console.log({coordinates})
/*
const apiKey = 'AIzaSyDal8gWT9yatkSmST52fylAj0QGtf51tD4'; // Replace with your Google Maps API key
    const url = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}
    const url = `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${this.latitudCliente},${this.longitudCliente}&destination=${latitud},${longitud}&avoid=tolls|highways`;
    */
  return (
    <>
      <h1  className="text-3xl font-bold underline">HOLA </h1>
     
      <iframe
          width="100%"
          height="400"
          src={`https://www.google.com/maps/embed/v1/directions?key=${import.meta.env.VITE_APIMAPS}&origin=${coords?.latitude},${coords?.longitude}&destination=${coordinates.latitude},${coordinates.longitude}&avoid=tolls|highways`}
         
          allowFullScreen
        ></iframe>
    </>
  )
}

export default App
