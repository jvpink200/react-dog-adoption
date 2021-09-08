import React, {Component} from 'react';
import { Card, CardBody, CardHeader, Media } from 'reactstrap';


class About extends Component {
     constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    id:0,
                    image: 'assets/images/person-icon-silhouette.png',
                    altText: 'placeholder',
                    title: 'Software Developer',
                    description: 'Bringing you relevant content on dogs'
                }
            ]
        };
    }
  render() {
    const profile = this.state.images.map(profileImage => {
            return (
              <Card key={profileImage.id}>
                <img
                  src={profileImage.image}
                  class="placeholder image"
                  alt={profileImage.altText}
                />
                <CardBody>
                  <p>{profileImage.title}</p>
                  {profileImage.description}
                </CardBody>
              </Card>
            );
        });

        return (
          <div className="container">
            <div className="row row-content text-center mt-3">
              <div className="col-sm-12">
                <h3>Our Mission</h3>
                <p>
                  Helping you find the perfect companion for your lifestyle!
                  Furthermore, its a top priority to provide you with useful
                  tips when caring for a dog as well as help you choose the best
                  items to buy for your dog!
                </p>
              </div>
              <div className="col">
                <Card className="bg-light mt-3">
                  <CardBody>
                    <blockquote className="blockquote">
                      <p className="mb-0">
                        I will not follow where the path may lead, but I will go
                        where there is no path, and I will leave a trail.
                      </p>
                      <footer className="blockquote-footer">
                        Muriel Strode,{" "}
                        <cite title="Source Title">
                          "Wind-Wafted Wild Flowers" - The Open Court, 1903
                        </cite>
                      </footer>
                    </blockquote>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="row row-content text-center">
              <div className="col"></div>
              <div className="col-sm-12 col-md-4 mt-4 mx-auto mb-5">
                <Media list>{profile}</Media>
              </div>
              <div className="col"></div>
            </div>
          </div>
        );
  }
}

export default About;