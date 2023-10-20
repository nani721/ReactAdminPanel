import React, { useState } from "react";
import "./Cards.css";


function Cards2() {

    const [cardItems] = useState([
        { id: 1, label: 'Pending Refunds',count: '34,152', icon: 'card_icon bi bi-diagram-3-fill color-1', weekCount:'2.65%', weekCountClass:'text-success me-1', arrow:'bi bi-arrow-up' },
        { id: 2, label: 'Total Refunds', count: '98,654', icon: 'card_icon bi bi-graph-up-arrow color-2',weekCount:'0.82%', weekCountClass:'text-success me-1',arrow:'bi bi-arrow-up' },
        
    ]);


  return (
      <div className="main-cards-2">
        {cardItems.map((item) => (
            <div className="card"  key={item.id}>
              <div className="card-inner">
                <div className="card-header">
                <h1 className="card-count">${item.count}</h1>
                <h3 className="card-title">{item.label}</h3>
                </div>
                <i className={item.icon}></i>
                <p class="text-muted mt-3 mb-0 sub-text">
                  <span className={item.weekCountClass}>
                    <i className={item.arrow}></i>{item.weekCount}</span> 
                    since last week
                </p>
              </div>
          </div>
          ))} 
      </div>
  );
}

export default Cards2;
