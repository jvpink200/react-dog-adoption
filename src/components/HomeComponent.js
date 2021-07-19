import React from 'react';
//import { Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import Dogcarousel from './DogCarouselComponent';
import BuyItems from './ThingsToBuyComponent';

function Home() {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <Dogcarousel />
                </div>
               
            </div>
             <BuyItems />
        </React.Fragment>
    );
}

export default Home;