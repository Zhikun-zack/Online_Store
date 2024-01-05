import React from 'react';

import './NoSelect.css';

const NoSelect = () => {
    return(
        <div className = "pDNothingContainer">
            <div className = "pDHeader1">Nothing to display...</div>
            <div className = "pDHeader2">Select an item to display</div>
            <div className = "pDHeader3">Select an item from the master view to display details in the detail view.</div>
        </div>
    )
}

export default NoSelect;