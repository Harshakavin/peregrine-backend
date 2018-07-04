// import * as dotenv from "dotenv";
import Article from "../Model/articles";

export default class UserCtrl  {

    public GetTaUserCtrl() {
        return UserCtrl;
    }

    public login(req: any, res: any) {


       return res.status(200).json('success');



    }

    public signUp = (req: any, res: any) => {

             return res.status(200).json('success');

    };
    public getAllArticles(req: any, res: any) {
        console.log("request");
         Article.find({}).then((response: any) => {
             console.log(response)  ;
             const articles: any[] = [];
                response.forEach((item: any) => {
                    articles.push(item);
                });
                console.log(articles);
                 return res.status(200).json(articles);
            }).catch((err: Error) => {
                 return res.status(401).json(err.message.toString());
            });


    }
     public getArticlesCategories(req: any, res: any) {

                return res.status(200).json('success');


    }


}
