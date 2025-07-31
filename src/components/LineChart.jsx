import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const userGrowthData = [
  { month: "Jan", users: 1200, newUsers: 400, returningUsers: 800 },
  { month: "Feb", users: 1100, newUsers: 350, returningUsers: 750 },
  { month: "Mar", users: 1350, newUsers: 500, returningUsers: 850 },
  { month: "Apr", users: 1250, newUsers: 450, returningUsers: 800 },
  { month: "May", users: 1500, newUsers: 600, returningUsers: 900 },
  { month: "Jun", users: 1400, newUsers: 550, returningUsers: 850 },
  { month: "Jul", users: 1600, newUsers: 700, returningUsers: 900 },
  { month: "Aug", users: 1500, newUsers: 650, returningUsers: 850 },
  { month: "Sep", users: 1700, newUsers: 800, returningUsers: 900 },
  { month: "Oct", users: 1600, newUsers: 750, returningUsers: 850 },
  { month: "Nov", users: 1800, newUsers: 850, returningUsers: 950 },
  { month: "Dec", users: 1750, newUsers: 800, returningUsers: 950 },
];

const COLORS = {
  users: "#8186e0",
  newUsers: "#16a53c",
  returningUsers: "#d94f4f",
};

const LineChartComponent = () => {
  return (
    <div className="mb-6 px-4">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#676BC9] text-center sm:text-left">
        User Growth 
      </h3>

      <div
        className="rounded-2xl shadow-md p-4 sm:p-6"
        style={{
          backgroundColor: "#dae5ffff",  
          border: "2px solid #ecedffff",  
        }}
      >
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={userGrowthData}
            margin={{ top: 20, right: 30, left: 10, bottom: 0 }}
          >
            <XAxis dataKey="month" stroke="#676BC9" />
            <YAxis stroke="#676BC9" domain={[0, 2000]} />
            <Tooltip
              contentStyle={{ backgroundColor: "#f0f2ff", borderColor: "#676BC9" }}
              labelStyle={{ color: "#2e3277" }}
            />
            <Legend verticalAlign="top" height={36} />
            <Line
              type="monotone"
              dataKey="users"
              stroke={COLORS.users}
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2, fill: COLORS.users }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="newUsers"
              stroke={COLORS.newUsers}
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2, fill: COLORS.newUsers }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="returningUsers"
              stroke={COLORS.returningUsers}
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2, fill: COLORS.returningUsers }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartComponent;
