import React from "react";
import { Routes, Route } from "react-router-dom";
import News from "../pages/News";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import NotFound from "../pages/NotFound";
import "../styles.css";

const Article = () => {
  return (
    <article className="article">
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </article>
  );
};

export default Article;
