import Server from '@/api/server'
import { Toast } from 'antd-mobile'

class Home extends Server{
	async login(params){
		let data = await this.POST('/yii2-insurance/web/index.php?r=api/user/bind',params)
		return data
	}
	async register(params){
		let data = await this.POST('/yii2-insurance/web/index.php?r=api/user/bind',params)
		return data
	}

	async workUserData(params){
		let data = await this.POST('/yii2-insurance/web/index.php?r=api/work/work-user-data',params)
		return data
	}

	async workInsuranceData(params){
		let data = await this.POST('/yii2-insurance/web/index.php?r=api/work/work-insurance-data',params)
		return data
	}

	async workOfficeData(params){
		let data = await this.POST('/yii2-insurance/web/index.php?r=api/work/work-office-data',params)
		return data
	}

	async workUserCard(params){
		let data = await this.POST('/yii2-insurance/web/index.php?r=api/work/work-user-card',params)
		if(data.ret==='0000'){
			return true
		}else{
			Toast.fail(data.msg)
			return false
		}
	}

	async workUserImage(params){
		let data = await this.POST('/yii2-insurance/web/index.php?r=api/work/work-user-image',params)
		data.data.content.ret = data.ret
		return data.data.content
	}

	async city(){
		let data = await this.POST('/yii2-insurance/web/index.php?r=api/user/city')
		return data
	}



}

export default new Home()