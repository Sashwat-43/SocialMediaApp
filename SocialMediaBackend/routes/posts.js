const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");


// creating a post

router.post("/",async(req,res)=>{

    const tempPost = new Post(req.body);

    try{
        const post = await tempPost.save();
        res.status(200).json(tempPost);

    }catch(err){
        res.status(404).json(err);
    }

})

// updating a post

// for updating firstly we find the post with id of params.id
// now we check whether this post is created by the user with userId or not
// if no then we restrict this action and prompt that you have not created this post, so you cannot update this post
// else we update this post


router.put("/:id",async(req,res)=>{

    try{
        const tempPost = await Post.findById(req.params.id);
        if(!tempPost){
            return res.status(404).json("No such post exists!");
        }
        if(tempPost.userId == req.body.userId){
            await tempPost.updateOne({$set:req.body});
            res.status(200).json("Post updated successfully!");
        }else{
            res.status(501).json("You have not created this post so you cannot update this post!")
        }
    }catch(err){
        res.status(404).json(err);
    }
    

})

// getting a post

// first of all we check whether there exists post with id as params.id or not
// if not then we restrict this action and prompt that no such post exists
// else we get the post by findById

router.get("/:id",async(req,res)=>{
    try{
        const tempPost = await Post.findById(req.params.id);
        if(!tempPost)
        {
            return res.status(404).json("No such post exists!");
        }
        const {updatedAt,...others} = tempPost;
        res.status(200).json(others);
    }catch(err){    
        res.status(404).json(err);
    }
})

// deleting a post


// first of all we check whether there exists post with id as params.id or not
// if not then we restrict this action and prompt that no such post exists
// else
// for deleting we firstly check whether the post is created by user with body.userId or not
// if not then we restrict this action and prompt that you have not created this post so you cannot delete this post
// else we simply find the post by params.id and delete this post

router.delete("/:id",async(req,res)=>{
    try{
        const tempPost = await Post.findById(req.params.id);
        if(!tempPost){
            return res.status(404).json("No such post exists!");
        }
        if(tempPost.userId==req.body.userId){
            await tempPost.deleteOne();
            res.status(200).json("Post deleted successfully!");
        }else{
            res.status(501).json("You have not created this post so you cannot delete this post!");
        }
    }catch(err){
        res.status(404).json(err);
    }
})

// liking  post

// first of all we find whether post exists with this params.id or not
// if not then we restrict this action and prompt that no such post exists
// else now we check whether the user has already liked this post or not
// if yes then restrict this action
// else we insert the user id in likes array of post with params.id


router.put("/:id/like",async(req,res)=>{
    try{
        const tempPost = await Post.findById(req.params.id);
        if(!tempPost){
            return res.status(501).json("No such post exists!");
        }
        if (tempPost.likes.includes(req.body.userId)){
            res.status(501).json("Post already liked!");
        }else{
            await tempPost.updateOne({$push:{likes:req.body.userId}});
            res.status(200).json("Post liked successfully!");
        }
    }catch(err){
        res.status(404).json(err);
    }
})

router.put("/:id/unlike",async(req,res)=>{
    try{
        const tempPost = await Post.findById(req.params.id);
        if(!tempPost){
            return res.status(501).json("No such post exists!");
        }
        if (tempPost.likes.includes(req.body.userId)){
            await tempPost.updateOne({$pull:{likes:req.body.userId}});
            res.status(200).json("Post unliked successfully!");
        }else{
            res.status(501).json("Post unliked already!");
        }
    }catch(err){
        res.status(404).json(err);
    }
})


// get all posts of user

router.get("/MyProfile/:username",async(req,res)=>{
    try{
        // console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
        const tempUser = await User.findOne({username:req.params.username});
        if(!tempUser){
            return res.status(404).json("No such user exists!");
        }
        const userPosts = await Post.find({userId:tempUser._id});
        res.status(200).json(userPosts);
    }catch(err){
        res.status(404).json(err);
    }
})


// getting all posts of user and user's followings 

// we find all posts of user by simply using Post.find and search for all posts which have same userId as that of req.body.userId
// we go to followings array of user with body.userId and then for each user in followings array we find the post they created with help of get api of post

router.get("/allposts/:userId",async(req,res)=>{
    try{
        // console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
        const tempUser = await User.findById(req.params.userId);
        if(!tempUser){
            return res.status(404).json("No such user exists!");
        }
        const userPosts = await Post.find({userId:req.params.userId});
        const followersPosts = await Promise.all(
            tempUser.followings.map((follower) =>{
                return Post.find({userId: follower});
            })
        )
        const allPosts =  userPosts.concat(...followersPosts);
        res.status(200).json(allPosts);
    }catch(err){
        res.status(404).json(err);
    }
})

module.exports = router; 