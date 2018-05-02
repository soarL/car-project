import React,{ Component } from 'react'
import Header from '@/components/Header'
import Title from '@/components/Title'

import { Button ,ImagePicker} from 'antd-mobile'
import { createForm } from 'rc-form'

import './index.less'

const data = [];


class Upload extends Component{
	constructor(props){
		super(props)
		this.state={
			value:0,
			files: data,
		}
	}

	 onChange = (files, type, index) => {
	   console.log(files, type, index);
	   this.setState({
	     files,
	   });
	 };
	 onAddImageClick = (e) => {
	   e.preventDefault();
	   this.setState({
	     files: this.state.files.concat({
	       url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
	       id: '3',
	     }),
	   });
	 };
	 onTabChange = (key) => {
	   console.log(key);
	 };
	render(){

		return(
			<div className='coverage'>
				<Header title='提交资料'/>
				<Title>身份证拍照件</Title>
					<ImagePicker
					  files={this.state.files}
					  onChange={this.onChange}
					  onImageClick={(index, fs) => console.log(index, fs)}
					  selectable={this.state.files.length < 2}
					/>
				<Title>行驶证拍照件</Title>
					<ImagePicker
					  files={this.state.files}
					  onChange={this.onChange}
					  onImageClick={(index, fs) => console.log(index, fs)}
					  selectable={this.state.files.length < 1}
					/>
				<Title>其他（非必填）</Title>
					<ImagePicker
					  files={this.state.files}
					  onChange={this.onChange}
					  onImageClick={(index, fs) => console.log(index, fs)}
					  selectable={this.state.files.length < 6}
					/>
            	<div  className='button-box'>
            		<Button type="primary" onClick={()=>{this.props.history.push('/home/result')}}>提交</Button>
            	</div>

			</div>
		)
	}
}

export default createForm()(Upload)