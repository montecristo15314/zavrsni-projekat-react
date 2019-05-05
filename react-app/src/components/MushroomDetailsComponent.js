import React from 'react';

export default class MushroomDetailsComponent extends React.Component {

    render() {
        const { toggleVisibility, visibility, mushroom } = this.props;
        const { commonName, latinName, edibility, description, image } = mushroom;

        return visibility && (
            <div className="my-modal">
                <div className="modal-content">
                    <div className="modal-child-element">
                        <label>Common name: </label>
                        {commonName}
                    </div>
                    <div className="modal-child-element">
                        <label>Latin name: </label>
                        {latinName}
                    </div>
                    <div className="modal-child-element">
                        <label>Edibility: </label>
                        {edibility}
                    </div>
                    <div className="modal-child-element">
                        <label>Description: </label>
                        {description}
                    </div>
                    <div className="modal-child-element">
                        
                        <img src={image} alt={latinName} />
                    </div>
                    <div className="modal-child-element">
                        <button onClick={toggleVisibility}>CLOSE</button>
                    </div>
                </div>
            </div>
        );
    }


}
