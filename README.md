# vong_quay_may_man_api_interview
`This repository just for interview demo`


### Stack

#### BE
- I use `Express` on `NodeJs` to build server
- Environment `NodeJs v16.13.1` 
- I use `Heroku` for server
- I use free service of `MongoDB` for database

Link repo: [this project](https://github.com/NguyenCuong-VN/vong_quay_may_man_api_interview.git)

#### FE
- This project not develop any FE feature


#### Note
- Because using free services, all api & data may be slower than normal.
- I deploy the BE code to the `heroku` server (I don't have a real server available now). So the website can load slowly on the first time you visit.

-------------------------------------------------------------

### How to build it
> If you want to clone this

Make sure you have **NodeJs** & **MongoDB** environments on above. If it's OK, follow these steps.

Clone project
```sh
git clone https://github.com/NguyenCuong-VN/vong_quay_may_man_api_interview.git
cd vong_quay_may_man_api_interview
npm install 
```

Create env
```sh
echo "MONGODB_URL=<your_url_to_mongodb_service>" > .env
```

Run dev
```sh
npm run dev
```

Run production
```sh
npm start
```

-------------------------------------------------------------
### How to use it
##### End-point: Get all item
###### Method: GET
>```
>https://vong-quay-may-man-api.herokuapp.com/v1/api/item
>```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

##### End-point: Rotate
###### Method: POST
>```
>https://vong-quay-may-man-api.herokuapp.com/v1/api/rotate
>```
###### Body (**raw**)

```json
{
    "username": "user2",
    "password": "pwd2"
}
```
or use **user1/pwd1** instead.

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

##### End-point: Get all history
###### Method: GET
>```
>https://vong-quay-may-man-api.herokuapp.com/v1/api/history
>```

-------------------------------------------------------------

### Others

If you have any questions or want permission to access the database, Please DM or send me your email. I will invite you to the project on MongoDB.

<br/>


----
Firstly, thanks so much for viewing this repo.

Actually, I don't have much time to develop, so maybe this repo can make you confused or difficult to understand. I know that, but I just have a little time for coding and cleaning code (yo I know it is important :D ).

Anyway, thanks again for this.

Have a good day, huh. See yah!!
