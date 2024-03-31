// src/components/TopTraders.tsx
import React, { useEffect, useState } from 'react';
import './styles.css';

interface Trader {
  name: string;
  change: string;
  totalSui: number;
}

const TopTraders: React.FC = () => {
  const [traders, setTraders] = useState<Trader[]>([]);

  useEffect(() => {
    // Fetch the top traders data from your backend or blockchain
    // This is a placeholder - replace with your actual data fetching logic
    const fetchTopTraders = async () => {
      const fetchedTraders = [
        // Example data
        { name: 'Trader 1', change: '+4.20%', totalSui: 234.87 },
        { name: 'Trader 2', change: '-3.40%', totalSui: 90.24 },
        { name: 'Trader 3', change: '-16.80%', totalSui: 90.00 },
        { name: 'Trader 4', change: '-30.45%', totalSui: 100.07 },
        { name: 'Trader 5', change: '+33.98%', totalSui: 99.98 },
        { name: 'Trader 6', change: '+3.49%', totalSui: 29.05 },
        { name: 'Trader 7', change: '-2.86%', totalSui: 67.86 },
        { name: 'Trader 8', change: '+50.70%', totalSui: 110.88 },
        { name: 'Trader 9', change: '-63.90%', totalSui: 155.76 },
        { name: 'Trader 10', change: '+69.49%', totalSui: 1000.00 },
        // Add more traders as per your data source
      ];
      setTraders(fetchedTraders);
    };

    fetchTopTraders();
  }, []);

  return (
    <div className="top-traders-list">
      <h2>Top Traders</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Change</th>
            <th>Total SUI</th>
          </tr>
        </thead>
        <tbody>
          {traders.map((trader, index) => (
            <tr key={index}>
              <td>{trader.name}</td>
              <td className={trader.change.startsWith('-') ? 'percentage-change-1' : 'percentage-change'}>
                {trader.change}
              </td>
              <td>{trader.totalSui.toLocaleString()} SUI</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopTraders;
