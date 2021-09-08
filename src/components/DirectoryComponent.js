import React from 'react';
import { Card, CardImg } from 'reactstrap';

function RenderDirectoryItem({dogItem}) {
    return (
        <Card>
            <CardImg width="100%" src={dogItem.image} alt={dogItem.name} />
        </Card>
    );
}

function Directory(props) {

    const directory = props.dogItems.map(dogItem => {
        return (
            <div key={dogItem.id} className="col-md-4">
                <RenderDirectoryItem dogItem={dogItem} />
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