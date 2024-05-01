import { Calendar, DateValue } from '@nextui-org/calendar';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { parseDate } from '@internationalized/date';
import { useState } from 'react';
import { Card } from 'reactstrap';

const data = [
  { name: 'Present Percentage', value: 400 },
  { name: 'Absent Percentage', value: 300 },
];

const COLORS = ['#0088FE', '#00C49F'];

const DailyWorkPercentage = () => {
  const [selectedDate, setSelectedDate] = useState<DateValue | null>();

  const handleDateChange = (date: DateValue | null) => {
    setSelectedDate(date);
  };
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 p-4">
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
      <div className="text-center">
        <Calendar
          value={selectedDate}
          onChange={handleDateChange}
          showMonthAndYearPickers
          aria-label="Date (Uncontrolled)"
          defaultValue={parseDate('2023-02-03')}
          classNames={{
            content: 'bg-blue-50',
            gridHeaderRow: 'bg-blue-50 text-black',
            gridHeader: 'shadow-none',
            gridWrapper: 'bg-blue-50',
            headerWrapper: 'bg-blue-50',
            header: 'bg-blue-50',
            pickerHighlight: 'bg-white',
            title: 'text-black',
            nextButton: 'text-black bg-gray-200',
            prevButton: 'text-black  bg-gray-200',
          }}
        />
      </div>
    </div>
  );
};

export default DailyWorkPercentage;
