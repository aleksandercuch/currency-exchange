// CORE
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import memoize from 'lodash.memoize';

const fetchExchangeRates = async (currencies: string[]) => {
  const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`);
  return currencies.reduce((acc, currency) => {
    acc[currency] = response.data.rates[currency];
    return acc;
  }, {} as Record<string, number>);
};

// Memoize the fetchExchangeRates function
const memoizedFetchExchangeRates = memoize(fetchExchangeRates);

export const useExchangeRates = (currencies: string[]) => {
  return useQuery({
    queryKey: ['exchangeRates', currencies],
    queryFn: () => memoizedFetchExchangeRates(currencies),
  });
};