import { h, Component } from 'preact'; 

const LIMIT = 60;
type State = {
  timeLeft: number;
};

export class LegacyTimer extends Component<unknown, State> {
  timerId: NodeJS.Timer | null = null;
//  timerId: any;
  
  constructor(props: unknown) {
    super(props);
    this.state = { timeLeft: LIMIT };
  }
  
  reset = (): void => {
    this.setState({ timeLeft: LIMIT });
  }
  
  tick = (): void => {
    this.setState(prevState => {timeLeft: prevState.timeLeft - 1});
  }
  
  // 初回マウント直後に、
  componentDidMount = (): void => {
    // 1秒おきに減数メソッドを実行する。
    this.timerId = setInterval(this.tick, 1000);
  }
  
  // stateがアップデートされるたびに、
  componentDidUpdate = (): void => {
    const { timeLeft } = this.state;
    // 残り時間が0ならリセットする、を実行。
    if (timeLeft === 0) {
      this.reset();
    }
  }
  
  // コンポーネントが破棄される直前に、
  componentWillUnmount = (): void => {
    // タイマーも破棄。
    if (this.timerId) clearInterval (this.timerId);
  }
 
  render = () => {
    const { timeLeft } = this.state;
    
    return (
      <div className="container">
        <p>残り時間</p>
        <p>{ timeLeft }</p>
        <button
          onClick={this.reset}
        >リセット</button>
      </div>
      
    );
  }
}