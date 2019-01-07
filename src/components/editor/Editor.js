// documentation https://www.yuque.com/margox/be/gz44tn

import React, { Component } from 'react'
import BraftEditor, { EditorState } from 'braft-editor'
import 'braft-editor/dist/index.css'

// 可编辑项配置 可配置顺序
const editorControls = [
  'undo', 'redo', 'separator',
  'remove-styles', 'separator',
  'font-size', 'font-family', 'line-height', 'letter-spacing', 'headings', 'separator',
  'text-color','bold', 'italic', 'underline', 'strike-through', 'superscript', 'subscript', 'separator',
  'text-align', 'separator',
  'link', 'hr', 'emoji', 'media', 'separator',
  'clear', 'separator'
]

const mediaOptions = {
  image: true,
  audio: false,
  video: false,
  externals: {
    image: true,
    audio: false,
    video: false,
    embed: false
  },
}

const saveButtonOptions = {
  key: 'saveButton',
  type: 'button',
  title: '保存内容',
  text: '保存内容',
  html: null
}

class Editor extends Component {
  constructor() {
    super()
    this.state = {
      editorState: null
    }

    this.braftEditor = React.createRef()
  }

  async componentDidMount () {
    // 使用EditorState.createFrom将html字符串转换为编辑器需要的editorState数据
    let editorState = this.props.editorContentValue || ''
    this.setState({
      editorState: EditorState.createFrom(editorState)
    })
  }

  handleEditorChange = (editorState) => {
    const editorContentValue = editorState.toHTML()
    this.setState({ editorState })
    this.props.handleEditorContentChange(editorContentValue)
  }

  render() {
    const { editorState } = this.state

    const extendControls = [
      {
        ...saveButtonOptions,
        onClick: () => {
          // 点击保存按钮触发
          console.log(this.state.editorState.toHTML())
        }
      }
    ]

    const mediaConfig = {
      ...mediaOptions,
      onInsert(e) {
        // 插入到编辑器触发
        console.log('oninsert', e)
      },
    }

    return (
      <div className="App">
        <BraftEditor
          ref={this.braftEditor}
          value={editorState}
          controls={editorControls}
          extendControls={extendControls}
          media={mediaConfig}
          onChange={this.handleEditorChange}
        />
      </div>
    );
  }
}

export default Editor;
