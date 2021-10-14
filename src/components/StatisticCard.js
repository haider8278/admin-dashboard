import { React } from 'react';

const StatisticCard = ({numbers,title,icon}) => {
    return (
        <div className="card">
            <div>
                <div className="numbers">{numbers}</div>
                <div className="cardName">{title}</div>
            </div>
            <div className="iconBox">
                {icon}
            </div>
        </div>
    )
}

export default StatisticCard;