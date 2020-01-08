import React, {Component} from 'react';
import './index.scss';

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: {
        bold: 'fa fa-bold',
        italic: 'fa fa-italic',
        underline: 'fa fa-underline',
        blockquote: 'fa fa-quote-left',
        ol: 'fa fa-list-ol',
        ul: 'fa fa-list-ul',
        code: 'fa fa-code',
        link: 'fa fa-link',
        image: 'fa fa-image'
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.props.handleTool(event.target.id);
  }

  render() {
    return (
      <div className="toolbar">
        {
          Object.keys(this.state.tools).map((tool, i) =>
            <button type="button"
              id={tool}
              key={i}
              className="toolbar__tool"
              onClick={this.handleClick}
            >
              <i className={this.state.tools[tool]} aria-hidden="true"></i>
            </button>
          )
        }
      </div>
    );
  }
}

export default Toolbar;
