import React from 'react';
import MushroomDetailsComponent from './MushroomDetailsComponent';
import mushroomService from '../services/MushroomService';

export default class ListOfMushroomsComponent extends React.Component {

    state = {
        mushroomDetailsVisible: false,
        mushrooms: [],
        mushroom: {}
    };

    async componentDidMount() {
        await this.reloadMushroomsFromBackend();
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.mushroomDetailsVisible && !this.state.mushroomDetailsVisible) {
            await this.reloadMushroomsFromBackend();
        }
    }

    reloadMushroomsFromBackend = async () => {
        const { data } = await mushroomService.getMushrooms();

        this.setState({
            mushrooms: data
        });
    };

    toggleVisibility = () => {
        this.setState({
            mushroomDetailsVisible: !this.state.mushroomDetailsVisible
        });
    };

    showMushroom = (mushroom) => {
        this.setState({
            mushroomDetailsVisible: true,
            mushroom: mushroom
        });
    }

    renderMushroom = (mushroom) => {
        return (
            <div className="mushroom-wrapper" key={mushroom.id} onClick={() => { this.showMushroom(mushroom) }}>

                <div>
                    <label>Common name: </label>
                    {mushroom.commonName}
                </div>
                <div>
                    <label>Latin name: </label>
                    {mushroom.latinName}
                </div>
                <p>Click to read more...</p>
              
            </div>);
    };

    render() {
        const { mushroom, mushroomDetailsVisible, mushrooms } = this.state;

        return (
            <React.Fragment>
                <MushroomDetailsComponent mushroom={mushroom} toggleVisibility={this.toggleVisibility} visibility={mushroomDetailsVisible} />
                {mushrooms.map(this.renderMushroom)}
            </React.Fragment>
        );
    }
}
