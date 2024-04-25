import conf from "../conf/conf.js";
import {Client,ID,Databases,Storage,Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("661a9af6d1fba5cb1448");
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // cleatepost 
    async createPost({title,slug,content,featuredimage,status,userId}){
        try {
            return await this.databases.createDocument(
                "661a9cf17e51068613eb",
                "661a9d4f415b25b6333b",
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status,
                    userId
                }
            )
            
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
            
        }

    }

    // updatePost
    async updatePost(slug,{title,content,featuredimage,status}){
        try {
            return await this.databases.updateDocument(
                "661a9cf17e51068613eb",
                "661a9d4f415b25b6333b",
                slug,
                {
                    title,
                    content,
                    featuredimage,
                    status
                }
            )
            
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
            
        }


    }


    // deletePost
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                "661a9cf17e51068613eb",
                "661a9d4f415b25b6333b",
                slug
            )
            return true
            
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return false
            
        }
    }


    // getPost
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                "661a9cf17e51068613eb",
                "661a9d4f415b25b6333b",
                slug
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
            return false
            
        }
    }

    // getAllPosts
    async getPosts(queries = [Query.equal("status","active")]){
        try {
            return await this.databases.listDocuments(
                "661a9cf17e51068613eb",
                "661a9d4f415b25b6333b",
                queries,
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error)
            return false
            
        }

    }


    // file upload servises
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                "661a9f7923f83737df6f",
                ID.unique(),
                file,
            )
            
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error)
            return false
        }
    }


    // deleteFile
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                "661a9f7923f83737df6f",
                fileId

            )
            return true
            
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error)
            return false
            
        }

    }


    // getfilepriview
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            "661a9f7923f83737df6f",
            fileId
        )
    }




}

const appwriteService = new Service()
export default appwriteService
