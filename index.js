const express = require('express')
const app = express()

const PORT = 4000;

function handleListening() {
	console.log(`Listening on: http://Localhost:${PORT}`)
}

function handleHome(req, res) {
	 /* 
		 request object: 
		 	우리가 정보를 얻고자 할때, 누가 페이지를 요청했는지나 어떤 종류의 데이터가 페이지로 전송됐는지에 대한 정보
			예) 이 URL에 post방식으로(app.post) 아이디와 패스워드가 전송되면 서버에는 request object로 그 정보를 얻을 수 있음
	*/
	// console.log(req);

	// response object
	res.send('Hello from home')
}

function handleProfile(req, res){
	res.send('You are on my profile');
}

app.get("/", handleHome)

app.get("/profile", handleProfile)

app.listen(PORT, handleListening);		// localhos:4000 서버