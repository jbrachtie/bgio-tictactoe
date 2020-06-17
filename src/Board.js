import React from 'react';

// receives all game state stuff as props
class TicTacToeBoard extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.moves.clickCell(id);
  }

  render() {
    let winner = '';
    if(this.props.ctx.gameover) {
      if(this.props.ctx.gameover.winner !== undefined) {
        winner = <div id="winner">Winner: {this.props.ctx.gameover.winner}</div>
      }
      else {
        winner = <div id="winner">Draw!</div> 
      }
    }

    const cellStyle = {
      border: "1px solid #555",
      width: "50px",
      height: "50px",
      lineHeight: "50px",
      textAlign: "center"
    };

    let tbody = [];
    for(let i = 0; i < 3; i++) {
      let cells = [];
      for(let j = 0; j < 3; j++) {
        const id = (3 * i) + j;
        cells.push(
          <td style={cellStyle} key={id} onClick={() => this.handleClick(id)}>
            {this.props.G.cells[id]}
          </td>
        )
      }
      tbody.push(<tr key={i}>{cells}</tr>);
    }
    
    return (
      <div>
        <table id="board">
          <tbody>{tbody}</tbody>
        </table>
        {winner}
      </div>
    );
  }
}

export default TicTacToeBoard;