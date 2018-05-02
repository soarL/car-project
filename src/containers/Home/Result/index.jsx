import React,{ Component } from 'react'
import Header from '@/components/Header'
import { Result,Icon} from 'antd-mobile'
import './index.less'



class Results extends Component{
	render(){
		return(
			<div className="results">
				<Header title='提交资料成功'/>
				<Result
				  img={<Icon type="check-circle" className="spe" size='big' style={{ fill: '#1F90E6' }} />}
				  title="提交成功"
				  message="所提交内容已成功完成验证"
				/>
			</div>
		)
	}
}

export default Results