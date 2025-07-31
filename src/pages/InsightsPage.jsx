import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const userGrowthData = [
  { month: "Jan", users: 200 },
  { month: "Feb", users: 350 },
  { month: "Mar", users: 500 },
  { month: "Apr", users: 650 },
  { month: "May", users: 800 },
  { month: "Jun", users: 950 },
];

const userRoleData = [
  { name: "Admin", value: 5 },
  { name: "User", value: 1200 },
  { name: "Editor", value: 45 },
];

const COLORS = ["#8186e0", "#16a53c", "#d94f4f"];

const InsightsPage = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6 text-[#454aab]">
         Insights
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="bg-[#eef0ff] rounded-xl p-5 shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#676BC9]">
            User Growth
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={userGrowthData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <XAxis dataKey="month" stroke="#676BC9" />
              <YAxis stroke="#676BC9" />
              <Tooltip contentStyle={{ backgroundColor: "#f0f2ff", borderColor: "#676BC9" }} />
              <Bar
                dataKey="users"
                fill="#8186e0"
                radius={[6, 6, 0, 0]}
                className="transition duration-300"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

         
        <div className="bg-[#eef0ff] rounded-xl p-5 shadow-md">
          <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#676BC9]">
             User Roles Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={userRoleData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {userRoleData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
              <Tooltip contentStyle={{ backgroundColor: "#f0f2ff", borderColor: "#676BC9" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default InsightsPage;
