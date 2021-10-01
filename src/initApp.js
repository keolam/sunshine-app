import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import WeatherCard from './components/WeatherCard';
import {useState, useEffect} from 'react';

function App() {
    const [place, setPlace] = useState("");
    const [placeData, setPlaceData] = useState({});
    const updatePlaceData = () => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=7d140da80fb446a894b155522213009&q=${place}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            setPlaceData(data);
        }); 
    };
    
    return (
        <div className="App">
            <div className="container">   
                <div className="row">   
                    <div className="col-12 form">
                        <input 
                            type="text" 
                            value={place} 
                            onChange={(e) => {
                                setPlace(e.target.value);
                            }}
                        />
                        <button className="btn btn-primary">Submit</button>
                    </div>
                    <WeatherCard />
                </div> 
            </div> 
        </div>
    )
}