import React, {Component} from 'react';
import PropTypes from 'prop-types';

import classes from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Auxiliary from "../../../hoc/Auxiliary";
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Auxiliary>
                <AuthContext.Consumer>
                    { (context) => context.authenticated ? "Authenticated" : "Not Authenticated"}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    // ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef }
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    changed: PropTypes.func,
    age: PropTypes.number
};

export default withClass(Person, classes.Person);
