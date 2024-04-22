import { Coordinates } from "../interface/coordinates.interface"


export const Map: React.FC<{coordsOrigin:Coordinates,coordsDestination:Coordinates}> = ({coordsOrigin,coordsDestination}) => {
  return (
    <div className='card mx-auto w-3/4 h-auto p-2 '>
    <iframe 
       width="100%"
       height="600px"
       src={`https://www.google.com/maps/embed/v1/directions?key=${import.meta.env.VITE_APIMAPS}&origin=${coordsOrigin.latitude},${coordsOrigin.longitude}&destination=${coordsDestination.latitude},${coordsDestination.longitude}&avoid=tolls|highways`}
       allowFullScreen
     ></iframe>
    </div>
  )
}
