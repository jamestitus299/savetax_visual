import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
} from 'recharts';
import { AlertCircle } from 'lucide-react';

const DeductionAnalysis = () => {
  // const [activeSection, setActiveSection] = useState('claimed');

  const claimedDeductions = [
    {
      name: 'Section 80C',
      amount: 41032,
      limit: 150000,
      remaining: 108968,
      category: 'Investment',
      details: 'Used for PF contributions',
    },
    {
      name: 'Section 80D',
      amount: 25000,
      limit: 25000,
      remaining: 0,
      category: 'Health',
      details: 'Health Insurance Premium',
    },
    {
      name: 'Standard Deduction',
      amount: 50000,
      limit: 50000,
      remaining: 0,
      category: 'Fixed',
      details: 'Fixed deduction for salaried employees',
    },
    {
      name: 'Professional Tax',
      amount: 1250,
      limit: 2500,
      remaining: 1250,
      category: 'Fixed',
      details: 'State-specific professional tax',
    },
  ];

  const potentialDeductions = [
    {
      name: 'Additional 80C',
      amount: 108968,
      category: 'Investment',
      details: 'ELSS, PPF, Life Insurance, etc.',
    },
    {
      name: 'NPS 80CCD(1B)',
      amount: 50000,
      category: 'Investment',
      details: 'Additional NPS investment',
    },
    {
      name: 'Home Loan Interest 24(b)',
      amount: 200000,
      category: 'Loans',
      details: 'Interest on home loan',
    },
    {
      name: 'Education Loan 80E',
      amount: 'No Limit',
      category: 'Loans',
      details: 'Interest on education loan',
    },
  ];

  // const CustomTooltip = ({ active, payload }) => {
  //   if (active && payload && payload.length) {
  //     const data = payload[0].payload;
  //     return (
  //       <div className="bg-white p-4 rounded-lg shadow-lg border">
  //         <p className="font-semibold">{data.name}</p>
  //         <p className="text-sm">Amount: ₹{data.amount.toLocaleString()}</p>
  //         {data.limit && (
  //           <>
  //             <p className="text-sm">Limit: ₹{data.limit.toLocaleString()}</p>
  //             <p className="text-sm">
  //               Remaining: ₹{data.remaining.toLocaleString()}
  //             </p>
  //           </>
  //         )}
  //         <p className="text-sm text-gray-600 mt-2">{data.details}</p>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Current Deductions Utilization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={claimedDeductions} layout="vertical">
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                {/* <Tooltip content={<CustomTooltip />} /> */}
                <Legend />
                <Bar
                  dataKey="amount"
                  name="Claimed"
                  fill="#22c55e"
                  stackId="a"
                />
                <Bar
                  dataKey="remaining"
                  name="Remaining"
                  fill="#94a3b8"
                  stackId="a"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Additional Deduction Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 mb-4 bg-blue-50 rounded-lg flex items-start gap-2">
            <AlertCircle className="text-blue-500 w-5 h-5 mt-0.5" />
            <div className="text-sm text-blue-700">
              These are potential deductions you could explore for the next
              assessment year to optimize your tax savings.
            </div>
          </div>
          <div className="space-y-4">
            {potentialDeductions.map((deduction, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-lg">{deduction.name}</h3>
                <p className="text-sm text-gray-600">{deduction.details}</p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">Maximum benefit: </span>
                  {typeof deduction.amount === 'number'
                    ? `₹${deduction.amount.toLocaleString()}`
                    : deduction.amount}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DeductionAnalysis;
