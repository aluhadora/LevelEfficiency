import React, { Component } from 'react'
import "./style.css";

class SweepsTable extends Component {

    componentDidUpdate(prevProps, prevState) {
        
    }

    render() {
        const { droptable, sweepstable } = this.props;
    
        if (!droptable || !droptable.length) return null;

        const itemNames = [...new Set(droptable.map(item => item.Item))];
        const sweepIDs =  [...new Set(sweepstable.map(item => item.droprateRunID))];

        const imageHeaders = itemNames.map(item =>
            <th key={item}>
                <span><img alt={item} src={droptable.filter(row => row.Item === item)[0].ItemImageURL} style={{height: "3em"}}/></span>
            </th>
        );

        const rows = sweepIDs.map(id =>
            <tr key={id}>
                {itemNames.map(item => 
                    <td>
                        <span><img alt={item} src={droptable.filter(row => row.Item === item)[0].ItemImageURL} style={{height: "2em"}}/></span>
                        <span>{sweepstable.filter(row => row.droprateRunID === id && row.Item === item).reduce((a,b) => b.Count, 0)}</span>
                    </td>
                )}
                <td>{sweepstable.filter(row => row.droprateRunID === id)[0].Sweeps}</td>
            </tr>
        );

        return (<div>
            <table>
              <thead>
                <tr>
                    {imageHeaders}
                </tr>
              </thead>
              <tbody>
                  <tr style={{outline: "1px solid black"}}>
                    {itemNames.map(item =>
                        <td key={item}>
                            <span><img alt={item} src={droptable.filter(row => row.Item === item)[0].ItemImageURL} style={{height: "2em"}}/>0</span>
                        </td>
                    )}
                    <td>
                        >
                    </td>
                  </tr>
                {rows}
              </tbody>
            </table>
        </div>)
    }
}

export default SweepsTable;