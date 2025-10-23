import React, {useState} from 'react';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';
import {createMenu} from './util';

const AddMenu = () => {
  const [menus, setMenus] = useState ({
    name: '',
    description: '',
    imgUrl: null,
    price: 0,
    available: false,
    catId: 1,
    ingredientIds: [2, 3],
  });

  const handleAddMenu = e => {
    e.preventDefault ();
    createMenu (menus).then (data => {
      console.log (data);
      alert ('Menu item added successfully!');
    });
    console.log (menus);
  };
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="menu"
          main_to="/admin"
          sub_to="/admin/menu"
        />
      </div>

      <div className="px-12 py-6">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Menu</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-lg shadow-md p-4 w-full col-span-4">
            <h2 className="text-2xl font-bold mb-4">Add New Menu Item</h2>

            <form className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={e => setMenus ({...menus, name: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter menu name"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  onChange={e =>
                    setMenus ({...menus, description: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter menu description"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="imgUrl"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  id="imgUrl"
                  onChange={e => setMenus ({...menus, imgUrl: e.target.value})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter image URL"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  onChange={e =>
                    setMenus ({...menus, price: parseFloat (e.target.value)})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter menu price"
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
                  value={menus.available}
                  onChange={e =>
                    setMenus ({...menus, available: e.target.value === 'true'})}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div>
                <button
                  onClick={handleAddMenu}
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Add Menu Item
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
