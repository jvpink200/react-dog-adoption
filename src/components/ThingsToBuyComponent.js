import React, { Component } from 'react';
import '../styling.css';
class BuyItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogs: [
                {
                    id:0,
                    image: 'assets/images/dog_toys.jpg',
                    altText: 'dog toys'
                },
                {
                    id:1,
                    image: 'assets/images/dog_house.jpg',
                    altText: 'dog collar'
                },
                {
                    id:2,
                    image: 'assets/images/dog_bed.jpg',
                    altText: 'dog bowls'
                },
                {
                    id:3,
                    image:'assets/images/dog_collar.jpg',
                    altText: 'dog house'
                }
            ]
        };
    }
    render(){
        const BuyItemsImages = this.state.dogs.map(dog => {
            return (
                <div key={dog.id} className="col-xs-12 col-md-6 pt-4">
                    <img src={dog.image} class="dog-items" alt={dog.altText} />
                </div>
            );
        });

        return (
            <div className="pt-2 container">
                <h2 className="text-center text-info">Things to Buy!!</h2>
                <div className="row text-center">
                    {BuyItemsImages}
                </div>
            </div>
        );
    }
}

export default BuyItems;