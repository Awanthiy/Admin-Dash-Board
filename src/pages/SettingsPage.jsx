import React, { useState } from "react";

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [username, setUsername] = useState("User123");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    alert("Settings saved successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#eef0ff] rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-[#454aab]">Settings</h2>

      <div className="space-y-6">
         
        <div>
          <label className="block mb-1 font-semibold text-[#676BC9]">
            Username
          </label>
          <input
            type="text"
            className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#676BC9] text-[#2e3277]"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

         
        <div>
          <label className="block mb-1 font-semibold text-[#676BC9]">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-[#676BC9] text-[#2e3277]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

          
         
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="emailNotifications"
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
            className="w-5 h-5 accent-[#676BC9]"
          />
          <label
            htmlFor="emailNotifications"
            className="font-semibold text-[#676BC9]"
          >
            Receive Email Notifications
          </label>
        </div>

       
        <button
          onClick={handleSave}
          className="bg-[#676BC9] text-white px-6 py-2 rounded-md hover:bg-[#5459b3] transition"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
