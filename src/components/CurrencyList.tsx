// CORE
import React from 'react';
import { Link } from 'react-router-dom';

// HOOKS
import { useExchangeRates } from 'hooks/useExchangeRates';

// UI
import { List } from 'antd';

const currencies = ['PLN', 'EUR', 'GBP', 'JPY', 'CHF', 'AUD', 'CAD', 'CNY', 'SEK', 'NZD'];

const CurrencyList: React.FC = () => {
  const { data, isLoading, error } = useExchangeRates(currencies);

  // TODO: Consider using i18next for storing strings and preparing it for potential translating
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  return (
    <List
      itemLayout="horizontal"
      dataSource={currencies}
      renderItem={(currency) => (
        <List.Item>
          <Link to={`/currency/${currency}`}>
            {currency} - {data?.[currency]} $
          </Link>
        </List.Item>
      )}
    />
  );
};

export default CurrencyList;