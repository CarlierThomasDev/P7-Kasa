import '../../styles/compenents/collapse.css'
import arrow from '../../assets/dropdown-down-arrow.png'
import { useState } from 'react'

function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false)

  const toggleContent = (event) => {
    event.stopPropagation() // Empêche la propagation du clic sur le titre
    setToggle(!toggle)
  }

  return (
    <div className="collapse">
      <h3 className="collapse_title">
        {title}
        <img
          className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
          src={arrow}
          alt="show content"
          onClick={toggleContent} // Gestionnaire de clic sur la flèche
        />
      </h3>
      <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
        {Array.isArray(content)
          ? content.map((item, index) => <p key={index}>{item}</p>)
          : content}
      </div>
    </div>
  )
}

export default Collapse
