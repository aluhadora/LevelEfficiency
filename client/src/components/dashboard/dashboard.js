import React, { Component } from 'react'
import Character from './character';

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        // console.log(props)
        this.state = {
          rows: [
            [],
          ]
        }

        this.updateCount = this.updateCount.bind(this);
    }

    componentDidMount() {
      let self = this;
      fetch('/dashboard')
        .then(res => res.json())
        .then(rows => self.setState({ rows: rows }));
    }

    updateCount(itemID, count) {
        let rows = [...this.state.rows];
        
        rows.forEach(row => {
            if (row.itemID !== itemID) return;
            row.Count = count;
        });

        fetch('/updateItemCount/' + itemID + "/" + count);

        this.setState({rows: rows});
    }

    render() {
        var names = Array.from(new Set(this.state.rows.filter(x => x.Priority >= 3).map(x => x.Character)));

        return (
            <div>
                <div className="appBackground" />
                <div className="FlexContainer" style={{maxWidth: "80em"}}>
                        {names.map(name =>
                            <Character key={name} name={name} rows={this.state.rows.filter(x => x.Character === name)} updateCount={this.updateCount}/>
                        )}
                    </div>
            </div>
        )
    }
}
