import {Injectable} from '@nestjs/common';
import {Author} from '../models/author.model';
import {pubsub} from '../pubsubfol/pubsub'

const datakar = [
  {id:"1",firstName:"jono",lastName:"bekasi"},
  {id:"1",firstName:"jono",lastName:"bekasi"},
]
// GOBLOK
// /MAKNAKNKNKA
@Injectable()
export class Userservices{
  constructor(){}

  buat(){
    return {uid:1,post:datakar}
  }
  kirim(firstName,lastName){
    const num = 20
    console.log(num)
  const save =  {
    id:num.toString(),
      firstName:firstName,
      lastName:lastName
    }
    datakar.push(save)
    pubsub.publish('post',{subauthor:{post:datakar}})
    return save

  }
}
