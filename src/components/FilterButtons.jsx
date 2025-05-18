import React from 'react';

function FilterButtons({ filter, setFilter }) {
  return (
    <div className="filters">
      <button 
        onClick={() => setFilter('All')} 
        disabled={filter === 'All'}>
        All
      </button>
      <button 
        onClick={() => setFilter('Completed')} 
        disabled={filter === 'Completed'}>
        Completed &#10004;
      </button>
      <button 
        onClick={() => setFilter('Pending')} 
        disabled={filter === 'Pending'}>
        Pending&#9203;
      </button>
    </div>
  );
}

export default FilterButtons;
