> 测试创建实体类

var myHeaders = new Headers();
myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "*/*");
myHeaders.append("Host", "localhost:3000");
myHeaders.append("Connection", "keep-alive");

var raw = JSON.stringify({
   "name": "Tom",
   "age": 12,
   "breed": "a unkonw breed"
});

var requestOptions = {
   method: 'POST',
   headers: myHeaders,
   body: raw,
   redirect: 'follow'
};

fetch("http://localhost:3000/cats/createCat", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));