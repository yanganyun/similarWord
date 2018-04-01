var express = require('express');
var path = require ('path');
var fs = require('fs');
var app = express();
app.listen(3000,'localhost');


//首页
app.get('/', function(req, res){
    appObj.getPageStr('src/index.html',req,res);
});

//首页
app.get('/login', function(req, res){
    appObj.getPageStr('src/index.html',req,res);
});

//app操作方法
var appObj = {
    path :  path.join(__dirname,'../'),
    getPageStr : function(ps,req,res){
        var self = this;
        
        fs.readFile(self.path + ps, function(err, data){
            if(err){
                res.writeHead(404,{
                    'content-type':'text/html;charset=utf-8'
                });
                res.end('页面错误！');
            }else{
                res.writeHead(200,{
                    'content-type':'text/html;charset=utf-8'
                });
                res.end(data);
            }
        });
        
    }
};




  