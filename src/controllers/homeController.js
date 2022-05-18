
import db from '../models/index';
import CRUDService from '../services/CRUDsevice'
let getHomePage = async(req, res) => {
    try {
        // let data=await db.User.findAll();
        // console.log(data)
        // return res.render('homepage.ejs');
        let data=await db.User.findAll();
        return res.render('homepage.ejs'
        ,{data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e);
    }
    
}





let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}
let getCRUD=(req,res)=>{

return res.render('crud.ejs');
    
}
// object: {
//     key: '',
//     value: ''
// }

let postCRUD=async(req,res)=>{
    //xuat cai da nhap vao
     CRUDService.createNewUser(req.body);
   
return res.send("post sever");
}
let postCRUD2=async(req,res)=>{
    //xuat cai da nhap vao
//await CRUDService.createNewUser(req.body);
   
return res.send("post sever");
}

let displayGetcrud=async(req,res)=>{
    let data=await CRUDService.getAllUser();
    console.log(data);
    return res.render("displaygetcrud.ejs");}

let getEditCRUD=async(req,res)=>{
    let userid=req.query.id;
    //console.log(userid);
    if(userid){
        let userData=await CRUDService.getUserByid(userid);
       
        return res.render('editcrud.ejs')
    }else{

        return res.send("khong co id");
    }
  


}

let putCRUD=async(req,res)=>{
    let data=req.body;
    await CRUDService.updateUserData(data);
    return res.send("update");
}



module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
    postCRUD2:postCRUD2,
    displayGetcrud:displayGetcrud,
    getEditCRUD:getEditCRUD,
    putCRUD:putCRUD
  
}
