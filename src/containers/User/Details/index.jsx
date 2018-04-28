import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '@/components/Header'
import { Link } from 'react-router-dom'
import './index.less'
import { PullToRefresh } from 'antd-mobile';

class Details extends Component{
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
				<Header title='用户详情'/>
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
					<Link to="/home/insurance">去第二张表</Link>
					<div style={{height:'2000px'}}></div>
				</PullToRefresh>
			</div>
		)
	}
}

export default Details