
const express = require('express');
const Images = require('./src/models/images/imagesModel').Images;

const app = express()
const port = 3000

app.get('/', (req, res) => {
  Images.find({},(error,response)=>{
    if(error){
      res.sendStatus(500);
    }else{
      res.status(200).send(response);
    }
  });
});

app.post('/', (req, res) => {

  let data = {
    url: 'url',
    nameOfContributor: 'jorge almonacid'
  }

  const image = new Images(data);
  image.save(function (err) {
    if(err){
      res.sendStatus(500);
    }else{
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

