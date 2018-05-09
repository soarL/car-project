import React,{ Component } from 'react'
import Header from '@/components/Header'
import Title from '@/components/Title'

import { Button ,ImagePicker,Toast} from 'antd-mobile'

import homeAPI from '@/api/home'

import './index.less'

let allData ={
	strFaceIdCard:'',
	strFaceVehicleLicense:'',
	strReverseIdCard:'',
	strOther:[],
}

class Upload extends Component{
	constructor(props){
		super(props)
		this.state={
			value:0,
			other:[],
			id:[],
			xingshi:[],
			
		}
	}

	 idOnChange = async (files, type, index) => {
	   if(type==='add'){

	   		let parmse = {
	   			url:files[files.length - 1 ].url,
	   			type:'.' + files[files.length - 1].file.type.split("/")[1],
	   			name:files.length ===1 ? 'strFaceIdCard': "strFaceVehicleLicense"
	   		}

	   		let data = await homeAPI.workUserImage(parmse)
	   		if(data.ret==='0000'){
	   			allData[data.name] = data.url
	   		}
	   }

	   this.setState({
	     id:files,
	   })

	 }

	 xingshiOnChange = async (files, type, index) => {
	   if(type==='add'){

	   		let parmse = {
	   			url:files[files.length - 1 ].url,
	   			type:'.' + files[files.length - 1].file.type.split("/")[1],
	   			name:"strReverseIdCard"
	   		}

	   		let data = await homeAPI.workUserImage(parmse)
	   		if(data.ret==='0000'){
	   			allData[data.name] = data.url
	   		}
	   }

	   this.setState({
	     xingshi:files,
	   })

	 }

	 otherOnChange = async (files, type, index) => {
	   if(type==='add'){
	   		let parmse = {
	   			url:files[files.length - 1 ].url,
	   			type:'.' + files[files.length - 1].file.type.split("/")[1],
	   			name:"strOther"
	   		}

	   		let data = await homeAPI.workUserImage(parmse)
	   		if(data.ret==='0000'){
	   	
	   			allData.strOther.push(data.url)
	   		}
	   }

	   this.setState({
	     other:files,
	   })

	 }

	 submit =async ()=>{
	 	let parmse = allData
	 	parmse.strWorkNum = this.props.location.query
	 	if(!parmse.strFaceIdCard){
	 		Toast.fail('请上传身份证照片')
	 		return
	 	}
	 	if(!parmse.strFaceVehicleLicense){
	 		Toast.fail('请上传身份证照片')
	 		return
	 	}
	 	if(!parmse.strReverseIdCard){
	 		Toast.fail('请上传行驶证照片')
	 		return
	 	}
	 	let data = await homeAPI.workUserCard(parmse)
	 	if(data){
	 		this.props.history.push('/home/result')
	 	}
	 }

	render(){
		return(
			<div className='coverage'>
				<Header title='提交资料'/>
				<Title>身份证拍照件</Title>
					<ImagePicker
					  files={this.state.id}
					  onChange={this.idOnChange}
					  onImageClick={(index, fs) => console.log(index, fs)}
					  selectable={this.state.id.length < 2}
					/>
				<Title>行驶证拍照件</Title>
					<ImagePicker
					  files={this.state.xingshi}
					  onChange={this.xingshiOnChange}
					  onImageClick={(index, fs) => console.log(index, fs)}
					  selectable={this.state.xingshi.length < 1}
					/>
				<Title>其他（非必填）</Title>
					<ImagePicker
					  files={this.state.other}
					  onChange={this.otherOnChange}
					  onImageClick={(index, fs) => console.log(index, fs)}
					  selectable={this.state.other.length < 9}
					/>
            	<div  className='button-box'>
            		<Button type="primary" onClick={this.submit}>提交</Button>
            	</div>

			</div>
		)
	}
}

export default Upload