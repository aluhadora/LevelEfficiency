import React, { Component } from 'react';

export default class AllUsers extends Component {
  constructor(props) {
      super(props)
      // console.log(props)
      this.state = {
        members: [
          [],
        ]
      }
      this.logChange = this.logChange.bind(this);
  }
  componentDidMount() {
    let self = this;
    fetch('/efficient')
      .then(res => res.json())
      .then(members => self.setState({ members: members }));
  }
  logChange(e) {
        this.setState({[e.target.name]: e.target.value});  
    }
  render() {
    return (
        <div className="Users container">
          <h1>Users</h1>
          <table className="table">
          <thead>
            <tr>
              <th>Overlap</th>
              <th>Difficulty</th>
              <th>World</th>
              <th>Level</th>
              <th>Needed Items</th>
              <th>Items</th>
              <th>Characters</th>
            </tr>
          </thead>
          <tbody>
              {this.state.members[0].map(member =>
                <tr key={member.id}>
                  <td>{member.Overlap}</td>
                  <td>{member.World > 900 ? 'Hard' : 'Normal'}</td>
                  <td>{member.World % 100 }</td><td>{member.Levelxxkjh }</td>
                  <td>{member.NeededItems}</td>
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
