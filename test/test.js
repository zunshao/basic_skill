var url = 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=aa&json=1&p=3&sid=1423_21105_18559_17001&req=2&bs=qq邮箱&pbs=qq邮箱&csor=2&cb=jQuery110208542434123059137_1520300700049&_=1520300700058';
fetch(url).then(function(response){
    console.log('第一次进入then...');
    if(response.status>=200 && response.status<300){
        console.log('Content-Type: ' + response.headers.get('Content-Type'));
        console.log('Date: ' + response.headers.get('Date'));
        console.log('status: ' + response.status);
        console.log('statusText: ' + response.statusText);
        console.log('type: ' + response.type);
        console.log('url: ' + response.url);
        return Promise.resolve(response);
    }else{
        return Promise.reject(new Error(response.statusText));
    }
}).then(function(data){
    console.log('第二次进入then...');
    console.log(data);
}).catch(function(e){
    console.log('抛出的错误如下:');
    console.log(e);
});