import { useState, useEffect } from 'react';
import styles from './CountryFlags.module.css';

const Flag = ({ name, flag }) => {
    return (
        <div className={styles.flag_wrapper}>
            <img src={flag} alt={'Flag of ' + name} />
            <h3>{name}</h3>
        </div>
    );
};

const CountyFlags = () => {
    const [countriesData, setCountriesData] = useState([]);
    const url = "https://xcountries-backend.azurewebsites.net/all";

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setCountriesData(data))
        .catch((error) => console.log("Error fetching data: " + error.message));
        
    }, []);

    return (
        <div className={styles.flag_grid_div}>
            {
                countriesData.map((country) => {
                    return (
                        <Flag 
                            key={country.abbr}
                            flag={country.flag}
                            name={country.name}
                        />
                    );
                })
            }
        </div>
    );
};

export default CountyFlags;