import React, { useState } from "react";
import users from "../data/users";

const UserTable = () => {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) &&
      (!roleFilter || u.role === roleFilter) &&
      (!statusFilter || u.status === statusFilter)
  );

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4 text-[#454aab]">
      User Management
      </h2>

      
      <div className="flex flex-col md:flex-row gap-3 mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="p-2 rounded-md border text-[#2e3277] w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ borderColor: "#b0b3f5" }}
        />

        <select
          className="p-2 rounded-md border text-[#2e3277] w-full md:w-1/4"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          style={{ borderColor: "#b0b3f5" }}
        >
          <option value="">All Roles</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
          <option value="Editor">Editor</option>
        </select>

        <select
          className="p-2 rounded-md border text-[#2e3277] w-full md:w-1/4"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ borderColor: "#b0b3f5" }}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

       
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden">
          <thead className="bg-[#c2c8f9] text-[#454aab]">
            <tr>
              <th className="text-left p-3">Name</th>
              <th className="text-left p-3">Email</th>
              <th className="text-left p-3">Role</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, i) => (
              <tr
                key={i}
                className={`transition duration-200 ${
                  i % 2 === 0 ? "bg-white" : "bg-[#f3f4ff]"
                } hover:bg-[#e4e6fb]`}
              >
                <td className="p-3 text-[#2e3277]">{user.name}</td>
                <td className="p-3 text-[#2e3277]">{user.email}</td>
                <td className="p-3 text-[#2e3277]">{user.role}</td>
                <td className="p-3 font-semibold">
                  <span
                    className={
                      user.status === "Active"
                        ? "text-[#16a53c]"
                        : "text-[#d94f4f]"
                    }
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <p className="text-center mt-4 text-[#d94f4f]">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserTable;
