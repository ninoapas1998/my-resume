

export default function CmsAdminPage() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 shadow-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-4 flex justify-between items-center sm:px-6 lg:px-8">
          <h1 className="text-xl font-bold sm:text-2xl">CMS Admin Dashboard</h1>
          
        </div>
      </nav>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 mb-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 sm:p-6">
            <h2 className="text-lg font-semibold mb-2">Total Views</h2>
            <p className="text-3xl font-bold text-blue-400 sm:text-4xl">1,234</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 sm:p-6">
            <h2 className="text-lg font-semibold mb-2">Total Downloads</h2>
            <p className="text-3xl font-bold text-green-400 sm:text-4xl">56</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 sm:p-6">
            <h2 className="text-lg font-semibold mb-2">Active Users</h2>
            <p className="text-3xl font-bold text-yellow-400 sm:text-4xl">12</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 sm:p-6">
          <h2 className="text-xl font-bold mb-4 sm:text-2xl">Manage Content</h2>
          <div className="space-y-2">
            <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-left font-semibold">
              → Edit Profile Information
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-left font-semibold">
              → Manage Skills
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-left font-semibold">
              → Update Work Experience
            </button>
            <button className="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-left font-semibold">
              → Manage Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
