import React from 'react';

export default class MushroomDetailsComponent extends React.Component {
    constructor(props) {
        parent(props);

        this.props = props;
    }

    render() {
        return (
            <div>
                <label>Common name: </label>
                {this.props.mushroom.commonName}
                <label>Latin name: </label>
                {this.props.mushroom.latinName}
            </div>
        );
    }


}
