import React, { useState } from "react";
import "../styles/Write.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const Write = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <NavBar />
      <div className="add">
        <div className="content">
          <input type="text" placeholder="Title" />
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input style={{ display: "none" }} type="file" id="file" />
            <label className="file" htmlFor="file">
              Upload Image
            </label>
            <div className="buttons">
              <button>Save as draft</button>
              <button>Update</button>
            </div>
          </div>
          <div className="item">
            <h1>Category</h1>
            <div className="cat">
              <input type="radio" name="cat" value="art" id="art" />
              <label htmlFor="art">Art</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="science" id="art" />
              <label htmlFor="science">Science</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="technology" id="art" />
              <label htmlFor="technology">Technology</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="cinema" id="art" />
              <label htmlFor="cinema">Cinema</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="design" id="art" />
              <label htmlFor="design">Design</label>
            </div>
            <div className="cat">
              <input type="radio" name="cat" value="food" id="art" />
              <label htmlFor="food">Food</label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Write;
