import React from 'react';

export default class Add extends React.Component {
    add() {
        const input = this.refs.input.value;
        this.props.onAdd(input);
        this.refs.input.value = '';
    }

    render() {
        return <div>
            <input ref='input'/>
            <button onClick={this.add.bind(this)}>+</button>
        </div>
    }
}

