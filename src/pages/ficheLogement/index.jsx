import React, { useEffect, useState } from 'react'
import Slider from '../../components/Slider'
import { useParams } from 'react-router-dom'
import data from '../../data/data'
import red_star from '../../assets/red_star.png'
import grey_star from '../../assets/grey_star.png'
import Collapse from '../../components/Collapse'
// import Error from '../../components/Error'
import '../../styles/pages/ficheLogement.css'

const FicheLogement = () => {
  const [accomodation, setAccomodation] = useState(1)
  const [load, setLoad] = useState(false)
  const [error, setError] = useState(false)

  const { id } = useParams()

  useEffect(() => {
    setAccomodation(data.filter((appart) => appart.id === id)[0])
    setLoad(true)
    // gestion erreur id logement
    if (data.filter((appart) => appart.id === id)[0] === undefined) {
      setError(true)
    }

    // eslint-disable-next-line
  }, [])

  // mise en attente
  if (!load) {
    return <div>loading</div>
  }
  if (error) {
    return <Erreur404 />
  }

  return (
    <div>
      {/* affichage du header et du slider  sur la page fiche logement */}

      <Slider images={accomodation.pictures} />
      <main className="accomodation">
        <div className="accomodation_content">
          <div className="accomodation_content_infos">
            {/* on va chercher les infos de data.js */}
            <h1>{accomodation.title}</h1>
            <p>{accomodation.location}</p>
            <div className="accomodation_tags">
              {/* map pour récupérer les tags */}
              {accomodation.tags.map((tag, index) => {
                return (
                  <button key={index} disabled="disabled">
                    {tag}{' '}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
        <div className="accomodation_content_host">
          <div className="accomodation-content_host_name_picture">
            <div className="accomodation_content_host_name">
              <h3>{accomodation.host.name}</h3>
            </div>
            <img src={accomodation.host.picture} alt="Hôte de ce logement" />
          </div>
          <div className="accomodation_content_host_stars">
            {/* création map sous un array pour affichage des étoiles */}
            {[...Array(5)].map((_star, index) => {
              const ratingValue = index + 1
              return (
                <img
                  key={index}
                  src={
                    ratingValue <= accomodation.rating ? red_star : grey_star
                  }
                  alt="évaluation"
                />
              )
            })}
          </div>
        </div>
      </main>
      <div className="fiche-logement">
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_item">
            {/* import de Collapse pour description et équipements */}
            <Collapse
              title={'Description'}
              content={accomodation.description}
            />
          </div>
          <div className="accomodation_collapse_item">
            <Collapse title={'Équipements'} content={accomodation.equipments} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FicheLogement
