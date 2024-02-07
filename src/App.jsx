import "./App.css";
import { useEffect, useRef, useState } from "react";
import useFetch from "./hooks/useFetch";
import LocationCard from "./components/LocationCard";
import ResidentCard from "./components/ResidentCard";
import Pagination from "./components/Pagination";

function App() {
  const randomLocation = Math.floor(Math.random() * 126 + 1);
  const [location, getLocation, isLoading, hasError] = useFetch();
  const [finder, setFinder] = useState(randomLocation);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    //const randomLocation=Math.floor(Math.random()*126+1);
    const url = `https://rickandmortyapi.com/api/location/${finder}`;
    getLocation(url);
  }, [finder]);

  const textInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setFinder(textInput.current.value.trim());
  }

  const quantity=5;
  const second = currentPage*quantity;
  const first= second-quantity;
  const residentPart= location && location.residents.slice(first, second);
  const totalPage= location && Math.floor(location.residents.length / quantity)+1;

  //console.log(location)
  //console.log(randomLocation)
  return (
    <div className="app">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <h1>Rick And Morty</h1>
          <form className="app_form" onSubmit={handleSubmit}>
            <input className="app_text"
              type="number"
              ref={textInput}
              placeholder="Type a number(1 to 126)"
            />
            <button className="app_btn">Search</button>
          </form>
          {hasError || finder==='0'? (
            <h2>This Location Doesn't Exist</h2>
          ) : (
            <>
              <LocationCard location={location} />

              <Pagination 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPage={totalPage}
              />

              <div className="app_container">
              {
              residentPart.map((resident) => (
                <ResidentCard key={resident} 
                url={resident} />
              ))
              }
              </div>
              <Pagination 
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPage={totalPage}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
