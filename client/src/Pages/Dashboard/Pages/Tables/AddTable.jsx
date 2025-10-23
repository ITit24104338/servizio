import React, {useState} from 'react';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';
import {createTable} from './util';

const AddTable = () => {
  const [tables, setTables] = useState ({
    capacity: 0,
    available: false,
  });

  const handleAddTable = e => {
    e.preventDefault ();
    createTable (tables.capacity, tables.available);
    console.log (tables);
    alert ('Table added successfully!');
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      {/* Breadcrumb */}
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="tables"
          main_to="/admin"
          sub_to="/admin/tables"
        />
      </div>

      {/* Page Content */}
      <div className="px-12 py-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Tables
        </h1>

        <div className="w-full bg-white rounded-xl shadow-md overflow-x-auto">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Add New Table</h2>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="capacity"
                >
                  Capacity
                </label>
                <input
                  type="number"
                  id="capacity"
                  onChange={e =>
                    setTables ({...tables, capacity: Number (e.target.value)})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter table capacity"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="available"
                >
                  Available
                </label>
                <select
                  id="available"
                  value={tables.available ? 'true' : 'false'}
                  onChange={e =>
                    setTables ({
                      ...tables,
                      available: e.target.value === 'true', // convert string to boolean
                    })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>

              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleAddTable}
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Add Table
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTable;
