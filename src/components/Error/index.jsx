import { Link } from 'react-router-dom'
import '../../styles/compenents/error.css'

function Error(){
    return(
        <div className='erreur'>
			<div className="erreur_infos">
				<h1 className='erreur_infos_title'>404</h1>
				<p className='erreur_infos_content'>Oups! La page que <span>vous demandez n'existe pas.</span></p>
			</div>
			<Link className='erreur_infos_return' to='/'>Retourner sur la page d'accueil</Link>
		</div>
    )
}

export default Error