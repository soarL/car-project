import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import Header from '@/components/Header'
import './index.less'
import { PullToRefresh ,Flex,WhiteSpace} from 'antd-mobile'
import Title from '@/components/Title'



const data =[
	{
		title:'车辆信息',data:[
		{title:'行驶城市',value:'福建省鼓楼区'},
		{title:'车牌号码',value:'未上牌'},
	]},
	{
		title:'保险信息',data:[
		{title:'保险公司',value:'中国人寿'},
		{title:'交强险+车船险',value:'中国人寿'},
		{title:'生效时间',value:'2018-05-02'},
		{title:'商业主险',value:'投保'},
		{title:'生效时间',value:'2018-04-02'},
	]},
	{
		title:"商业主险",data:[
		{title:'车辆损失险',value:'投保'},
		{title:'第三责任险',value:'5万'},
		{title:'全车盗抢险',value:'投保'},
		{title:'司机责任险',value:'1万/人'},
		{title:'乘客责任险',value:'1万/人'},
	]},
	{
		title:'商业附加险',data:[
		{'title':'玻璃破碎险',value:'国产'},
		{'title':'自燃损失险',value:'不投保'},
		{'title':'发动机涉水险',value:'投保'},
		{'title':'划痕险',value:'投保'},
		{'title':'不记免赔率险',value:'投保'},
	]}
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

class ApplyDetails extends Component{
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
				<Header title='申请详情'/>
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
					<Title>证件清单</Title>
					<Title>还款记录</Title>
					<div className='heights'></div>
					
				</PullToRefresh>
		
		
			</div>
		)
	}
}

export default ApplyDetails