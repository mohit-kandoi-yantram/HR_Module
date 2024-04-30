import { Card, Calendar } from '@nextui-org/react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { useState } from 'react';

const data = [
  { name: 'Present Percentage', value: 400 },
  { name: 'Absent Percentage', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F'];

const DailyWorkPercentage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-4">
      <div>
        <Card className="bg-blue-50 rounded-2xl">
          <div className="text-center">
            <PieChart width={420} height={260}>
              <Pie
                dataKey="value"
                data={data}
                cx="25%"
                cy="50%"
                outerRadius={80}
                innerRadius={65}
                fill="#8884d8"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend layout="vertical" verticalAlign="bottom" />
              <Tooltip />
            </PieChart>
          </div>
        </Card>
      </div>
      <div>
        <Card className="bg-blue-50 rounded-2xl">
          <div className="text-center">
            <Calendar
              aria-label="Date (Show Month and Year Picker)"
              showMonthAndYearPickers
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DailyWorkPercentage;
