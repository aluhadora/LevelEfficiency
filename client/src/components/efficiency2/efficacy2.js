import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Efficiency2 extends Component {
  constructor(props) {
      super(props)

      this.state = {
        levels: [
          [],
        ]
      }
  }
  componentDidMount() {
    let self = this;
    fetch('/efficiency2')
      .then(res => res.json())
      .then(levels => self.setState({ levels: levels }));
  }

  render() {
    return (
        <div className="Users container">
          <h1>Efficient Levels</h1>
          <table className="table">
          <thead>
            <tr>
              <th>Overlap</th>
              <th>Difficulty</th>
              <th>World</th>
              <th>Level</th>
              <th>Needed Items</th>
              <th>Efficacy</th>
              <th>Items</th>
              <th>Characters</th>
            </tr>
          </thead>
          <tbody>
              {this.state.levels[0].map(member =>
                <tr key={member.id}>
                  <td><Link to={"/level/" + member.World + member.Level}>{member.Overlap}</Link></td>
                  <td>{member.World > 900 ? 'Hard' : 'Normal'}</td>
                  <td>{member.World % 100 }</td>
                  <td>{member.Level }</td>
                  <td>{member.NeededItems}</td>
                  <td>{member.Efficacy}</td>
                  <td>{member.Items}</td>
                  <td>{member.Characters}</td>
                </tr>
              )}
          </tbody>
          </table>
        </div>
    );
  }
}

export default Efficiency2;