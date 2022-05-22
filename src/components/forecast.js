import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './weather'

const Forecast = ({weathers}) => {
    return (
        <Row>
           {weathers.map(({dt, main, weather}) => (
                <Col key={dt}>
                    <WeatherCard 
                    temp_max={main.temp_max.toFixed()} 
                    temp_min={main.temp_min.toFixed()} 
                    dt={dt * 1000} 
                    main={weather[0].main} 
                    icon={weather[0].icon} 
                  />
                </Col>
            ))} 
        </Row>
    )
}

export default Forecast;