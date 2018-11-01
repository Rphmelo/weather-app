import React from 'react';
import { 
    Sparklines, 
    SparklinesLine, 
    SparklinesReferenceLine 
} from 'react-sparklines';

function average(data) {
    const total = data.reduce(
        (acumulator, currentValue) => acumulator + currentValue
    );

    return Math.round(total / data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>
                {average(props.data)} {props.units}
            </div>
        </div>
    );
}