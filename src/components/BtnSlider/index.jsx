import React from 'react';
import rightArrow from '../../assets/right_arrow.png';
import leftArrow from '../../assets/left_arrow.png';


function BtnSLider({ direction, moveSlide }) {
    return (
        // on regarde la direction du bouton selon ce qui est mentionné dans Slider.js, si c'est next on affiche la flèche droite sinon la gauche.
        <button onClick={moveSlide} className={direction === "next" ? 'btn-slide next' : "btn-slide previous"}>
            <img src={direction === "next" ? rightArrow : leftArrow} alt="Flèche de direction" />
        </button>
    );
};

export default BtnSLider;