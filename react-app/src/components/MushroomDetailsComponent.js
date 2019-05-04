import React from 'react';

export default class MushroomDetailsComponent extends React.Component {

    render() {
        const { toggleVisibility, visibility, mushroom } = this.props;
        const {commonName, latinName, edibility, description, image} = mushroom;

        return visibility && (
            <div>
                <label>Common name: </label>
                {commonName}
                <label>Latin name: </label>
                {latinName}
                <label>Edibility: </label>
                {edibility}
                <label>Description: </label>
                {description}
                <label>Image: </label>
                <img src={image} alt={latinName} />

                <button onClick={toggleVisibility}>CLOSE</button>
            </div>
        );
    }


}
