import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import UserTable from "./components/UserTable";
import InsightsPage from "./pages/InsightsPage";
import LineChart from "./components/LineChart";
import SettingsPage from "./pages/SettingsPage";  

function App() {
  const [selectedTab, setSelectedTab] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="p-4 w-full">
        {selectedTab === "Dashboard" && (
          <>
            <Header />
            <Cards />
            <LineChart />
          </>
        )}

        {selectedTab === "Users" && (
          <>
            <Header />
            <UserTable />
          </>
        )}

        {selectedTab === "Insights" && (
          <>
            <Header />
            <InsightsPage />
          </>
        )}

        {selectedTab === "Settings" && (
          <>
            <Header />
            <SettingsPage />   
          </>
        )}
      </div>
    </div>
  );
}

export default App;
