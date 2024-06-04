// CORE
import React from 'react';

// UI
import { StyledLabel } from './Settings.styles';

// UTILS
import { handleColorChange } from 'utils/colorUtils';

const Settings: React.FC = () => {
  const [lineColor, setLineColor] = React.useState(localStorage.getItem('lineColor') || '#8884d8');
  
  return (
    <div>
      <h2>Settings</h2>
      <StyledLabel>
        Line Color: 
        <input type="color" value={lineColor} onChange={(e) => handleColorChange(setLineColor, e.target.value)} />
      </StyledLabel>
    </div>
  );
};

export default Settings;