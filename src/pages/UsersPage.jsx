import Header from '../components/Header';
import React, { useState } from "react";
import usersData from "../data/users";  

const UsersPage = () => {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredUsers = usersData.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) &&
      (!roleFilter || u.role === roleFilter) &&
      (!statusFilter || u.status === statusFilter)
  );

  return (
    <div className="p-6">
       
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold" style={{ color: "#454aab" }}>
          Users
        </h2>
        <button className="px-4 py-2 bg-[#676BC9] text-white rounded-md hover:bg-[#575bc0]">
          + Add New User
        </button>
      </div>

      
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded-md"
          style={{
            border: "1px solid #b0b3f5",
            color: "#2e3277",
          }}
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="p-2 rounded-md"
          style={{
            border: "1px solid #b0b3f5",
            color: "#2e3277",
          }}
        >
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Editor">Editor</option>
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="p-2 rounded-md"
          style={{
            border: "1px solid #b0b3f5",
            color: "#2e3277",
          }}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

       
      <div className="overflow-x-auto bg-white rounded-md shadow-md">
        <table className="min-w-full">
          <thead style={{ backgroundColor: "#c2c8f9", color: "#454aab" }}>
            <tr className="text-left border-b">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Role</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, i) => (
              <tr
                key={i}
                className="border-b"
                style={{ cursor: "default" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f2f4fd")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "white")
                }
              >
                <td className="p-3" style={{ color: "#2e3277" }}>
                  {user.name}
                </td>
                <td className="p-3" style={{ color: "#2e3277" }}>
                  {user.email}
                </td>
                <td className="p-3" style={{ color: "#2e3277" }}>
                  {user.role}
                </td>
                <td className="p-3">
                  <span
                    className="font-semibold"
                    style={{
                      color:
                        user.status === "Active" ? "#16a53c" : "#d94f4f",
                    }}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="text-sm text-blue-600 hover:underline mr-2">
                    Edit
                  </button>
                  <button className="text-sm text-red-600 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
