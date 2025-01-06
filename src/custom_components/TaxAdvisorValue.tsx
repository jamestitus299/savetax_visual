// import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts';
import { Calculator, Calendar, CheckCircle2 } from 'lucide-react';

const TaxAdvisorValue = () => {
  const consultationCost = 5000;
  const potentialSavings = 241686; // Difference between current and potential deductions
  const roi = (potentialSavings / consultationCost).toFixed(1);

  const roiData = [
    { name: 'Consultation Cost', amount: consultationCost },
    { name: 'Potential Savings', amount: potentialSavings },
  ];

  const timelineData = [
    { month: 'Now', savings: 0, description: 'Book Consultation' },
    {
      month: 'Month 1',
      savings: 60000,
      description: 'Implement Initial Strategies',
    },
    { month: 'Month 3', savings: 120000, description: 'Optimize Investments' },
    { month: 'Month 6', savings: 180000, description: 'Review & Adjust' },
    { month: 'Year End', savings: 241686, description: 'Maximum Tax Savings' },
  ];

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="text-blue-500" />
            Return on Investment
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="text-4xl font-bold text-blue-600">{roi}x</div>
            <div className="text-gray-600">
              Return on Consultation Investment
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={roiData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                <Bar dataKey="amount">
                  {roiData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={index === 0 ? '#94a3b8' : '#22c55e'}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="text-emerald-500" />
              Your Tax Savings Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={timelineData}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip
                    formatter={(value) => `₹${value.toLocaleString()}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="savings"
                    stroke="#22c55e"
                    strokeWidth={2}
                    dot={{ fill: '#22c55e' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" />
              Why Act Now?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg">
                <p className="text-lg font-semibold text-red-700">
                  Only{' '}
                  {Math.floor(
                    (new Date('2025-03-31').getTime() - new Date().getTime()) /
                      (1000 * 60 * 60 * 24)
                  )}{' '}
                  days left
                </p>
                <p className="text-sm text-red-600 mt-1">
                  until the end of financial year 2024-25
                </p>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: 'Expert Guidance',
                    description:
                      'Get personalized tax-saving strategies tailored to your income',
                  },
                  {
                    title: 'Time-Sensitive Benefits',
                    description:
                      'Many tax-saving investments need time to maximize returns',
                  },
                  {
                    title: 'Stay Compliant',
                    description:
                      'Navigate complex tax laws with professional assistance',
                  },
                  {
                    title: 'Peace of Mind',
                    description:
                      'Expert handling of your tax planning and compliance',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="font-medium text-emerald-700">
                      {item.title}
                    </div>
                    <div className="text-sm text-gray-600">
                      {item.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-center text-blue-800 font-medium">
                  Book your consultation now and save ₹
                  {potentialSavings.toLocaleString()} this year
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TaxAdvisorValue;
