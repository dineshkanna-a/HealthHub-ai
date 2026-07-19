export default function navbar() {
  return (
    <nav className="flex justify-between items-center p-5 bg-white shadow-md">

      <h2 className="text-2xl font-bold text-blue-600">
        🏥 HealthHub
      </h2>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Login
      </button>

    </nav>
  );
}