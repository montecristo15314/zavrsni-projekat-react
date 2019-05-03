import React from 'react';

export default class ListOfMushroomsComponent extends React.Component {
    constructor(props) {
        parent(props);
        this.props = props;
    }

    renderMushroom = (mushroom) => {
        <li>
            <label>Common name: </label>
            {mushroom.commonName}
            <label>Latin name: </label>
            {mushroom.latinName}
        </li>
    };

    render() {
        const { mushrooms } = this.props;

        return (
            <ul>{mushrooms.map(this.renderMushroom)}</ul>
        );
    }
}
