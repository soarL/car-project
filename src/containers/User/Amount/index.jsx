import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '@/components/Header'
import './index.less'
import { PullToRefresh } from 'antd-mobile'
import Title from '@/components/Title'



class Item extends Component{
	render(){
		return(
			<div className='item'>
				<img src={this.props.src} alt={this.props.src}/>
			</div>
		)
	}
}

const data = [
	{src:'https://asset.91hc.com/uploads/images/20180503/3391db0edf5d45eff3937921a5414e0c.jpg',title:'阿达'},
	{src:'https://asset.91hc.com/uploads/images/20180503/3391db0edf5d45eff3937921a5414e0c.jpg',title:'阿达'},
	{src:'https://asset.91hc.com/uploads/images/20180503/3391db0edf5d45eff3937921a5414e0c.jpg',title:'阿达'},
	{src:'https://asset.91hc.com/uploads/images/20180503/3391db0edf5d45eff3937921a5414e0c.jpg',title:'阿达'},
]

class Amount extends Component{
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
			<div className='amount-details'>
				<Header title='证件清单'/>
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
	
					<Title>身份证</Title>
						<Item src="https://asset.91hc.com/uploads/images/20180503/3391db0edf5d45eff3937921a5414e0c.jpg"/>
						<Item src="https://asset.91hc.com/uploads/images/20180503/3391db0edf5d45eff3937921a5414e0c.jpg"/>
					<Title>行驶证</Title>
						<Item src="https://asset.91hc.com/uploads/images/20180503/3391db0edf5d45eff3937921a5414e0c.jpg"/>
					<Title>其他证件</Title>
						{
							data.map( (value,key)=><Item src={value.src} key={key}/> )
						}
				</PullToRefresh>
			</div>
		)
	}
}

export default Amount