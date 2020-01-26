import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'

class LevelSelector extends Component {
    
    render() {
        const { availableLevels } = this.props;
        
        return (
            <div>
                <Dropdown
                    placeholder='Select Level'
                    fluid
                    search
                    selection
                    options={availableLevels}
                />
            </div>
        )
    }
}

export default LevelSelector;