import React from 'react';
import './Season.css'

const getSeason = (lat, month) =>{
    if (month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const Season = (props) => {

    const season = getSeason(props.lat, new Date().getMonth());
    const currentseason = season === 'winter' ? 'Winter' : 'Summer'
    const text = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    const icon = season === 'winter' ? 'snow' : 'sunny';

    return (
        <div className={`${season}`}>
            <h1 style={{textAlign: 'center'}}>Season: {currentseason}</h1>
            <div className="season"><ion-icon className="icon-1" style={{width: '200px', height: '200px'}} name={icon}></ion-icon>
            <h1>{text}</h1>
            <ion-icon className="icon-2" style={{width: '200px', height: '200px'}} name={icon}></ion-icon></div>
            
        </div>
    )
} 

export default Season;