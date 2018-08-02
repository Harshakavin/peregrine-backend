// import * as dotenv from "dotenv";
import Article from "../Model/articles";
import SavedArticle from "../Model/savedArticles";

export default class UserCtrl  {

    public GetTaUserCtrl() {
        return UserCtrl;
    }

    public login(req: any, res: any) {

       return res.status(200).json("success");

    }

    public signUp = (req: any, res: any) => {

             return res.status(200).json("success");

    }
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
    public getAllsavedArticles(req: any, res: any) {
        console.log("request");
        SavedArticle.find({}).then((response: any) => {
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

                return res.status(200).json("success");

    }
    public saveArticles(req: any, res: any) {

                console.log(req.body);
                const article = JSON.parse(JSON.stringify(req.body));
                const saveingArticle = new SavedArticle(article);
                saveingArticle.save((error: Error, data: any) => {
                            if (error) {
                               return res.status(401).json("success");
                            } else {
                                 return res.status(200).json("success");
                            }

                 });

    }

}
