import string from './css.js'




const player={
    id:undefined,
    time:100,
    n:0,
    string2:'',
    ui:{
         demo:document.querySelector('#demo'),
         demo2:document.querySelector('#demo2')
    },
    init:()=>{
        player.ui.demo.innerHTML=string.substr(0,player.n)
        player.ui.demo2.innerHTML=string.substr(0,player.n)
        player.play()
        player.bindEvents()
    },
    events:{
        '#btnPause':'pause',
        '#btnPlay':'play2',
        '#btnSlow':'slow',
        '#btnNormal':'normal',
        '#btnFast':'fast'
    },
    bindEvents:()=>{
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                
                const value=player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
     run:()=>{
      if(player.n<string.length){
           if(string[player.n]===' '){
              
               player.string2+='&nbsp'
           }else if(string[player.n]==='\n'){
               player.string2+='<br>'
           }else{
               player.string2+=string[player.n]
               player.ui.demo.innerHTML=player.string2
               player.ui.demo2.innerHTML=string.substr(0,player.n)
               player.ui.demo.scrollTop=player.ui.demo.scrollHeight

           }
           player.n+=1
        }else{
            player.pause()
            return
        }
       
        
    },
    play2:()=>{
        if(!player.id){
            player.play()
        }},
     play:()=>{
        player.id= setInterval(player.run,player.time)
    },
     pause:()=>{
        window.clearInterval(player.id)
        player.id=0
    },
     slow:()=>{
         player.pause()
        player.time=300
        player.play()
    },
     normal :()=>{
        player.pause()
        player.time=100
        player.play()
    },

     fast:()=>{
        player.pause()
        player.time=0
        player.play()
    }
}
player.init()

