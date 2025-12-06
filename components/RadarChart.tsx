import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { BrokerMetrics } from '../types';

interface RadarChartProps {
  metrics: BrokerMetrics;
  color: string;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg rounded text-sm text-slate-700 text-right">
        <p className="font-semibold">{label}</p>
        <p className="text-brand-600">التقييم: {payload[0].value}/100</p>
      </div>
    );
  }
  return null;
};

export const BrokerRadarChart: React.FC<RadarChartProps> = ({ metrics, color }) => {
  const data = [
    { subject: 'الرسوم', A: metrics.fees, fullMark: 100 },
    { subject: 'سهولة الاستخدام', A: metrics.usability, fullMark: 100 },
    { subject: 'الأصول', A: metrics.assets, fullMark: 100 },
    { subject: 'الأبحاث', A: metrics.research, fullMark: 100 },
    { subject: 'الدعم', A: metrics.support, fullMark: 100 },
  ];

  // Map tailwind bg colors to hex for chart (approximate)
  const getHexColor = (twClass: string) => {
    if (twClass.includes('blue')) return '#2563eb';
    if (twClass.includes('green')) return '#22c55e';
    if (twClass.includes('indigo')) return '#4f46e5';
    if (twClass.includes('orange')) return '#f97316';
    if (twClass.includes('purple')) return '#9333ea';
    if (twClass.includes('red')) return '#dc2626';
    if (twClass.includes('brand')) return '#d49a26';
    return '#d49a26'; // default brand
  };

  const strokeColor = getHexColor(color);

  return (
    <div className="w-full h-64" dir="ltr">
      {/* Chart kept in LTR to maintain correct orientation of text logic, but labels are Arabic */}
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12, fontFamily: 'IBM Plex Sans Arabic' }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar
            name="Broker Score"
            dataKey="A"
            stroke={strokeColor}
            strokeWidth={2}
            fill={strokeColor}
            fillOpacity={0.3}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};