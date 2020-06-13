import React from 'react';
import Toolbox from './toolbox/Toolbox';
import Toolbar from './toolbox/Toolbar';
import Pagelist from './pagelist/Pagelist';
// TODO - Extract strings

class App extends React.Component {
  constructor(props) {
    super(props);

    const _testPagelistItems = [];
    for (let i = 0; i < 17; i += 1) {
      _testPagelistItems.push({
        id: i,
        content: 'logo192.png',
      });
    }

    this.state = {
      modified: false,
      pageListItems: _testPagelistItems,
    };
  }

  // TODO - Event handlers go here!

  fileNewHandler = (event) => {
    if (this.state.modified) {
      const message = '‘확인’을 누르면 저장하지 않은 내용을 버리고 작업을 새로 시작합니다.';
      if (!window.confirm(message)) {
        return;
      }
    }
    this.setState({
      modified: false,
      pageListItems: [],
    });
  }

  render() {
    // TODO - Extract toolbar button CSS class
    return (
      <div className="app leading-none flex flex-col max-h-screen">
        <Toolbox>
          <Toolbar name="info" label="Image List Maker">
            <button name="help" className="rounded bg-gray-300 px-4 py-2 text-gray-800">도움말</button>
            <button name="opensource" className="rounded bg-gray-300 px-4 py-2 text-gray-800">오픈소스 정보</button>
          </Toolbar>
          <Toolbar name="file" label="파일">
            <button name="new" onClick={this.fileNewHandler} className="rounded bg-gray-300 px-4 py-2 text-gray-800">신규</button>
            <button name="open" className="rounded bg-gray-300 px-4 py-2 text-gray-800">작업용 파일 열기</button>
            <button name="export-as-json" className="rounded bg-gray-300 px-4 py-2 text-gray-800">작업용 파일로 내보내기</button>
          </Toolbar>
          <Toolbar name="edit" label="편집">
            <button name="add-image" className="rounded bg-gray-300 px-4 py-2 text-gray-800">새 이미지 추가</button>
            <button name="replace-image" className="rounded bg-gray-300 px-4 py-2 text-gray-800">선택한 이미지 교체</button>
            <button name="delete-image" className="rounded bg-gray-300 px-4 py-2 text-gray-800">선택한 이미지 삭제</button>
          </Toolbar>
        </Toolbox>
        <Pagelist items={this.state.pageListItems} />
      </div>
    );
  }
}

export default App;
