import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const dogs = [
  {
    src: 'assets/images/puppies.jpg',
    altText: 'dogs',
    header: 'Exciting',
    caption: 'Have an Adventure'
  },
  {
    src: 'assets/images/puppy.jpg',
    altText: 'dog',
    header: 'Train',
    caption: 'Trainable with lots of treats and hugs'
  },
   {
    src: 'assets/images/dogs_playing.jpg',
    altText: 'dog',
    header: 'Fun Times',
    caption: 'Entertaining and cute to Watch!'
  }
];

class Dogcarousel extends Component {
    render(){
        return (
            <div className="m-3">
                <UncontrolledCarousel  items={dogs} />
            </div>
        );
    }
}

export default Dogcarousel;