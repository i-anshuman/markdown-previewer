import React, {Component} from 'react';
import './App.scss';
import Toolbar from './toolbar';
import Editor from './editor';
import Previewer from './previewer';

class TextEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    };
    this.getTool = this.getTool.bind(this);
    this.handleContent = this.handleContent.bind(this);
  }

  getTool = (tool) => {
    console.log(tool);
  }

  handleContent = (content) => {
    this.setState({
      content: content
    });
  }

  render() {
    return (
      <main className="container">
        <Editor handleContent={this.handleContent}>
          <Toolbar handleTool={this.getTool} />
        </Editor>
        <Previewer content={this.state.content}/>
      </main>
    );
  }
}

export default TextEditor;
