import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Switch from './switch';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Switch />, document.getElementById('root')
  );

// // Reactコンポーネントクラス「Timer」を宣言
// class Timer extends React.Component {
//   constructor(props) {                                  // （4）
//     super(props);
//     this.state = {remaining : this.props.seconds};      // （2）
//   }
//
//   // state.remainingが正の数なら1秒減じる関数
//   countDown() {
//       if(this.state.remaining > 0) {
//             this.setState((prevState) => ({
//                   remaining : prevState.remaining - 1       // （3）
//             }));
//        }
//   }
//
//   // 初期化時に、countDownメソッドを1秒ごとに呼び出すタイマーを設定
//   componentDidMount() {                                  // （5）
//     this.interval = setInterval(() => this.countDown(), 1000);
//   }
//
//   // 終了処理として、タイマーをクリアする
//   componentWillUnmount() {                              // （6）
//     clearInterval(this.interval);
//   }
//
//   // Timerコンポーネントが描画する要素を記述
//   render() {
//     return (
//       <div>
//         <h1>Hello, {this.props.name}!</h1>
//         <h2>{this.state.remaining} seconds remaining.</h2>
//       </div>
//     );
//   }
// }
//
// // Propsを通してnameとsecondsを渡して、Timerコンポーネントを生成
// const element = <Timer name="Filange" seconds={180} />;   // （1）
//
// // index.htmlのid=‘root’をもつ要素にelementを挿入
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
