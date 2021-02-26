import React from 'react';
import TypeColors from './typeColors';
import './card.css';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card_img">
                <img src={pokemon.sprites.other["official-artwork"].front_default} alt="" />
            </div>
            <div className="Card_name">
                {pokemon.name} 
            </div>
            <div className="Card_types" >
                {
                    pokemon.types.map( type => {
                        return (
                            <div className="Card_type" style={{ backgroundColor: TypeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>  
        </div>
    )
}
export default Card;