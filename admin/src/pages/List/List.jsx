import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {

  const [list, setList] = useState([]);

  // Fetch food list
  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      if (response.data.success) {
        setList(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Error fetching food list");
      }
    } catch (error) {
      toast.error("Failed to fetch data");
      console.error("Fetch error:",error);
    }
  };

  // Remove food item
  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
      if (response.data.success) {
        toast.success(response.data.message);
        fetchList(); // Refresh list after deletion
      } else {
        toast.error("Error removing");
      }
    } catch (error) {
      toast.error("Failed to remove item");
      console.error("Error removing :", error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Notices List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Action</b>
        </div>
        {list.length > 0 ? (
          list.map((item) => (
            <div key={item._id} className='list-table-format'>
              <img src={`${url}/images/${item.image}`} alt={item.name} />
              <p>{item.name}</p>
              <p>{item.category}</p>
              
              <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
            </div>
          ))
        ) : (
          <p>No Notice found.</p>
        )}
      </div>
    </div>
  );
};

export default List;