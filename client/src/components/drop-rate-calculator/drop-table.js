import React, { Component } from 'react'
import "./style.css";

class DropRateTable extends Component {
    dropTable(droptable) {
        if (!droptable || !droptable.length) return null;

        const itemNames = [...new Set(droptable.map(item => item.Item))];

        const imageHeaders = itemNames.map(item =>
            <th key={item}>
                <span><img alt={item} src={droptable.filter(row => row.Item === item)[0].ItemImageURL} style={{height: "3em"}}/></span>
            </th>
        );

        const charactersNeeding = itemNames.map(item =>
            <td key={item}>
                {
                    droptable.filter(row => row.Item === item && row.Character).length ? 
                    droptable.filter(row => row.Item === item).map(row => 
                    <span><img alt={row.Character} src={row.CharacterImageURL} style={{height: "2em"}}/></span>
                    )
                    : "N/A"
                }
            </td>
        );

        const counts = itemNames.map(item =>
            <td key={item}>
                {
                    droptable.filter(row => row.Item === item && row.Character).length ? 
                        droptable.filter(row => row.Item === item)[0].Count +
                        "/" +
                        droptable.filter(row => row.Item === item).reduce((a,b) => a + b.RequiredCount, 0)
                    : "N/A"
                }
            </td>
        );

        const dropRates = itemNames.map(item =>
            <td key={item}>
                {droptable.filter(row => row.Item === item)[0].DropRate}
            </td>
        );

        return (<div>
            <table>
              <thead>
                  <tr>
                    {itemNames.map(item =>
                        <th key={item}>
                            {item}
                        </th>)}
                  </tr>
                <tr>
                    {imageHeaders}
                </tr>
              </thead>
              <tbody>
                <tr>
                    {charactersNeeding}
                </tr>
                <tr>
                    {counts}
                </tr>
                    {dropRates}
              </tbody>
            </table>
        </div>)

    }

    render() {
        const { droptable } = this.props;
    
        return this.dropTable(droptable);
    }
}

export default DropRateTable;