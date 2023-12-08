import { useEffect, useState } from "react";

export const GetLocation = () => {

    const [loc, setLoc] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const longitude = pos.coords.longitude;
            const latitude = pos.coords.latitude;
            setLoc({longitude, latitude});
        })
    }, [])

    return (
        <div>
            {loc ? (
                <p>Довгота: {loc.longitude}, Широта: {loc.latitude}</p>
            ) : (
                <p>Завантаження геолокації...</p>
            )}
        </div>
    );
};