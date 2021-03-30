# ukk-practice
### download nodejs
### buat folder mkdir "nama folder"
### cd "nama folder"
### npm init -y
### npm install sequelize,
### npm install sequelize-cli,
### npm install mysql2,
### npm install mariadb,
### npm install dotenv,
### npm install express,
### npm install bcrypts,
### npm install jsonwebroken,
### npm install cors,
### npx sequelize-cli --help --> klo lupa syntax 
### npx sequelize-cli init
### ganti config jadi nama databases
### npx sequelize-cli db:create
### npx sequelize-cli model:generate --name "nama_tabel" --attributes nama:tipedata,nama:tipedata
### npx sequelizecli migrate
### ke cmd cek di mysql
### buat new file app.js
### cara jalankan : nodemon app.js
buat router di folder routes
buat spesifik nama router misal userRouter maka buat file userRoutes.js
panggil userRouter di index.js kemudian buat list router spesifik di userRouter kemudian buat file untuk grouping userRouter
buat folder controller untuk memanggil model dan menghandle request dari router
note : klo request sukses status json 200, gagal
referensi https://httpstatuses.com/
klo error lihat di cmd perhatikan error folder yg bukan node_modules
