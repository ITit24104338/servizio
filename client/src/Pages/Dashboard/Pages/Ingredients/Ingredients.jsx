import {useEffect, useState} from 'react';
import BreadCrumb from '../../../../Components/BradCrumb/BreadCrumb';
import {Leaf, Pencil, Trash2} from 'lucide-react';
import {deleteIngredient, getIngredients} from './util';
import {useNavigate} from 'react-router-dom';

const Ingredients = () => {
  const data = {
    code: 200,
    message: 'OK',
    data: [
      {
        ingId: 1,
        name: 'rice',
      },
    ],
  };
  const [ingredients, setIngredients] = useState (data);
  const navigator = useNavigate ();

  useEffect (() => {
    getIngredients ().then (res => setIngredients (res));
  }, []);

  const handleUpdate = id => {
    navigator (`edit/${id}`);
    console.log ('Update clicked for ID:', id);
  };

  const handleDelete = id => {
    deleteIngredient (id);
    setIngredients (prevState => ({
      ...prevState,
      data: prevState.data.filter (ingredient => ingredient.ingId !== id),
    }));
    console.log ('Delete clicked for ID:', id);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-100 to-white">
      {/* Breadcrumb */}
      <div className="w-full px-8 py-6 flex items-center justify-between bg-white shadow">
        <BreadCrumb
          main_title="admin"
          sub_title="ingredients"
          main_to="/admin"
          sub_to="/admin/ingredients"
        />
      </div>

      {/* Page Content */}
      <div className="px-12 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
            Ingredients
          </h1>
          <button
            onClick={() => navigator ('new')}
            className="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add New Ingredient
          </button>
        </div>

        <div className="w-full bg-white rounded-xl shadow-md overflow-x-auto">
          {ingredients.data.length > 0
            ? <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Ingredient Name
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {ingredients.data
                    .sort ((a, b) => a.ingId - b.ingId)
                    .map (ingredient => (
                      <tr
                        key={ingredient.ingId}
                        className="hover:bg-gray-50 transition"
                      >
                        <td className="px-6 py-4 text-sm text-gray-800">
                          {ingredient.ingId}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-800 capitalize">
                          <div className="flex items-center gap-2">
                            <Leaf className="w-4 h-4 text-green-500" />
                            {ingredient.name}
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-right">
                          <div className="flex justify-end gap-3">
                            {/* Update Button */}
                            <button
                              onClick={() => handleUpdate (ingredient.ingId)}
                              className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                            >
                              <Pencil className="w-4 h-4" />
                              Edit
                            </button>

                            {/* Delete Button */}
                            <button
                              onClick={() => handleDelete (ingredient.ingId)}
                              className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition"
                            >
                              <Trash2 className="w-4 h-4" />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            : <div className="p-6 text-center text-gray-500">
                No ingredients found.
              </div>}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
