import { useSelector } from 'react-redux';

const WeatherCard = () => {
    const placeData = useSelector((state) => state.placeData);
    const theme = useSelector((state) => state.theme);
    return (
        <div className="column">
            <div className="row">
                <div className="offset-md-4 col-12 col-md-4 weather">
                    <div className={ theme ? "card dark" : " card"}>
                        { placeData.location ? (
                            <div>
                                <img src={placeData.current.condition.icon} alt="" />
                                <div className="temp">{placeData.current.temp_f}°<span style={{fontSize: "1.8rem"}}>F</span></div>
                                <div className="desc">{placeData.current.condition.text}</div>
                                <div className="place">{placeData.location.name}</div>
                                <div className="container">  
                                    <div className="row whp">
                                        <div className="col">
                                            <div className="title">Wind</div>
                                            <div className="data">{placeData.current.wind_mph}<span className="unit"> mph</span></div>
                                        </div>
                                        <div className="col">
                                            <div className="title">Humidity</div>
                                            <div className="data">{placeData.current.humidity}<span className="unit"> %</span></div>
                                        </div>
                                        <div className="col">
                                            <div className="title">Precipitation</div>
                                            <div className="data">{placeData.current.precip_in}<span className="unit"> in.</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : ( 
                            <h4>Please enter valid location</h4>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;