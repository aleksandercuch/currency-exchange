// CORE
import React from 'react';
import { useParams } from 'react-router-dom';

// HOOKS
import { useRateHistory } from 'hooks/useRateHistory';

// UI
import { StyledLineChartOuterContainer, StyledLineChartInnerContainer } from 'components/CurrencyDetails/CurrencyDetails.styles';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

// UTILS
import { handleColorChange } from 'utils/colorUtils';

// COMPONENTS

import { ReturnButton } from 'components/ReturnButton/ReturnButton';


const CurrencyDetails: React.FC = () => {
  const { currency } = useParams<{ currency: string | undefined }>(); // Ensure currency is potentially undefined
  const { data, isLoading, error } = useRateHistory(currency || '');
  const [lineColor, setLineColor] = React.useState(localStorage.getItem('lineColor') || '#8884d8');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  // Temporary fix for LineChart console log errors
  // TODO: Fix the problem with warning in console
  // EXPLANATION: We got warnings saying support for defaultProps will be removed for XAxis and YAxis. Providing dataKey's like below
  // should resolve the issue but React still displays warnings. Reacharts' library creator is working on update to solve the issue,
  // however LineChar works fine despite the warnings.
  // CONSIDER WITH TEAM: change data display library or wait until library's update.
  const consoleError = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    consoleError(...args);
  };

  
  return (
    <div>
      <ReturnButton />
      <StyledLineChartOuterContainer >
        <StyledLineChartInnerContainer>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="date" />
              <YAxis dataKey="rate" />
              {/* TODO: Tooltip should stay in single place on mobile version, do not place under currency point on chart */}
              <Tooltip />
              <CartesianGrid stroke="#f5f5f5" />
              <Line type="monotone" dataKey="rate" stroke={lineColor} />
            </LineChart>
          </ResponsiveContainer>
        </StyledLineChartInnerContainer>
      </StyledLineChartOuterContainer>
      <div>
        <input type="color" value={lineColor} onChange={(e) => handleColorChange(setLineColor, e.target.value)} />
      </div>
    </div>
  );
};

export default CurrencyDetails;

