import React, {Component} from 'react';
import './index.scss';
import defaultText from '../defaultText';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    console.log(event)
    this.props.handleContent(event.target.value);
  }

  componentDidMount() {
    this.props.handleContent(defaultText);
  }

  render() {
    return (
      <div className="editor-wrapper">
        <div className="editor__titlebar">
          <p className="title"><i className="fa fa-free-code-camp"></i> Markdown Editor</p>
        </div>
        {this.props.children}
        <textarea className="editor"
          id="editor"
          onChange={this.handleChange}
          defaultValue={defaultText}
        >
        </textarea>
      </div>
    );
  }
}

export default Editor;
