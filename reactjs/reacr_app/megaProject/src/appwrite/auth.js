import conf from "../conf/conf.js";
import {Client,Account,ID} from "appwrite";



export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("661a9af6d1fba5cb1448");
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



    // loging page changes
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
            console.log("Appwrite serive :: getCurrentUser :: error", error)
        }
        return null;
    }



    // logout page
    async logout(){
        try {
            await this.account.deleteSession();
            
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error)
            
        }
    }

}


const authService = new AuthService();

export default authService;