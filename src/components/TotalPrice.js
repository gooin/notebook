import React from 'react';

const TotalPrice = ({income, outcome}) => {
    return (
        <React.Fragment>
            <h4>收入: {income}元 </h4>
            <h4>支出: {outcome}元</h4>
        </React.Fragment>
    );
};

export default TotalPrice;
