import '../../styles/compenents/card.css';
import { Link } from 'react-router-dom';

function Card({id,title, cover }) {
    // affichage de la cover et du title d'une Card logement
    return (
        <Link to={`/fiche_logement/${id}`} className="gallery_card">
            <img src={cover} alt={title} className="gallery_image" />
            <h3 className="gallery_title">{title} </h3>
        </Link>
    )
}

export default Card