import React from 'react';
import { Card, CardImg } from 'reactstrap';

function RenderDirectoryItem({campsite}) {
    return (
        <Card>
            <CardImg width="100%" src={campsite.image} alt={campsite.name} />
        </Card>
    );
}

function Directory(props) {

    const directory = props.campsites.map(campsite => {
        return (
            <div key={campsite.id} className="col-md-4">
                <RenderDirectoryItem campsite={campsite} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;