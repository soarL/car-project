import React,{ Component } from 'react'
import { Button,Toast } from 'antd-mobile'
import './index.less'

class CountDownButton extends Component{
	constructor(props){
		super(props)

		this.state={
			disabled:false,
			btntxt:'获取验证码'
		}
	}
	async btnClick(callback){
		let i = this.props.second
		this.setState({
			disabled:true
		})

		let info = await callback()

		if(info === '0000'){
			Toast.success('发送成功')
			this.setState({
				btntxt: this.props.second +'s'
			})
			let timer = setInterval(()=>{
				i -=1
				this.setState({
					btntxt: i+'s'
				})
				if(i===0){
					clearInterval(timer)
					this.setState({
						btntxt:'获取验证码',
						disabled:false
					})
				}
			},1000)
		}else{
			Toast.fail(info)
			this.setState({
				disabled:false
			})
		}
	}
	render(){
		return(
			<Button type={this.props.btntype} size={this.props.size} disabled={this.state.disabled} onClick={this.btnClick.bind(this,this.props.callback)} className={`countButton ${this.props.className}`} style={this.props.style}>{this.state.btntxt}</Button>
		)
	}
}

export default CountDownButton