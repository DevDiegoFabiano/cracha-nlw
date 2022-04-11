// xD

// Criando redirecionadores de link eficientes
// Valores utilizados
const LinksSocialMedia = {
  github: 'DevDiegoFabiano',
  linkedin: 'diego-fabiano-de-sousa-a079491b8'
}

function changeSocialMediaLinks() {
// coletando o atributo html para que ele receba os valores adequados ( o pegamos pela classe e utilizei template string para me ajudar nessa)
  for ( let li of socialLinks.children){
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
 changeSocialMediaLinks ()

// Coletando informações de usúario via api com o github

// fiz uma variavel pra não ficar usando o link o tempo todo 
 function getGitHubProfileInfos (){

   const url =  `https://api.github.com/users/${LinksSocialMedia.github}`
   fetch(url)
   .then(response =>  response.json() )
   .then(data => {
     userName.textContent = data.name
     userBio.textContent = data.bio
     userLink.href = data.html_url
     userImage.src = data.avatar_url
     userLink.textContent = data.login
     userLinkedin.href = data.blog

   })
// Recebemos os dados do github que está na promesa e  então transformamos em json e fizemos acesso. 
 }
 getGitHubProfileInfos()
 