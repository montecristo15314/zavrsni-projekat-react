import React from 'react';

export default class NewMushroomComponent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        commonName: '',
        latinName: '',
        description: '',
        // edibility: '',
        // image: '',
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

    // handleChangeEdibility = (event) => {
    //   this.setState({edibility: event.target.value});
    // };

    handleSubmit = (event) => {
      event.preventDefault();

      //TODO: ovde ide submit statea na server kroz neki servis
      console.log('submit to server');
    };

    render() {
      return (
        <div>
          <h2>Enter the mushroom details</h2>
          <form onSubmit={this.handleSubmit}>
            <label>Common name: </label>
            <input type='text' placeholder='Common name' value={this.state.commonName} onChange={this.handleChangeIme} />

            <label>Latin name: </label>
            <input type='text' placeholder='Latin name' value={this.state.latinName} onChange={this.handleChangePrezime} />

            <label>Description: </label>
            <input type='textarea' placeholder='Description' value={this.state.description} onChange={this.handleChangeDescription} />

            <input type='submit' value='Submit' />
          </form>
        </div>
      );
    }
  }
