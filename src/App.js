import { useState } from 'react';
import './App.css';

function App() {
  const [riverVelocity, setRiverVelocity] = useState('');
  const [personVelocity, setPersonVelocity] = useState('');
  const [widthOfRiver, setWidthOfRiver] = useState('');
  const [angleOfSwim, setAngleOfSwim] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false)


  function calculation(e) {
    e.preventDefault();
    setLoading(true);
    var sinvalue = null;
    if (angleOfSwim > 90 && angleOfSwim < 180) {
      //for setting cos value 
      setAngleOfSwim(180 - angleOfSwim);
    }

    switch (angleOfSwim) {
      //setting sin value oppiste to cos 
      case 0:
        sinvalue = 0;
        break;
      case 30:
        sinvalue = 1 / 2;
        break;
      case 45:
        sinvalue = (1 / Math.sqrt(2)).toFixed(2);
        break;
      case 60:
        sinvalue = (Math.sqrt(3) / 2).toFixed(2);
        break;
      case 90:
        sinvalue = 1;
        break;
      default:
        sinvalue = 3 / 5
    }

    console.log('singvalue', sinvalue)
    function calculate() {

      if (Number(angleOfSwim) === 90) {
        let time = widthOfRiver / personVelocity;
        setData(time.toFixed(2));
      } else if (angleOfSwim > 1 && angleOfSwim < 90) {
        let time = widthOfRiver / (personVelocity * sinvalue);
        setData(time.toFixed(2));
      }
    }
    calculate();

  }

  return (
    <div className="App">
      <form className="form" onSubmit={calculation}>

        <div>
          <label htmlFor="Person Velocity">Person Velocity m/s</label>
          <input
            type="number"
            placeholder="Person Velocity"
            value={personVelocity}
            required
            onChange={(e) => setPersonVelocity(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="River Velocity">River Velocity m/s</label>
          <input
            type="number"
            placeholder="Enter River Velocity"
            value={riverVelocity}
            required
            onChange={(e) => setRiverVelocity(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="Angle of swim">Angle of swim Y degree</label>
          <input
            type="number"
            placeholder="Enter Angle of swim"
            value={angleOfSwim}
            required
            onChange={(e) => setAngleOfSwim(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="Width of river">Width of river in meter</label>
          <input
            type="number"
            placeholder="Enter Width of river in meter"
            value={widthOfRiver}
            required
            onChange={(e) => setWidthOfRiver(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            calculate
      </button>
        </div>
      </form>
      <div>
        <h1 className='text'>
          {loading ? ` Time takent to cross the river is  : ${data} second` : null}
        </h1>
      </div>
    </div>
  );
}

export default App;
