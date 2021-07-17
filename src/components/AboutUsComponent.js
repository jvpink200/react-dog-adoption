import React, {Component} from 'react';

class About extends Component {
     constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    id:0,
                    image: 'assets/images/person-icon-silhouette.png',
                    altText: 'placeholder'
                }
            ]
        };
    }
  render() {
    const myImages = this.state.images.map(myImage => {
            return (
                <div key={myImage.id} className="col pt-4">
                    <img src={myImage.image} class="placeholder image" alt={myImage.altText} />
                </div>
            );
        });

        return (
            <div className="pt-2 container">
                <h2>About</h2>
                <div className="row">
                    {myImages}
                </div>
            </div>
        );
  }
}

export default About;