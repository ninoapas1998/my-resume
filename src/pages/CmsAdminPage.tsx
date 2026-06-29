

export default function CmsAdminPage() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">CMS Admin Dashboard</h1>
          
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-lg font-semibold mb-2">Total Views</h2>
            <p className="text-4xl font-bold text-blue-400">1,234</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-lg font-semibold mb-2">Total Downloads</h2>
            <p className="text-4xl font-bold text-green-400">56</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h2 className="text-lg font-semibold mb-2">Active Users</h2>
            <p className="text-4xl font-bold text-yellow-400">12</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-2xl font-bold mb-4">Manage Content</h2>
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
