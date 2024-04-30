import { Card } from '@nextui-org/react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { department: 'General Ward', doctor: 10, wardStaff: 15, nurse: 5 },
  { department: 'Emergeny', doctor: 15, wardStaff: 20, nurse: 25 },
  { department: 'ICU', doctor: 8, wardStaff: 12, nurse: 18 },
  { department: 'General Ward', doctor: 10, wardStaff: 15, nurse: 5 },
  { department: 'Emergeny', doctor: 15, wardStaff: 20, nurse: 25 },
  { department: 'ICU', doctor: 8, wardStaff: 12, nurse: 18 },
  // Add more data as needed
];
// const CustomXAxisLine = () => {
//   return <line y1={20} y2={20} stroke="#ccc" />;
// };
const CustomYAxisTick = ({ x, y }: any) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={4} textAnchor="end" fill="#666">
        Staff
      </text>
    </g>
  );
};

const BarChartComponent = () => {
  return (
    <div className="grid grid-cols-1 p-4">
      <Card className="bg-blue-50 rounded-3xl mt-2">
        <div
          style={{
            width: '100%',
            height: 400,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* <h2 className="text-xl font-bold mb-4">Bar Chart</h2> */}
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              width={600}
              height={400}
              data={data}
              barCategoryGap={25}
              barGap={15}
              margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
            >
              <CartesianGrid stroke="transparent" />
              <XAxis
                dataKey="department"
                axisLine={false}
                label={{
                  value: 'Department',
                  position: 'bottom',
                  offset: 30,
                }}
              />
              <YAxis
                axisLine={false}
                tick={false}
                label={{
                  value: 'Staff',
                  angle: -90,
                  position: 'left',
                  offset: -30,
                }}
              />
              <Tooltip />
              <Legend layout="vertical" align="right" verticalAlign="bottom" />
              {/* <Legend /> */}
              <Bar
                dataKey="doctor"
                fill="#8884d8"
                radius={[20, 20, 20, 20]}
                maxBarSize={40}
              />
              <Bar
                dataKey="wardStaff"
                fill="#82ca9d"
                radius={[20, 20, 20, 20]}
                maxBarSize={40}
              />
              <Bar
                dataKey="nurse"
                fill="#ffc658"
                radius={[20, 20, 20, 20]}
                maxBarSize={40}
              />
              <line x1="80" y1="300" x2="85%" y2="300" stroke="#ccc" />
              <line x1="80" y1="300" x2="80" y2="10%" stroke="#ccc" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
};

export default BarChartComponent;
