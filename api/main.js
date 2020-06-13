/**
 * Sorteia um user aleatório dentre os comentários do instagram.
 * Retorna uma promise: 
 * 
 * npm i instagram-web-api
 * 
 * Exemplo: getFullusernames('https://www.instagram.com/p/CBTrP-ApHi6/').then(e => console.log(e))
 * AVISO: insira suas credenciais do instagram no arquivo do módulo.
 */

const Instagram = require('instagram-web-api')

const username  = ''
const password  = ''
 
const client = new Instagram({ username, password })

async function getComment(url ,first , after){
let shortcode  = url.split('/')[4]
let ids = [];
 await client.getMediaComments({ shortcode, first , after }).catch((error) => {
    console.log(error);
  })
  .then((response) => {
    let names  = response.edges.map((e) => {
      ids.push(e.node.owner.username)
    })
  });

  return ids
}

async function getFullusernames(link){

 let list  = []; 
 await getComment( link,49,0).then(e => list.push(...e ))
 for(let i = 0; i <  10; i++){
    await getComment( link,i * 50 , 49).then(e => {
        if(e){
            list.push(...e )
        }
    })
 }

 let rand  = Math.floor(Math.random() * list.length + 0)


 return { list, rand: list[rand] }
 }


 module.exports = getFullusernames()

