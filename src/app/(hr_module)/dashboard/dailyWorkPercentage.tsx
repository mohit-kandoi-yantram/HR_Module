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
    // console.log('/////////');
    // console.log(date);
    // console.log(selectedDate);
    setSelectedDate(date);
  };
  // const [calenderSelectedDate, setCalenderSelectedDate] = useState<Date | null>(new Date());

  // const handleDateChange = (date: Date | null) => {
  //   setSelectedDate(date);
  // };

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
        {/* <Card>
          <div className="relative">
            <div className="absolute top-0 left-0">
              <PieChart width={300} height={300}>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend
                  align="right"
                  verticalAlign="middle"
                  layout="vertical"
                  wrapperStyle={{ left: '120px', top: '60px' }}
                />
              </PieChart>
            </div>
          </div>
        </Card> */}
      </div>
      <div>
        <Card className="bg-blue-50 rounded-2xl">
          <div className="text-center">
            <Calendar
              value={selectedDate}
              onChange={handleDateChange}
              showMonthAndYearPickers
              aria-label="Date (Uncontrolled)"
              defaultValue={parseDate('2020-02-03')}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DailyWorkPercentage;
