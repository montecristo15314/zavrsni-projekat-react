import React from 'react';
import mushroomService from '../services/MushroomService';

export default class NewMushroomComponent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        commonName: '',
        latinName: '',
        description: '',
        edibility: 'Inedible',
        image: ''
      };
    }

    handleChangeCommonName = (event) => {
      this.setState({commonName: event.target.value});
    };

    handleChangeLatinName = (event) => {
      this.setState({latinName: event.target.value});
    };

    handleChangeDescription = (event) => {
      this.setState({description: event.target.value});
    };

    handleChangeEdibility = (event) => {
      this.setState({edibility: event.target.value});
    };

    handleChangeImage = (event) => {
      this.setState({image: event.target.value});
    };

    handleSubmit = async (event) => {
      event.preventDefault();

      console.log('submit to server');

      await mushroomService.postMushroom(this.state);

      this.props.toggleVisibility();

    };

    render() {
      let { visibility, toggleVisibility } = this.props;

      return visibility && (
        <div className="my-modal" id="modal-add-mushroom">
          <div className="modal-content">
          <span className="close close-modal" onClick={toggleVisibility}>&times;</span>
          <h2>Enter the mushroom details</h2>

          <form onSubmit={this.handleSubmit}>

            <label>Common name: </label>
            <input type='text' placeholder='Common name' value={this.state.commonName} onChange={this.handleChangeCommonName} required="required" />

            <label>Latin name: </label>
            <input type='text' placeholder='Latin name' value={this.state.latinName} onChange={this.handleChangeLatinName} required="required" />

            <label>Description: </label>
            <input type='textarea' placeholder='Description' value={this.state.description} onChange={this.handleChangeDescription} required="required" />

            <label>Edibility: </label>
            <select value={this.state.edibility} onChange={this.handleChangeEdibility}>
              <option value='Inedible'>Inedible</option>
              <option value='Edible'>Edible</option>
              <option value='Poisonous'>Poisonous</option>
            </select>

            <label>Image URL: </label>
            <input type='text' placeholder='Image URL' value={this.state.image} onChange={this.handleChangeImage} required="required"/>

            <input type='submit' value='Submit' />
          </form>
          </div>
        </div>
      );
    }
  }
