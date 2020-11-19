import React, {Component} from 'react';

class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xx: 1
        }
    }

    render() {
        const { match} = this.props
        return (
            <div>
                <h1>create！{match.params.id}</h1>
            </div>
        );
    }
}

export default Create;