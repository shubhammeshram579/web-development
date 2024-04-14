import conf from "../conf/conf";
import {Client,Account,ID} from "appwrite";


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // registration accout
    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email ,password ,name);
            if(userAccount){
                return this.login({email ,password});

            }else {
                return userAccount
            }

        } catch (error) {
            throw error;

        }
    }



    // loging page
    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
            
        } catch (error) {
            throw error
            
        }

    }


    // user access
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("appr", error)
        }
        return null;
    }



    // logout page
    async logout(){
        try {
            await this.account.deleteSession();
            
        } catch (error) {
            console.log("appr", error)
            
        }
    }

}


const authService = new AuthService();

export default authService;