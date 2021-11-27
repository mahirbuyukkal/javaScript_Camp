export default class UserService{
    constructor(loggerService){
        this.users = []
        this.loggerService = loggerService
    }

    add(user){
        this.users.push(user)
        this.loggerService.log(user)
    }

    list(){
        // console.log("kullanıcı listelendi")
        return this.users
    }

    getById(id){
        // console.log("kullanıcı detayı getirildi")
        return this.users.find(u=>u.id === id)
    }

}