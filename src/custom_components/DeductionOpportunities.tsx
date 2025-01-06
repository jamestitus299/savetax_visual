// import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  AreaChart,
  Area,
  PieChart,
  Pie,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts';
import { AlertCircle, TrendingUp, Wallet } from 'lucide-react';

const DeductionOpportunities = () => {
  // Calculate potential savings vs current
  const currentTaxSavings = 117282; // Current deductions
  const potentialTaxSavings = 358968; // Including additional 80C, NPS, etc.

  const savingsComparison = [
    { month: 'Apr', current: 9773, potential: 29914 },
    { month: 'May', current: 19546, potential: 59828 },
    { month: 'Jun', current: 29319, potential: 89742 },
    { month: 'Jul', current: 39092, potential: 119656 },
    { month: 'Aug', current: 48865, potential: 149570 },
    { month: 'Sep', current: 58638, potential: 179484 },
    { month: 'Oct', current: 68411, potential: 209398 },
    { month: 'Nov', current: 78184, potential: 239312 },
    { month: 'Dec', current: 87957, potential: 269226 },
    { month: 'Jan', current: 97730, potential: 299140 },
    { month: 'Feb', current: 107503, potential: 329054 },
    { month: 'Mar', current: 117282, potential: 358968 },
  ];

  const missedOpportunities = [
    { name: 'Currently Claimed', value: currentTaxSavings, color: '#22c55e' },
    {
      name: 'Additional Potential',
      value: potentialTaxSavings - currentTaxSavings,
      color: '#f43f5e',
    },
  ];

  // const CustomTooltip = ({ active, payload, label }) => {
  //   if (active && payload && payload.length) {
  //     return (
  //       <div className="bg-white p-4 rounded-lg shadow-lg border">
  //         <p className="font-semibold">{label}</p>
  //         <p className="text-sm text-emerald-600">
  //           Current: ₹{payload[0].value.toLocaleString()}
  //         </p>
  //         <p className="text-sm text-rose-600">
  //           Potential: ₹{payload[1].value.toLocaleString()}
  //         </p>
  //         <p className="text-sm text-gray-600 mt-2">
  //           Missing out: ₹
  //           {(payload[1].value - payload[0].value).toLocaleString()}
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
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="text-rose-500" />
            Yearly Tax Savings Potential
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={savingsComparison}>
                <XAxis dataKey="month" />
                <YAxis />
                {/* <Tooltip content={<CustomTooltip />} /> */}
                <Area
                  type="monotone"
                  dataKey="current"
                  stackId="1"
                  stroke="#22c55e"
                  fill="#22c55e"
                  name="Current Savings"
                />
                <Area
                  type="monotone"
                  dataKey="potential"
                  stackId="2"
                  stroke="#f43f5e"
                  fill="#f43f5e"
                  name="Potential Savings"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wallet className="text-blue-500" />
              Missed Savings Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={missedOpportunities}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) =>
                      `${name}: ₹${value.toLocaleString()}`
                    }
                  >
                    {missedOpportunities.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="text-amber-500" />
              What You Could Do With Additional Savings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-amber-50 rounded-lg">
                <p className="text-lg font-semibold text-amber-900">
                  ₹{(potentialTaxSavings - currentTaxSavings).toLocaleString()}{' '}
                  in Potential Additional Savings
                </p>
                <p className="text-sm text-amber-700 mt-1">
                  That's equivalent to:
                </p>
              </div>
              <div className="space-y-2">
                {[
                  { title: 'A premium smartphone', amount: 80000 },
                  { title: 'International vacation package', amount: 120000 },
                  { title: "1 year of child's education", amount: 150000 },
                ].map((item, index) => (
                  <div key={index} className="p-3 border rounded-lg">
                    <div className="font-medium">{item.title}</div>
                    <div className="text-sm text-gray-600">
                      ₹{item.amount.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeductionOpportunities;
