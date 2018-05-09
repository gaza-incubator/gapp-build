import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/components/tools.less';

export default class Tools extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <ul className="tools">
                {this.props.list.map((item, key) =>
                <li key={key} className={item + ' ' + this.props.type}>
                    <img src={'lib/images/icons/' + (this.props.type == 'node' ? item + '-' : '') + this.props.type + '.svg'} />
                    {item.charAt(0).toUpperCase() + item.substr(1)}
                </li>
                )}
            </ul>
        )
    }
}