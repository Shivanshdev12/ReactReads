import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class fab extends Component {
    render() {
        return (
            <div className="open-search">
                <Link to={'/search'}>
                    Go to search
                </Link>
            </div>
        )
    }
}
