import React from 'react';

export default class HeaderComponent extends React.Component {
    render() {

        return (
            <div>
                <h1>TODO: ubaciti header sa imenom iz localStorage i linkovima</h1>
                <button onClick={this.props.toggleVisibility}>ADD NEW MUSHROOM</button>
            </div>
           
        );
    }
}
