import axios from 'axios';
import memoize from 'lodash.memoize';
import { useQuery } from '@tanstack/react-query';

const fetchRateHistory = async (currency: string) => {
  const endDate = new Date();
  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 30);

  const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/USD`);
  const rates = response.data.rates;

  // uses fake history data as the API does not provide historical rates
  const data = [];
  for (let i = 0; i <= 30; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    data.push({ date: date.toISOString().split('T')[0], rate: rates[currency] + Math.random() * 0.1 - 0.05 });
  }
  return data;
};


// Memoize the fetchRateHistory function
const memoizedFetchRateHistory = memoize(fetchRateHistory);

export const useRateHistory = (currency: string) => {
  return useQuery({
    queryKey: ['rateHistory', currency],
    queryFn: () => memoizedFetchRateHistory(currency),
  });
};