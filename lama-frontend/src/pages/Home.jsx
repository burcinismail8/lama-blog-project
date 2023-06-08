import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.scss";
const Home = () => {
  const navigate = useNavigate();
  const posts = [
    {
      id: "1",
      title: "Lorem ipsum dolor sit elit, sed do eiusmod",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: "2",
      title: "2Lorem ipsum dolor sit elit, sed do eiusmod",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: "3",
      title: "3Lorem ipsum dolor sit elit, sed do eiusmod",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
    {
      id: "4",
      title: "4Lorem ipsum dolor sit elit, sed do eiusmod",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    },
  ];
  return (
    <>
      <NavBar />
      <div className="home">
        <div className="posts">
          {posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button onClick={() => navigate(`/post/${post.id}`)}>
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
