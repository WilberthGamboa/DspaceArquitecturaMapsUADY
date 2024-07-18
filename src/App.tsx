import './index.css'
import { useGetQueryString } from './maps/hooks/useGetQueryString';
import { useGeolocated } from "react-geolocated";
import { useMountEffect } from 'primereact/hooks';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Coordinates } from './maps/interface/coordinates.interface';
import { useEffect, useRef, useState } from 'react';
import { DataTableMaps } from './maps/components/DataTableMaps';
import { Map } from './maps/components/Map';
import { Messages } from 'primereact/messages';
function App() {
  const {coordinates,metadata,search} = useGetQueryString()
  const { coords, isGeolocationEnabled } =
  useGeolocated({
      positionOptions: {
          enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
  });
  const [coordsOrigin, setcoordsOrigin] = useState<Coordinates>({
    latitude:'20.9666472',
    longitude:'-89.6242319'
 
  })
 
    useEffect(() => {
      if (coords) {
        setcoordsOrigin({
          latitude:coords.latitude.toString(),
          longitude:coords.longitude.toString()
        }) 
      }
     
      
    },[coords] )
    useEffect(() => {
      if (!isGeolocationEnabled) {
       
        msgs.current?.show({ id: '1', sticky: true, severity: 'error', summary: 'Error', detail: 'Favor de otorgar permisos de ubicación', closable: false });
      }else{
        msgs.current?.clear();
      }
      
    }, [isGeolocationEnabled])
   
    useEffect(() => {
      window.onload = function() {
        const element:any = document.querySelector('.p-datatable-wrapper');
    
        if (element) {
            
            element.style.overflow = 'hidden';
        } else {
            console.error('Elemento no encontrado');
        }
    
        const tableElement:any = document.querySelector('.p-datatable-table');
    
        if (tableElement) {
            tableElement.style.minWidth = ''; // Elimina la propiedad min-width
        } else {
            console.error('Elemento de tabla no encontrado');
        }
    
    };
    
      
    }, [])
    
    const msgs = useRef<Messages>(null);

    useMountEffect(() => {
      msgs.current?.clear();
        
    });
   
  return (
    <>
      <div className='container mx-auto'>
      <h1 className="text-5xl font-extrabold text-gray-800 mx-auto w-3/4 text-center m-3">{search}</h1>
      <Messages ref={msgs} />
      <Map coordsOrigin={coordsOrigin} coordsDestination={coordinates}></Map>
      <DataTableMaps metadata={metadata} ></DataTableMaps>
      </div>
     

    </>
  )
}

export default App
