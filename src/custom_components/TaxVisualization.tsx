// import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  // Treemap,
  ResponsiveContainer,
  XAxis,
  YAxis,
  // Tooltip,
  Cell,
  // Legend,
} from 'recharts';

const TaxVisualization = () => {
  const COLORS = {
    income: '#22c55e', // green
    deduction: '#ef4444', // red
    tax: '#3b82f6', // blue
  };

  const data = [
    {
      name: 'Gross Salary',
      amount: 872381,
      type: 'income',
      formattedAmount: '₹872,381',
    },
    {
      name: 'Standard Deduction',
      amount: 50000,
      type: 'deduction',
      formattedAmount: '₹50,000',
    },
    {
      name: 'Professional Tax',
      amount: 1250,
      type: 'deduction',
      formattedAmount: '₹1,250',
    },
    {
      name: 'Section 80C',
      amount: 41032,
      type: 'deduction',
      formattedAmount: '₹41,032',
    },
    {
      name: 'Section 80D',
      amount: 25000,
      type: 'deduction',
      formattedAmount: '₹25,000',
    },
    {
      name: 'Net Tax',
      amount: 66061,
      type: 'tax',
      formattedAmount: '₹66,061',
    },
  ];

  const pieData = [
    { name: 'Net Income', value: 755099, color: COLORS.income },
    { name: 'Total Deductions', value: 117282, color: COLORS.deduction },
    { name: 'Tax Payable', value: 66061, color: COLORS.tax },
  ];

  // const CustomTooltip = ({ active, payload, label }) => {
  //   if (active && payload && payload.length) {
  //     return (
  //       <div className="bg-white p-4 rounded-lg shadow-lg border">
  //         <p className="font-semibold">{label || payload[0].name}</p>
  //         <p className="text-sm">
  //           Amount: ₹{payload[0].value.toLocaleString()}
  //         </p>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Tax Components Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis
                  dataKey="name"
                  angle={-45}
                  textAnchor="end"
                  height={100}
                />
                <YAxis />
                {/* <Tooltip content={<CustomTooltip />} /> */}
                <Bar dataKey="amount">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.type]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Income Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) =>
                    `${name}: ₹${value.toLocaleString()}`
                  }
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                {/* <Tooltip content={<CustomTooltip />} /> */}
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaxVisualization;
