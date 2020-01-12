import React, {Component} from 'react';
import marked, {Renderer} from 'marked';
import './index.scss';

const renderer = new Renderer();
renderer.link = (href, title, text) => `<a target="_blank" href="${href}">${text}</a>`;

class Previewer extends Component {
  constructor(props) {
    super(props);
    this.getMarkdownText = this.getMarkdownText.bind(this);
    marked.setOptions({
      renderer: renderer,
      gfm: true,
      breaks: true
    });
  }

  getMarkdownText(content) {
    return { __html: marked(content)};
  }

  render() {
    return (
      <div className="previewer-wrapper">
        <div className="previewer__titlebar">
          <p className="title"><i className="fa fa-free-code-camp"></i> Markdown Previewer</p>
        </div>
        <div id="preview" className="previewer__body" dangerouslySetInnerHTML={this.getMarkdownText(this.props.content)}/>
      </div>
    );
  }
}

export default Previewer;
