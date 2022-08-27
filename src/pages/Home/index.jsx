import { useState } from "react";
import { FiLink } from "react-icons/fi";

import LinkItem from "../../components/LinkItem";
import Menu from "../../components/Menu";

import api from "../../../src/services/api"

import { saveLink } from "../../services/storeLinks"

import "./home.css";

function Home() {

  const [link, setLink] = useState('')
  const [data, setData] = useState({})
  const [showModal, setShowModal] = useState(false)

async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link
      })
      setData(response.data)
      setShowModal(true)
      saveLink("encurtarLInk", response.data)
      setLink("")
    } catch {
      alert("Ops parece que algo deu errado")
      setLink("")
    }
  }

  return (
    <div>
    <div className="container-home">
      <div className="logo">
        <img src="./logo.png" alt="logo" />
        <h1>SujeitoLink</h1>
        <span>Cole seu link aqui para encurtar 👇.</span>
        <div className="area-input">
          <div>
            <FiLink size={24} color="#fff" />
            <input 
              placeholder="Cole seu link aqui..."   
              value={link} 
              onChange={ (e) => setLink(e.target.value) }
            />
          </div>
        </div>
        <button onClick={handleShortLink}>
          Encurtar Link
        </button>
      </div>

      <Menu />

    </div>
    {
        showModal && (
          <LinkItem 
            closeModal={() => setShowModal(false)}
            content={data}
          />
        )
      }
    </div>
  );
}

export default Home;
