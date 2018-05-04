import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '@/components/Header'
import './index.less'
import { PullToRefresh } from 'antd-mobile';
import Strip from '@/components/Strip'
import List from '@/components/List'


const data = [
	{faceUrl:"https://asset.91hc.com/src/images/index/new-center-1.png",name:'张零食',href:'/collectiondetail',overdue:{laterDay:'20天',periods:'1'}},
	{faceUrl:"https://asset.91hc.com/src/images/index/new-center-1.png",name:'张零食',href:'/collectiondetail',overdue:{laterDay:'42天',periods:'3'}},
	{faceUrl:"https://asset.91hc.com/src/images/index/new-center-1.png",name:'张零食',href:'/collectiondetail',overdue:{laterDay:'12天',periods:'5'}},
]

class Overdue extends Component{
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
					<Strip>共有{data.length}条记录</Strip>
					
					{
						data.map((value,key)=><List faceUrl={value.faceUrl} name={value.name} key={key} href={value.href} overdue={value.overdue} detailButtonText='催收记录'/>)
					}
					
				</PullToRefresh>
			</div>
		)
	}
}

export default Overdue