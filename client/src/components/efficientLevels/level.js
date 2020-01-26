import React, { Component } from 'react';

export default class Level extends Component {
  constructor(props) {
      super(props)
      console.log(props)
      this.state = {
        characteritems: [
          [],
        ]
      }
      this.logChange = this.logChange.bind(this);
  }

  componentDidMount() {
    let self = this;
    console.log(this.props);
    
    const { params } = this.props.match;

    console.log(params);
    
    if (!params) return;

    fetch('/level/' + params.shortcode )
      .then(res => res.json())
      .then(res => self.setState({ characteritems: res[0] }));
  }
  logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }
  render() {
    const { params } = this.props.match;

    return (
        <div className="Users container">
          <h1>Level: {params.shortcode}</h1>
          <table className="table">
          <thead>
            <tr>
              <th>Character</th>
              <th>Item</th>
              <th>Level</th>
              <th>Count</th>
              <th>Required</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
             {this.state.characteritems.map(cli =>
                <tr>
                  <td>{cli.Character}</td>
                  <td>{cli.Item}</td>
                  <td>{cli.Level }</td>
                  <td>{cli.Count}</td>
                  <td>{cli.RequiredCount}</td>
                  <td>{cli.Priority}</td>
                </tr>
              )}
          </tbody>
          </table>
        </div>
    );
  }
}
