import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '@/components/Header'
import './index.less'
import { PullToRefresh } from 'antd-mobile';
import Strip from '@/components/Strip'
import List from '@/components/List'
import userInfoAPI from '@/api/userInfo'

class Promoter extends Component{
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
	    let data = await userInfoAPI.getPromoter();
	    console.log(data);
	    this.setState({
	      height: hei,
	      data,
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
						this.state.data.map((value,key)=><List faceUrl={value.faceSrc} name={value.user} phone={value.phone} href={ /itemrecord/+ value.strUserId} detailButtonText="项目记录" key={key}/>)
					}
					
				</PullToRefresh>
			</div>
		)
	}
}

export default Promoter