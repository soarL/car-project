import Server from '@/api/server'
import { Toast } from 'antd-mobile'

class Home extends Server{
	async workUserData(params){
		let data = await this.POST('/index.php?r=api/work/work-user-data',params)
		return data
	}

	async workInsuranceData(params){
		let data = await this.POST('/index.php?r=api/work/work-insurance-data',params)
		return data
	}

	async workOfficeData(params){
		let data = await this.POST('/index.php?r=api/work/work-office-data',params)
		return data
	}

	async workUserCard(params){
		let data = await this.POST('/index.php?r=api/work/work-user-card',params)
		if(data.ret==='0000'){
			return true
		}else{
			Toast.fail(data.msg)
			return false
		}
	}

	async workUserImage(params){
		let data = await this.POST('/index.php?r=api/work/work-user-image',params)
		data.data.content.ret = data.ret
		return data.data.content
	}

	async city(){
		let data = await this.POST('/index.php?r=api/user/city')
		return data
	}

	async goToTable(history){
		let data = await this.POST("/index.php?r=api/work/work-contiu")
		
		if(data.ret==='0000'){
			return false
		}else{
			return {pathname:`/home/${data.data.content.table}`,query:data.data.content.strWorkNum}
		}
		
	}

}

export default new Home()