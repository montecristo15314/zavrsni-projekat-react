import React from 'react';
import '../css/FooterComponent.css';
import '../css/NewMushroomComponent.css';
import '../css/ListofMushroomsComponent.css';
import '../css/MushroomDetailsComponent.css';
import '../css/HeaderComponent.css';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import NewMushroomComponent from './NewMushroomComponent'
import ListOfMushroomsComponent from './ListOfMushroomsComponent';

export default class MainPage extends React.Component {
    state = {
        newMushroomVisible: false
    };

    toggleVisibility = () => {
        this.setState({newMushroomVisible: !this.state.newMushroomVisible})
    };

    render() {
        let { newMushroomVisible } = this.state;

        return (
            <div>
                <HeaderComponent toggleVisibility={this.toggleVisibility}/>

                <NewMushroomComponent toggleVisibility={this.toggleVisibility} visibility={newMushroomVisible} />

               <div className="listing-wrapper"> 
                   <ListOfMushroomsComponent />
               </div>

                <FooterComponent />
            </div>
        );
    }
}
