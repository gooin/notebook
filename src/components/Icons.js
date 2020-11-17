import React from 'react';
import IosCar from 'react-ionicons/lib/IosCar';
import IosCafe from 'react-ionicons/lib/IosCafe';
import IosPlaneOutline from 'react-ionicons/lib/IosPlaneOutline';
import IosPizzaOutline from 'react-ionicons/lib/IosPizzaOutline';
import IosCash from 'react-ionicons/lib/IosCash';


const Icons = ({iconName},{color="#6cf"}) => {
    switch (iconName) {
        case "car":
            return <IosCar  fontSize="30px" color={color} />;
        case "cafe":
            return <IosCafe fontSize="30px" color={color}/>;
        case "food":
            return <IosPizzaOutline fontSize="30px" color={color}/>;
        case "travel":
            return <IosPlaneOutline fontSize="30px" color={color}/>;
       case "salary":
            return <IosCash fontSize="30px" color={color}/>;
        default:
            return <IosPlaneOutline fontSize="30px" color={color}/>;

    }
}

export default Icons;