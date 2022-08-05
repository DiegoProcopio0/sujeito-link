import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./links.css";

function Links() {
  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>
      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#fff" />
          http://localhost:3000/links
        </button>
        <button className="link-delete">
          <FiTrash size={18} color="#ff5454" />
        </button>
      </div>
      <div className="links-item">
        <button className="link">
          <FiLink size={18} color="#fff" />
          http://localhost:3000/links
        </button>
        <button className="link-delete">
          <FiTrash size={18} color="#ff5454" />
        </button>
      </div>
    </div>
  );
}

export default Links;
