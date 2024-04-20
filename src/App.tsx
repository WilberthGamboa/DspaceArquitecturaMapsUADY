import './index.css'
import { useGetQueryString } from './maps/hooks/useGetQueryString';
import { useGeolocated } from "react-geolocated";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import "primereact/resources/themes/lara-light-cyan/theme.css";
function App() {
  const {coordinates,metadata,search} = useGetQueryString()
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
  return (
    <>
      <div className='container '>
      <h1 className="text-5xl font-extrabold text-gray-800 mx-auto w-3/4 text-center m-3">{search}</h1>

      <div className=' mx-auto w-3/4 h-auto p-2 card'>
      <iframe 
         width="100%"
         height="600px"
         src={`https://www.google.com/maps/embed/v1/directions?key=${import.meta.env.VITE_APIMAPS}&origin=${coords?.latitude},${coords?.longitude}&destination=${coordinates.latitude},${coordinates.longitude}&avoid=tolls|highways`}
         allowFullScreen
       ></iframe>
      </div>
      </div>
      <div className="card w-3/4 mx-auto">
            <DataTable value={metadata} tableStyle={{ minWidth: '50rem' }}>
                <Column field="key" header="Categoría"></Column>
                <Column field="value" header="Valor" style={{}}></Column> 
            </DataTable>
        </div>

    </>
  )
}

export default App
