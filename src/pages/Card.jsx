import React from "react";

export default function Card() {
  return (
    <>
      <div className="py-12 border-2 border-r-red">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200 hover:bg-gray-100 transition duration-300">
              <a href="{{route('ride.show',['ride' => $ride])}}">
                <h3 className="text-lg font-semibold">Lahore to Karachi</h3>
                <p className="text-sm text-gray-600">Pik up time</p>
                <p className="text-sm text-gray-600">Return Time</p>
                <p className="text-sm text-gray-600">Male</p>
                <p className="text-sm text-gray-600">Passenger</p>
                <p className="text-sm text-gray-600">Count</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
