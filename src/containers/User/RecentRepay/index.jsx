import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '@/components/Header'
import './index.less'
import { PullToRefresh } from 'antd-mobile';
import Strip from '@/components/Strip'
import List from '@/components/List'
import userInfoAPI from '@/api/userInfo'

class RecentRepay extends Component{
	  constructor(props) {
	    super(props);
	    this.state = {
	      refreshing: false,
	      down: true,
	      height: document.documentElement.clientHeight,
	      data:[]
	    };
	  }
	 async componentDidMount() {
	    const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
	    let data = await userInfoAPI.workUserOdd()
	    this.setState({
	      height: hei,
	      data,
	    })
	}
	onRefresh = async ()=>{
		this.setState({ refreshing: true })
		let data = await userInfoAPI.workUserOdd()
		this.setState({
		  data,
		  refreshing: false 
		})
	}
	render(){
		return(
			<div>
				<Header title='近期还款客户'/>
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
					<Strip>共有{this.state.data.length}条记录</Strip>
					
					{
						this.state.data.map((value,key)=><List faceUrl={value.faceUrl} name={value.nickName} key={key} href={ "/repayhistory/"+ value.strWorkNum } recentRepay={{money:value.money,timer:value.tOperateTime,periods:value.intPeriod}} detailButtonText='还款记录'/>)
					}
					
				</PullToRefresh>
			</div>
		)
	}
}

export default RecentRepay