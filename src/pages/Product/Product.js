import "./Product.css";
import { useParams, Link } from "react-router-dom";
import Chart from "../../components/Chart/Chart";
import { productData } from "../../data";
import Phone from "../../assets/phone.jpg";
import { Publish } from "@material-ui/icons";

const Product = () => {
  const params = useParams();
  return (
    <div className="product"> 
      <div className="user-nav">
        <h1 className="user-nav-title">Product Id: {params.productId}</h1>
        <Link to="/add-product">
          <button className="user-nav-btn">Create</button>
        </Link>
      </div>
      <div className="product-container">
        <div className="product-top">
          <div className="product-top-left">
            <Chart
              data={productData}
              title="Product Analytics"
              dataKey="Sales"
              aspect={4}
            />
          </div>
          <div className="product-top-right">
            <div className="product-preview">
              <img src={Phone} alt="product" />
              <div className="preview-text">
                <p>Apple.com</p>
                <p>Iphone 12 Pro Max</p>
              </div>
            </div>
            <div className="preview-details">
              <p>
                <span>Sales</span>: $800000
              </p>
              <p>
                <span>Qty</span>: 500
              </p>
              <p>
                <span>Cost</span>: $60000
              </p>
              <p>
                <span>Profit</span>: $740000
              </p>
            </div>
          </div>
        </div>
        <div className="product-bottom">
          <div className="product-bottom-left">
            <form id="product-form">
              <div className="product-input-container">
                <label htmlFor="name">Product Name</label>
                <input type="text" id="name" placeholder="Iphone 12 Pro Max" />
              </div>
              <div className="product-input-container">
                <label htmlFor="stock">In Stock</label>
                <select id="stock">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="product-input-container">
                <label htmlFor="distribution">In Distribution</label>
                <select id="distribution">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </form>
          </div>
          <div className="product-bottom-right">
            <div className="bottom-right-preview">
              <img src={Phone} alt="Iphone" />
              <input type="file" id="product-upload" className="product-file" />
              <label htmlFor="product-upload">
                <Publish className="product-upload-icon" />
              </label>
            </div>
            <div className="product-update-btn">
              <button>Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
