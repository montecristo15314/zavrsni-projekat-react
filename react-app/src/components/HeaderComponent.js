import React from 'react';

export default class HeaderComponent extends React.Component {
    render() {

        return (
            <div className="head-wrapper">
                <h1>Offline Mushroom database</h1>
                <button className="add-new-mushroom" onClick={this.props.toggleVisibility}>ADD NEW MUSHROOM</button>
            </div>
            

        );
    }
}
