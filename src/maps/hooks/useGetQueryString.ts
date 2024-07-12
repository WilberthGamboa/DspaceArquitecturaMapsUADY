import axios from "axios";
import queryString from "query-string";
import { useEffect, useState } from "react"
import { Coordinates } from "../interface/coordinates.interface";
import { Metadata } from "../interface/metadata.interface";

export const useGetQueryString = () =>{
    const [coordinates, setCoordinates] = useState<Coordinates>({
        latitude:undefined,
        longitude:undefined
    })
    const [metadata, setMetadata] = useState<Metadata[]>()
    const [search, setsearch] = useState('')
    useEffect(() => {
        const parsed:any = queryString.parse(location.search);
        console.log(parsed);
        setsearch(parsed.lugar)
        fetchDataRepository(parsed.lugar)
    }, [ ])

const fetchDataRepository = async (nombreItem:string) => {
    const url = `${import.meta.env.VITE_URL_REPOSITORY}/rest/items/find-by-metadata-field`
    const datos = {
        key: 'arq.Nombre',
        value: nombreItem
      };
      const opciones = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Cookie': `JSESSIONID=${import.meta.env.VITE_SESION_ID}`
        },
        data: datos
      };
      try {
        const respuesta = await axios.post(url, datos, opciones);
      
        if (respuesta.status === 200) {
            const urlLink = respuesta.data[0].link
            const urlLinkCompleta =  `${import.meta.env.VITE_URL_REPOSITORY}${urlLink}/metadata`
            const response = await axios.get(urlLinkCompleta)
            if (response.status===200){
                const data = response.data
                let latitud;
                let longitud
                
                console.log(data)
                for (const iterator of data) {
                    
                    if (iterator.key==='arq.Latitud') {
                       latitud = iterator.value
                    }
                    if (iterator.key==='arq.Longitud') {
                        longitud = iterator.value
                    }
                   
                }
                const filteredData = data.filter((dataActual:Metadata) =>{
                   return dataActual.schema!="dc"
                }).map((dataActual:Metadata)=>{
                        dataActual.key = dataActual.key.slice(4,1000)
                        return dataActual
                })
                console.log({filteredData})


                setCoordinates({
                    latitude:latitud,
                    longitude:longitud
                })

                setMetadata(filteredData)
            }

        }
      } catch (error) {
        console.error("Error:", error);
      }
}
    return{
        coordinates,
        metadata,
        search
    }
}