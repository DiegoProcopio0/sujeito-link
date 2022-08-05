import { FiLink } from "react-icons/fi";

import Menu from "../../components/Menu";

import "./home.css";

function Home() {
  return (
    <div className="container-home">
      <div className="logo">
        <img src="./logo.png" alt="logo" />
        <h1>SujeitoLink</h1>
        <span>Cole seu link aqui para encurtar 👇.</span>
        <div className="area-input">
          <div>
            <FiLink size={24} color="#fff" />
            <input placeholder="Cole seu link aqui..." />
          </div>
        </div>
        <button>Encurtar Link</button>
      </div>

      <Menu />
    </div>
  );
}

export default Home;
