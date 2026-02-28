import React, { Component } from "react";

class LifeCycleComponent extends Component {
  state = {
    number: 0,
    color: null,
  };

  colorRef = null;

  handleNumberIOnClick = () => {
    this.setState({
      number: this.state.number + 1,
    })
  }
  
  //생성자
  constructor(props){
    super(props)
    console.log("constructor props",props);
  }

  //버추얼돔이 사용하는 함수
  //컴파일러가 제일 먼저 올려줘야 하므로 static키워드 사용
  static getDerivedStateFromProps(nextProps, prevState){
    console.log("getDerivedStateFromProps",nextProps,prevState);
    if(nextProps.color !== prevState.color){
      return {color:nextProps.color}
    } 
    return null;
  }

  //마운트 직 후 최초 딱 한번 실행
  componentDidMount() {
    console.log("마운트 직후 실행!");
    
  }
  //여기까지 마운트 단계


  //업데이트 단계
  //이거 업데이트 해야해? 그래서 할수도 있고 안할 수도 있어
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate",nextProps, nextState);
    return nextState.number % 5 !== 0;
  }

  //업데이트 실수 할 수 있으니까
  //업데이트 직전 값
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("getSnapshotBeforeUpdate", prevProps, prevState);
    if (prevProps.color !== this.props.color) {
      return this.colorRef.style.backgroundColor;
    }
    return null;
  }
  //업데이트 칙 후
  componentDidUpdate(prevProps, prevState, snapshot){
    if(prevProps){
      console.log(`업데이트 직전 state ${prevProps.color}`)
    }
    if(snapshot){
      console.log(`업데이트 직전 색상 ${snapshot}`)
    }
    return null;
  }

  render() {
    return(
      <div>
        <div 
        ref={(el) => this.colorRef = el}
        style={{
          width:"100px",
          height:"100px",
          backgroundColor:this.state.color,
          display:"flex",
          justifyContent:"center",
          alignItems: "center",
          color: "#000"
        }}
        >
          <h1>{this.state.number}</h1>
        </div>
        <button onClick={this.handleNumberIOnClick}>더하기 버튼</button>
    </div>
    );
  }
}

export default LifeCycleComponent;
