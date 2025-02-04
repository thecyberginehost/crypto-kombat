export default function NotFound() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-black">
        <h1 className="text-5xl font-bold text-red-500">404: Page Not Found</h1>
        <p className="mt-4 text-lg text-gray-400">This page doesn't exist. Try going back to the homepage.</p>
        <a href="/" className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg">Go Home</a>
      </div>
    );
  }
  