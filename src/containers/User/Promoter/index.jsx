import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '@/components/Header'
import './index.less'
import { PullToRefresh } from 'antd-mobile';
import Strip from '@/components/Strip'
import List from '@/components/List'


const data = [
	{faceUrl:"https://asset.91hc.com/src/images/index/new-center-1.png",name:'张零食',phone:'18959333600',href:'/itemrecord'},
	{faceUrl:"https://asset.91hc.com/src/images/index/new-center-1.png",name:'张食',phone:'13774770527',href:'/itemrecord'},
	{faceUrl:"https://asset.91hc.com/src/images/index/new-center-1.png",name:'张零食',phone:'13774770527',href:'/itemrecord'},
]

class Promoter extends Component{
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
				<Header title='推广员列表'/>
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
					<Strip>共有6条记录</Strip>
					
					{
						data.map((value,key)=><List faceUrl={value.faceUrl} name={value.name} phone={value.phone} href={value.href} detailButtonText="项目记录" key={key}/>)
					}
					
				</PullToRefresh>
			</div>
		)
	}
}

export default Promoter