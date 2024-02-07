
import useFetch from '../hooks/useFetch'
import { useEffect } from 'react'
import './styles/residentCard.css'

const ResidentCard = ({url}) => {
    //console.log(url)
    const [resident, getResident] = useFetch()
    
    useEffect(() => {
      getResident(url)
      
    }, [])
    //console.log(resident);
  return (
    <article className='resident'>
        <figure className='resident_photo'>
            <img src={resident?.image} alt="resident image" />
            <figcaption className='resident_status'>
                <div className={`resident_circle ${resident?.status}`}></div>
                <p>{resident?.status}</p>
            </figcaption>
        </figure>
        <h3 className='resident_name'>{resident?.name}</h3>
        <hr />
        <ul className='resident_list'>
            <li className='resident_item'><span>Specie </span>{resident?.species}</li>
            <li className='resident_item'><span>Origin </span>{resident?.origin.name}</li>
            <li className='resident_item'><span>Epidosdes Where Appear </span>{resident?.episode.length}</li>
        </ul>
    </article>
  )
}

export default ResidentCard