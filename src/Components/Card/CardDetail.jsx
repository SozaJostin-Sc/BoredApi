import { useState, useEffect, useCallback } from "react";
import { getBoredData } from "../../Api/api";
import Loading from "../Loading/Loading";

export default function CardDetail() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Add error state

  const fetchActivity = useCallback(async () => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const activityData = await getBoredData();
      setData(activityData);
    } catch (err) {
      console.error("Error fetching activity:", err);
      setError("We were unable to load the activity. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchActivity();
  }, [fetchActivity]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={fetchActivity}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300"
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <>
      <article className="border border-blue-300/30 rounded-2xl bg-gradient-to-br from-slate-100 to-blue-50/80 w-full max-w-md md:max-w-lg lg:w-[40%] h-auto min-h-[400px] p-6 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300 backdrop-blur-sm">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800 font-serif">
            {data.activity}
          </h2>

          <ul className="space-y-3 text-slate-700 text-base md:text-lg">
            <li className="flex items-start">
              <span className="font-semibold min-w-[120px] md:min-w-[140px] text-blue-700/90">
                Availability:
              </span>
              <span>{data.availability}</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold min-w-[120px] md:min-w-[140px] text-blue-700/90">
                Type:
              </span>
              <span>{data.type}</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold min-w-[120px] md:min-w-[140px] text-blue-700/90">
                Participants:
              </span>
              <span>{data.participants}</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold min-w-[120px] md:min-w-[140px] text-blue-700/90">
                Accessibility:
              </span>
              <span>{data.accessibility}</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold min-w-[120px] md:min-w-[140px] text-blue-700/90">
                Duration:
              </span>
              <span>{data.duration} minutes</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold min-w-[120px] md:min-w-[140px] text-blue-700/90">
                Kid Friendly:
              </span>
              <span>{data.kidFriendlyStatus}</span>
            </li>
          </ul>
        </div>

        <button
          onClick={fetchActivity}
          className="mt-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white py-3 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 font-medium"
        >
          Another Activity
        </button>
      </article>
    </>
  );
}
