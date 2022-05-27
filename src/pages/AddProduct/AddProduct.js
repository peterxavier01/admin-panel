import "./AddProduct.css";

const AddProduct = () => {
  return (
    <div className="add-product">
      <h1 className="add-product-title">New Product</h1>
      <form className="add-product-form">
        <div className="add-product-input">
          <label htmlFor="image">Image</label>
          <input type="file" id="image" className="file" />
        </div>
        <div className="add-product-input">
          <label htmlFor="name">Product Name</label>
          <input type="text" id="name" placeholder="Iphone 12 Pro Max" />
        </div>
        <div className="add-product-input">
          <label htmlFor="stock">Stock</label>
          <input type="number" id="stock" />
        </div>
        <div className="add-product-input">
          <label htmlFor="active">Active</label>
          <select id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
          </select>
        </div>
        <div className="add-product-btn">
          <button>Create</button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
