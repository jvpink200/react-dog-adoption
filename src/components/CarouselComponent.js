import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const dogs = [
  {
    src: 'assets/images/puppies.jpg',
    altText: 'dogs',
    header: 'Exciting',
    caption: 'Have an Adventure',
    key: '1'
  },
  {
    src: 'assets/images/puppy.jpg',
    altText: 'dog',
    header: 'Train',
    caption: 'Trainable with lots of treats and hugs',
    key: '2'
  }
];

class Dogcarousel extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <UncontrolledCarousel  interval={false} items={dogs} />
                </div>
            </div>
        );
    }
}

export default Dogcarousel;