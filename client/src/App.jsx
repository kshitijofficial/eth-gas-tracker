import { useState, useEffect } from 'react'
import { Bar } from "react-chartjs-2";
import axios from 'axios';

import { formatDistanceToNow } from "date-fns";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  Filler
} from 'chart.js';

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
import './App.css'

function App() {

  const [chartData, setChartData] = useState(null);


  useEffect(() => {
    setTimeout(() => {
      const ws = new WebSocket("ws://localhost:5000");
      ws.onmessage = (event) => {
        const resData = JSON.parse(event.data)
        prepareChart(resData)
      }
    }, 2000)
  }, [])

  useEffect(() => {
    const fetchBlockInfo = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/blocks/')
        const data = res.data;
        console.log(data)
        prepareChart(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchBlockInfo()
  }, [])

  const prepareChart = (blocks) => {
    if (blocks.length > 0) {
      const timestamps = blocks.map(({ timestamp }) => {
        return formatDistanceToNow(new Date(timestamp * 1000), { addSuffix: true })
      })

      const gasUsed = blocks.map(({ gasused }) => {
        return gasused;
      })

      setChartData({
        labels: timestamps,
        datasets: [
          {
            label: 'Gas Used',
            data: gasUsed,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
          },
        ],
      });


    }
  }
  return (
    <div className="App">
      <h1>Ethereum Gas Tracker</h1>
      {chartData ? (
        <Bar
          data={chartData}
          options={{
            responsive: true,
            plugins: {
              title: {
                display: true,
                text: 'Gas Used Over Time',
              },
              tooltip: {
                callbacks: {
                  label: function (tooltipItem) {
                    return `Gas Used: ${tooltipItem.raw}`;
                  },
                },
              },
            },
            scales: {
              x: {
                ticks: {
                  font: {
                    size: 10, // Adjust font size here
                  },
                },
              },
              y: {
                ticks: {
                  font: {
                    size: 12, // Adjust font size here (optional)
                  },
                },
              },
            },
          }}
        />
      ) : (
        <p>Loading chart data...</p>
      )}
    </div>
  )
}

export default App
