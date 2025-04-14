import '../../styles/compenents/slider.css';
import React, { useState } from 'react';
import BtnSLider from '../BtnSlider';

function Slider({ images }) {

    const [slideIndex, setSlideIndex] = useState(0)

    const nextSlide = () => {
        if (slideIndex !== images.length - 1) {
            setSlideIndex(slideIndex + 1)
        }
        else {
            setSlideIndex(0)
        }
    }

    const previousSlide = () => {
        if (slideIndex !== 0) {
            setSlideIndex(slideIndex - 1)
        }
        else {
            setSlideIndex(images.length - 1)
        }
    }

    return (
        <div className='container-slider'>
            <div className={slideIndex === slideIndex + 1 ? "slide active-anim" : "slide"}>
                <img
                    src={images[slideIndex]}
                    alt="Apparence du logement"
                />
            </div>

            {/* gestion de la pagination des images */}
            <div className={images.length === 1 ? "hidding-pagination" : 'container-pagination'}>
                {slideIndex + 1}/{images.length}
            </div>
            {/* affichage des flèches */}
            <div className={images.length === 1 ? "hidding-buttons" : "container-arrows"}>
                <BtnSLider moveSlide={previousSlide} direction={"previous"} />
                <BtnSLider moveSlide={nextSlide} direction={"next"} />
            </div>
        </div >
    );
};
export default Slider