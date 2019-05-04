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
        const {data} = await mushroomService.getMushrooms();

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
        return (<li key={mushroom.id} onClick={() => {this.showMushroom(mushroom)}}>
                    <label>Common name: </label>
                    {mushroom.commonName}
                    <label>Latin name: </label>
                    {mushroom.latinName}
                </li>);
    };

    render() {
        const { mushroom, mushroomDetailsVisible, mushrooms } = this.state;

        return (
            <div>
                <MushroomDetailsComponent mushroom={mushroom} toggleVisibility={this.toggleVisibility} visibility={mushroomDetailsVisible} />
                <ul>{mushrooms.map(this.renderMushroom)}</ul>
            </div>
        );
    }
}
