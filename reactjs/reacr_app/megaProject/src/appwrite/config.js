import conf from "../conf/conf";
import {Client,ID,Databases,Storage,Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    // cleatepost 
    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,userId
                }
            )
            
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
            
        }

    }

    // updatePost
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
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
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
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
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
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
                conf.appwriteDatabasesId,
                conf.appwriteCollectionId,
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
                conf.appwriteBuckedId,
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
                conf.appwriteBuckedId,
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
            conf.appwriteBuckedId,
            fileId
        )
    }




}

const service = new Service()
export default service
