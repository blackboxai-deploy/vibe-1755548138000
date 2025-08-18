export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Hello World
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Welcome to your simple single page application built with Next.js and Tailwind CSS
        </p>
        <div className="pt-4">
          <div className="inline-block px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200">
            <p className="text-sm text-gray-500">
              🚀 Ready to explore!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}