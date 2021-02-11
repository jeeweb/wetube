//const express = require('express')
import express from "express";
import morgan from "morgan";
const app = express()

const PORT = 4000;

/* function handleListening() {
	console.log(`Listening on: http://Localhost:${PORT}`)
} */
const handleListening = () => console.log(`Listening on: http://Localhost:${PORT}`);

/* 
	request object: 
		우리가 정보를 얻고자 할때, 누가 페이지를 요청했는지나 어떤 종류의 데이터가 페이지로 전송됐는지에 대한 정보
	 예) 이 URL에 post방식으로(app.post) 아이디와 패스워드가 전송되면 서버에는 request object로 그 정보를 얻을 수 있음
*/
/* function handleHome(req, res) {
	// response object
	res.send('Hello from home')
} */
const handleHome = (req, res) => res.send('Hello from home');

/*
function handleProfile(req, res){
	res.send('You are on my profile');
}
 */
const handleProfile = (req, res) => res.send('You are on my profile');

// middleware 완료하기 전까지 실행할 함수
const betweenHome = (req, res, next) => {
	console.log('Between');
	next();	// 다음 middleware를 호출, 이 예시에서는 handleHome이 다음순서로 호출됨
};

app.use(betweenHome);	// 모두 적용, 해당 코드 아래에 있는 모든 코드에 적용됨

// app.get("/", betweenHome, handleHome)	// middleware를 개별적으로도 적용할 수 있음
app.get("/", handleHome)

app.get("/profile", handleProfile)

app.listen(PORT, handleListening);		// localhos:4000 서버