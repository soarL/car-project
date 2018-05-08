import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '@/components/Header'
import './index.less'
import { PullToRefresh } from 'antd-mobile';
import Strip from '@/components/Strip'
import List from '@/components/List'
import userInfoAPI from '@/api/userInfo'

class Overdue extends Component{
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
	    let data = await userInfoAPI.workUserOddWithin()
	    this.setState({
	      height: hei,
	      data
	    })
	}
	onRefresh = async ()=>{
		this.setState({ refreshing: true })
		let data = await userInfoAPI.workUserOddWithin()
		this.setState({
		  data,
		  refreshing: false
		})
	}
	render(){
		return(
			<div>
				<Header title='逾期还款客户'/>
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
						this.state.data.map((value,key)=><List faceUrl={value.avatar} name={value.nickName} key={key} href={"/collectiondetail/" + value.oddNumber + '/' + value.intPeriod } overdue={{periods:value.intPeriod,laterDay:value.laterday}} detailButtonText='催收记录'/>)
					}
					
				</PullToRefresh>
			</div>
		)
	}
}

export default Overdue