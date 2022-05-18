import bcrypt from 'bcryptjs';
import db from '../models/index'
const salt=bcrypt.genSaltSync(10);
let createNewUser=async(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let hashPasswordFromBcrypt=await hashUserPassword(data.password);
            await db.User.create({

                fullname: data.fullname,
                username: data.username,
                password:hashPasswordFromBcrypt,
                idtype: 1,
                email: data.email
            })
            await db.Address.create({

                iduser: data.iduser,
                address: data.address,
                phone: data.phone
            })
        } catch (e) {
            reject(e);
        }

    })

}
let hashUserPassword=(password)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            var hashPassword=await bcrypt.hashSync(password,salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}
let getAllUser=async(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let users=db.User.findAll({raw:true});
            resolve(users);
        } catch (e) {
            reject(e);
        }

    })

}
let getUserByid=async(userid)=>{

    return new Promise(async(resolve,reject)=>{
        try {
            let users=await db.User.findOne({
                where:{id:userid},
                raw:true
            })
            if(users){
                resolve(users)
            }else{
                resolve({})
            }
        } catch (e) {
            reject(e);
        }

    })
}
let updateUserData=(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let hashPasswordFromBcrypt=await hashUserPassword(data.password);
          let user=await db.User.findOne({
              where:{id:data.id}
          })
          if(user){
            user.fullname= data.fullname;
            user.username= data.username;
            user.password=hashPasswordFromBcrypt;
            user.idtype= 1;
            user.email=data.email;
            await user.save();
            resolve();
          }else{
              resolve();
          }
          
            
        } catch (e) {
            reject(e);
        }

    })
}

module.exports={createNewUser:createNewUser,
hashUserPassword:hashUserPassword,
getAllUser:getAllUser,
getUserByid:getUserByid,
updateUserData:updateUserData
};