import { useState } from "react";

export function Aside({ show }) {
  return (
    <aside
      className={`${show} bg-white dark:bg-gray-800 text-black dark:text-white w-full md:w-64 h-auto md:h-screen shadow-xl p-4 md:static fixed top-14 md:top-0 z-10 transition-all`}
    >
      <h2 className="text-lg font-bold mb-6">My Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <a href="#" className="hover:text-blue-500">
          Home
        </a>
        <a href="#" className="hover:text-blue-500">
          Analytics
        </a>
        <a href="#" className="hover:text-blue-500">
          Users
        </a>
        <a href="#" className="hover:text-blue-500">
          Settings
        </a>
      </nav>
    </aside>
  );
}

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-700">
      {/* Topbar with toggles */}
      <div className="w-full flex justify-between items-center p-4 md:hidden bg-white dark:bg-gray-800 shadow-md z-20">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-800 dark:text-white"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      {sidebarOpen && <Aside show={"block"} />}
      <Aside show={"xs:hidden"} />

      {/* Main Content */}
      <main className="flex-1 md:ml-64 mt-16 md:mt-0 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Users</h2>
            <p className="text-2xl font-bold">1,200</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Revenue</h2>
            <p className="text-2xl font-bold">$34,000</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2">Performance</h2>
            <p className="text-2xl font-bold">89%</p>
          </div>
        </div>
      </main>
    </div>
  );
}
