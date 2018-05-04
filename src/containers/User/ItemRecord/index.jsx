import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '@/components/Header'
import './index.less'
import { PullToRefresh ,Flex} from 'antd-mobile'
import Title from '@/components/Title'



const data =[
	{
		title:'项目记录1',data:[
		{title:'项目说明',value:'xxx'},
		
	]},
	{
		title:"项目记录2",data:[
		{title:'项目说明',value:'xxx'},
	]},
	{
		title:"项目记录3",data:[
		{title:'项目说明',value:'xxx'},
	]},
]

class ItemGroup extends Component{
	render(){
		return(
			<div>
				<Title>{this.props.title}</Title>
				{
					this.props.data.map((value,key)=><Item title={value.title} value={value.value} key={key}/>)
				}
			</div>
		)
	}
}

class Item extends Component{
	render(){
		return(
			<div className='item'>
				{this.props.title}：<span>{this.props.value}</span>
			</div>
		)
	}
}

class ItemRecord extends Component{
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
			<div className='apply-details'>
				<Header title='项目记录'/>
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
					<Flex className='face-img-box'>
						<Flex.Item>
							<Flex justify='center'>
								<div className='img-box'>
									<img src={require('./asset/idcar.svg')} alt="touxiang"/>
								</div>				
							</Flex>
						</Flex.Item> 
						<Flex.Item className='user-name'>
							<p>梦醒时分</p>
							<p>手机：18959333600</p>
						</Flex.Item>
					</Flex>
					<div className='details'>
						{
							data.map((value,key)=><ItemGroup title={value.title} data={value.data} key={key}/>)
						}
					</div>
				</PullToRefresh>
			</div>
		)
	}
}

export default ItemRecord