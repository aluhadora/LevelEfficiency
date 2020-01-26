import React, { Component } from 'react'
import "./style.css";
import DropRateTable from './drop-table';
import SweepsTable from './sweeps-table';

class DropRateCalculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
          droptable: [],
          sweepstable: []
        }
    }

    componentDidMount() {
      let self = this;
      const { params } = this.props.match;
  
      fetch('/droptable/' + params.shortcode )
        .then(res => res.json())
        .then(res => self.setState({ droptable: res }));
        
      fetch('/sweeps/' + params.shortcode )
        .then(res => res.json())
        .then(res => self.setState({ sweepstable: res }));
    }

    render() {
        const { params } = this.props.match;
        const { droptable, sweepstable } = this.state;
        
    
        if (!params.shortcode) return null;
        if (!droptable || !droptable.length) return null;
        
        return (
          <div>
            <table>
              <tbody>
                <tr>
                  <td>
                    {"Level: " + droptable[0].World + ":" + droptable[0].Level}
                  </td>
                  <td>
                    {"Total sweeps: " + sweepstable.reduce((sum, row) => sum + row.Sweeps, 0)/3}
                  </td>
                  <td>
                    {"AP Cost: " + droptable[0].APCost}
                  </td>
                </tr>
              </tbody>
            </table>
            <DropRateTable droptable={droptable} ></DropRateTable>
            <SweepsTable droptable={droptable} sweepstable={sweepstable} />
          </div>
        );
    }
}

export default DropRateCalculator;