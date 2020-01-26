import React, { Component } from 'react'

import './style.css';

class CharacterItem extends Component {

    constructor(props) {
        super(props)
        // console.log(props)
        this.state = {
          editMode: false
        };

        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.numberControl = this.numberControl.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.blurInput = this.blurInput.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    toggleEditMode() {
        this.setState({editMode: !this.state.editMode});
    }

    handleKeyPress(event) {
        if (event.key !== 'Enter') return;

        const { itemID, updateCount } = this.props

        updateCount(itemID, event.target.value)
        this.toggleEditMode();
    }

    handleChange(event) {
        this.setState({Count: event.target.value});
    }

    blurInput(event) {
        const { itemID, updateCount } = this.props

        updateCount(itemID, event.target.value)
        this.toggleEditMode();
    }
    
    componentDidUpdate() {
        
        if (this.input) {
            this.input.focus();
        }

    }

    numberControl(editMode) {
        const { Count, RequiredCount } = this.props;
        if (editMode) return (
            <input style={{width: "6em"}} onChange={this.handleChange} defaultValue={Count} onKeyPress={this.handleKeyPress} onFocus={e => e.target.select()} onBlur={this.blurInput} ref={i => {this.input = i}}/>
        );

        return (
            <div className="element" onClick={this.toggleEditMode}>
                        <span className={Count >= RequiredCount ? "requiredMet" : "requiredMissed"}>
                            {Count}
                        </span>
                        <span>
                            /
                        </span>
                        <span>
                            {RequiredCount}
                        </span>
                    </div>
        );
    }

    render() {
        const { ImageURL } = this.props;

        return (
            <div style={{textAlign: "center", width: "6em"}}>
                <div>
                    <img alt={ImageURL} onClick={this.toggleEditMode} src={ImageURL || "https://vignette.wikia.nocookie.net/project-qt/images/7/77/BattlePermit.png/revision/latest?cb=20190823175215"} style={{width: "4em"}} />
                </div>
                {this.numberControl(this.state.editMode)}
            </div>
        )
    }
}

export default CharacterItem;
