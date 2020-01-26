import React, { Component } from 'react'
import CharacterItem from './item';

import './style.css';

class Character extends Component {
    render() {
        const { name, rows, updateCount } = this.props;
        
        return (
            <div className="characterPage">
                <div>                
                    <table>
                        <caption className="element">
                            <div>
                                {name}
                            </div>
                            <div>
                                <img alt={name} src={rows[0].CharacterImage} style={{width: "4em"}} />
                            </div>
                            <div className="levelDisplay">
                                <span style={{color: "orange"}}>
                                    {rows[0].Level}
                                </span>
                                <span>
                                    <img alt=">" src="/right-arrow-black-triangle.svg" height={"10px"} />
                                </span>
                                <span>
                                    {rows[0].Level + 1}
                                </span>
                            </div>
                        </caption>
                        <tr>
                            <td>
                                <CharacterItem {...rows[0]} updateCount={updateCount}/>
                            </td>
                            <td>
                                <CharacterItem {...rows[1]} updateCount={updateCount}/>
                            </td>
                            <td>
                                <CharacterItem {...rows[2]} updateCount={updateCount}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <CharacterItem {...rows[3]} updateCount={updateCount}/>
                            </td>
                            <td>
                                <CharacterItem {...rows[4]} updateCount={updateCount}/>
                            </td>
                            <td>
                                <CharacterItem count={1719} requiredCount={460} updateCount={updateCount} />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default Character;