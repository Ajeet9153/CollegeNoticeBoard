import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets.js'
import axios from "axios";
import { toast } from 'react-toastify';

const Add = ({ url }) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Select"
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // ✅ Manually validate the file input
    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    if (data.category === "Select") {
      toast.error("Please select a valid category.");
      return;
    }

    if (data.price <= 0) {
      toast.error("Price must be greater than 0.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      
      formData.append("category", data.category);
      formData.append("image", image);

      const response = await axios.post(`${url}/api/food/add`, formData);

      if (response.data.success) {
        setData({ name: "", description: "", category: "Select" });
        setImage(null);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error adding Notices. Check server connection.");
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="Upload" />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id='image'
            hidden
          />
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' required />
        </div>
        <div className="add-product-description flex-col">
          <p>Product Description</p>
          <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
        </div>
  
          <div className="add-category flex-col">
            <p>Notices </p>
            <select onChange={onChangeHandler} value={data.category} name="category" required>
              <option value="Select">Select</option>
              <option value="Dept. Of Computer Application">Dept. Of Computer Application</option>
              <option value="Dept. Of Chemestry">Dept. Of Chemestry</option>
              <option value="Dept. Of Physicss">Dept. Of Physicss</option>
              <option value="Dept. Of Geology">Dept. Of Geology</option>
              <option value="Dept. Of Hindi">Dept. Of Hindi</option>
              <option value="Dept. Of Forign Language">Dept. Of Forign Language</option>
              <option value="Dept. Of B.Tech">Dept. Of B.Tech</option>
              <option value="Dept. Of M.Tech">Dept. Of M.Tech</option> 
            </select>
          </div>
          
       
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  );
};

export default Add;