import conf from '../conf/conf'
import { Account, Client, Databases, ID } from "appwrite";

export class AuthService{
    client=new Client;//when object will be created the client will also be created
    //const client = new Client();
    //client.setProject('679db8ef002988a7fe70');
    account;
    constructor()
    {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        this.account=new Account(this.client);
    }


async createAccount({email,password,name})
{
    try{
       const userAccount= await this.account.create(ID.unique(),email,password,name);
       if(userAccount){
            return this.logIn({email,password});//if already sign up then returning log in
       }
       else{
        return userAccount
       }
    }
    catch(error){
        throw error;
    }
}
async logIn({email,password})
{
    try{
      return  await this.account.createEmailPasswordSession(email,password);
    }
    catch (error)
    { throw error
    }
}
async getCurrentUser() {
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite serive :: getCurrentUser :: error", error);
    }

    return null;
}

async logOut()
{
try{
    return await this.account.deleteSessions();
}
catch{
    console.log("Appwrite service::logOut::error",error);
}
}
}
const authService=new AuthService
export default authService