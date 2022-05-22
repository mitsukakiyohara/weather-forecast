import React, {useState} from 'react';
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const CitySelector = ({onSearch}) => {
  const [city, setCity] = useState('');
  
  return (
    <>
      <Row>
        <Col>
        <h1 style="text-align: center;font-size: 2.5rem;"> Mitsuka's Weather Forecast </h1>
          <h3>Search your city below</h3>
        </Col>
      </Row>

      <Row>
        <Col xl={5} className="text-center">
          <FormControl
            placeholder="Enter city"
            // update city value with the user's input
            onChange={(event) => setCity(event.target.value)}
            // value will be the currently selected city
            value={city}
          />
        </Col>
      </Row>

      <Row>
        <Col>
          {/* event handler for button click */}
          <Button onClick={() => onSearch(city)}>Check Weather Forecast</Button>
        </Col>
      </Row>
    </>
  );
};

export default CitySelector;