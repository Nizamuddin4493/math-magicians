import react from 'react';
import { v4 as uuidv4 } from 'uuid';

class Buttons extends react.Component {
  constructor(props) {
    super(props);
    this.btn = this.props.btn;
  }

  render() {
    return (
      <div className="buttons">
        {this.btn.value.map((value) => <button type="button" key={uuidv4()} onClick={this.props.click}>{value}</button>)}
      </div>
    );
  }
}

export default Buttons;