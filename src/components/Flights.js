import React, {useEffect, useState} from 'react';

const Flights = () => {

    let [content, setContent] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setContent(value.filter(value => value.launch_year !== '2020'))
            })
    }, [])

    return (
        <div>

            {
                content.map(value => <div key={value.flight_number}>
                    {value.mission_name} - {value.launch_year}
                    <img src={value.links.mission_patch_small} alt="mission_patch"/>
                </div>)
            }

        </div>
    );
};

export default Flights;