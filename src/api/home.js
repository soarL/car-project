import Server from '@/api/server'

class Home extends Server{
	async login(params){
		let data = await this.POST('/yii2-insurance/web/index.php?r=api/user/bind',params)
		return data
	}
	async register(params){
		let data = await this.POST('/yii2-insurance/web/index.php?r=api/user/bind',params)
		return data
	}
}

export default new Home()