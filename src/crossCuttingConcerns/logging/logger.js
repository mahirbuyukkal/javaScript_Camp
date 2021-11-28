export class BaseLogger{
    log(data){
        console.log("Default logger : " + data)
    }
}

export class ElasticLogger extends BaseLogger{
    log(data){
        console.log("Logged to Elastic" + data)
    }
}
// aslında ikisi de baselogger
export class MongoLogger extends BaseLogger{
    log(data){
        console.log("Logged to Mongo" + data)
    }
}