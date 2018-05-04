import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '@/components/Header'
import './index.less'
import { PullToRefresh } from 'antd-mobile';
import Strip from '@/components/Strip'
import List from '@/components/List'


const data = [
	{faceUrl:"https://asset.91hc.com/src/images/index/new-center-1.png",name:'张零食',repayTimer:'2018-10-20',repayMoney:'1200',href:'/PaymentHistory'},
	{faceUrl:"https://asset.91hc.com/src/images/index/new-center-1.png",name:'张零',repayTimer:'2018-10-20',repayMoney:'5000',href:'/PaymentHistory'},
	{faceUrl:"https://asset.91hc.com/src/images/index/new-center-1.png",name:'张食',repayTimer:'2018-10-20',repayMoney:'600',href:'/PaymentHistory'},
]

class RepayHistory extends Component{
	  constructor(props) {
	    super(props);
	    this.state = {
	      refreshing: false,
	      down: true,
	      height: document.documentElement.clientHeight,
	    };
	  }
	 componentDidMount() {
	    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
	    this.setState({
	      height: hei,
	    })
	}
	onRefresh =()=>{
		this.setState({ refreshing: true })
		setTimeout(() => {
		  this.setState({ refreshing: false })
		}, 1000)
	}
	render(){
		return(
			<div>
				<Header title='还款记录'/>
				<PullToRefresh
				    ref={el => this.ptr = el}
				    style={{
				      height: this.state.height,
				      overflow: 'auto',
				    }}
				    indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
				    direction={this.state.down ? 'down' : 'up'}
				    refreshing={this.state.refreshing}
				    onRefresh={this.onRefresh}
				    distanceToRefresh={window.devicePixelRatio * 25}
				>
					<Strip>共有6条还款记录</Strip>
					
					{
						data.map((value,key)=><List faceUrl={value.faceUrl} name={value.name} repayTimer={value.repayTimer} repayMoney={value.repayMoney} href={value.href} key={key}/>)
					}
					
				</PullToRefresh>
			</div>
		)
	}
}

export default RepayHistory