import conf from "../conf/conf"
import {  Client, Databases, ID,Storage,Query } from "appwrite";
export class Service{
client=new Client();
databases;
bucket;
constructor()
{
    this.client
    .setEndpoint(appwriteUrl)
    .setProject(appwriteProjectId);
    this.databases=new Databases(this.client)
    this.bucket=new Storage(this.client)
    
}
async createPost({title,slug,content,featuredImage,status,userId})
{
    try{
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredImage,
                status,
                userId,


            }
        )
    }
    catch(error)
    {
        console.log("Appwrite service::createPost::error",error);
    }
}
//unique Id will generate by slug
async updatePost(slug,{title,content,featuredImage,status})//unique id is generating separately beacause document
//id is important to update document
{
    try{
        return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,{
                title,
                content,
                featuredImage,
                status,
            }
        )
    }
    catch(error)
    {
        console.log("Appwrite service::updatePost::error",error);
    }

}
async deletepost(slug)
{
    try{
        await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
        return true
    }
    catch(error)
    {
        console.log("Appwrite service::deletePost::error",error);
        return false
    }
}
async getPost(slug){
    try{
        return this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
    }
    catch(error)
    {
        console.log("Appwrite service::getPost::error",error);
        return false
    }
}
async getPosts(queries=[Query.equal("status","active")])
{
    try{
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
        )
    }
    catch(error)
    {
        console.log("Appwrite service::getPosts::error",error);
        return false

    }
}
}
const service=new service()
export default service
