console.log("hello");

let wave=document.getElementById('stop');
wave.classList.remove("animation");


const music = new Audio('audio/1.mp3');
// music.play();

const songs=[
    {
        id:'1',
        songName: ` BLUE EYES <br>
        <div class="subtitle">Yo Yo Honey Singh</div> `,
        poster:'img/1.jpg'
    },
    {
        id:'2',
        songName:` PHIR MOHABBAT <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:'img/2.jpg'
    },
    {
        id:'3',
        songName:` IKTARA <br>
        <div class="subtitle">Amit Trivedi</div>`,
        poster:'img/3.jpg'
    },
    {
        id:'4',
        songName:`RAM RAM <br>
        <div class="subtitle">MC Square</div>`,
        poster:'img/4.jpg'
    },
    {
        id:'5',
        songName:`I GUESS <br>
        <div class="subtitle">KRSNA</div>`,
        poster:'img/5.jpg'
    },
    {
        id:'6',
        songName:`LEMONADE <br> 
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster:'img/6.jpg'
    },
    {
        id:'7',
        songName:`Besharam Rang <br>
        <div class="subtitle">Vishal Shekhar</div>`,
        poster:'img/7.jpg'
    },
    {
        id:'8',
        songName:`Pyaar Hota  <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:'img/8.jpg'
    },
    {
        id:'9',
        songName:`Champangne <br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster:'img/9.jpg'
    },
    {
        id:'10',
        songName:`MockingBird <br>
        <div class="subtitle">Eminem</div>`,
        poster:'img/10.jpg'
    },
    {
        id:'11',
        songName:`Ektarfa <br>
        <div class="subtitle">King</div>`,
        poster:'img/11.jpg'
    },
    {
        id:'12',
        songName:`Maan Meri Jaan <br>
        <div class="subtitle">King</div>`,
        poster:'img/12.jpg'
    },
    {
        id:'13',
        songName:`10 pe 10 <br>
        <div class="subtitle">KR$NA</div>`,
        poster:'img/13.jpg'
    },
    {
        id:'14',
        songName:`Chhore NCR Aale <br>
        <div class="subtitle">Paradox</div>`,
        poster:'img/14.jpg'
    },
    {
        id:'15',
        songName:`Levels <br>
        <div class="subtitle">Sidhu Moosewala</div>`,
        poster:'img/15.jpg'
    },
    {
        id:'16',
        songName:`Dj Wale Babu <br>
        <div class="subtitle">Badshah</div>`,
        poster:'img/16.jpg'
    },
    {
        id:'17',
        songName:`Tere Pyaar mein <br>
        <div class="subtitle">Arijit Singh</div>`,
        poster:'img/17.jpg'
    },
    {
        id:'18',
        songName:`Nazar Lag Jaayegi <br>
        <div class="subtitle">Javed Ali</div>`,
        poster:'img/18.jpg'
    },
    {
        id:'19',
        songName:`Roll Up <br>
        <div class="subtitle">KR$NA/Badshah</div>`,
        poster:'img/19.jpg'
    },
    {
        id:'20',
        songName:`Fall Off <br>
        <div class="subtitle">KR$NA</div>`,
        poster:'img/20.jpg'
    },
    {
        id:'21',
        songName:`Villan <br>
        <div class="subtitle">KR$NA</div>`,
        poster:'img/21.jpg'
    },
    {
        id:'22',
        songName:`Untitled <br>
        <div class="subtitle">KR$NA</div>`,
        poster:'img/22.jpg'
    },
    {
        id:'23',
        songName:`Tommy Lee <br>
        <div class="subtitle">Tyla Yaweh</div>`,
        poster:'img/23.jpg'
    },
    {
        id:'24',
        songName:`Titanic <br>
        <div class="subtitle">Juice Wrld</div>`,
        poster:'img/24.jpg'
    },
    {
        id:'25',
        songName:`Legends <br>
        <div class="subtitle">Juice Wrld</div>`,
        poster:'img/25.jpg'
    },
    {
        id:'26',
        songName:`Black And White <br>
        <div class="subtitle">Juice Wrld</div>`,
        poster:'img/26.jpg'
    },
    {
        id:'27',
        songName:`Bandit <br>
        <div class="subtitle">Juice Wrld</div>`,
        poster:'img/27.jpg'
    },
    {
        id:'28',
        songName:`Ghost <br>
        <div class="subtitle">Confetti</div>`,
        poster:'img/28.jpg'
    },
    {
        id:'29',
        songName:`Enemy <br>
        <div class="subtitle">Imaginary Dragons</div>`,
        poster:'img/29.jpg'
    },
    {
        id:'30',
        songName:`Believer <br>
        <div class="subtitle">Imaginary Dragons</div>`,
        poster:'img/30.jpg'
    },
    {
        id:'31',
        songName:`Bhoj <br>
        <div class="subtitle">MC Square</div>`,
        poster:'img/31.jpg'
    },
    {
        id:'32',
        songName:`Jaadugar <br>
        <div class="subtitle">Paradox</div>`,
        poster:'img/32.jpg'
    },
    {
        id:'33',
        songName:`Summer High <br>
        <div class="subtitle">AP Dhillon</div>`,
        poster:'img/33.jpg'
    },
    {
        id:'34',
        songName:`Namo Namo <br>
        <div class="subtitle">Amit Trivedi</div>`,
        poster:'img/34.jpg'
    },
    {
        id:'35',
        songName:`NO LOVE <br>
        <div class="subtitle">SHUBH</div>`,
        poster:'img/35.jpg'
    },
    {
        id:'36',
        songName:`WE ROLLIN <br>
        <div class="subtitle">SHUBH</div>`,
        poster:'img/36.jpg'
    },
    {
        id:'37',
        songName:`Dope Shope <br>
        <div class="subtitle">Yo Yo Honey Singh</div>`,
        poster:'img/37.jpg'
    },
    {
        id:'38',
        songName:`Excuses <br>
        <div class="subtitle">AP Dhillon</div>`,
        poster:'img/38.jpg'
    }
]

Array.from(document.getElementsByClassName('song_item')).forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;

})

let masterplay=document.getElementById('masterplay');
let master_poster=document.getElementById('master_poster');
let title=document.getElementById('title');


masterplay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <= 0){
        music.play();
        wave.classList.add("animation");
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
    }
    else{
        music.pause();
        wave.classList.remove("animation");
        masterplay.classList.add("fa-circle-play");
        masterplay.classList.remove("fa-circle-pause");
    }
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playList')).forEach((element)=>{
            element.classList.add("fa-circle-play");
            element.classList.remove("fa-circle-pause");
    })
}

// const makeAllbackgrounds = () => {
//     Array.from(document.getElementsByClassName('song_item')).forEach((element)=>{
//         element.style.background = "pink";
//     })
// }

let index=0;

Array.from(document.getElementsByClassName('playList')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        index = e.target.id;
        makeAllplays();
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        music.src = `audio/` + index + `.mp3`;
        master_poster.src= `img/` + index + `.jpg`;
        music.play();
        let song_title=songs.filter((ele)=>{
            return ele.id == index;
        })
        song_title.forEach(ele =>{
            let {songName} = ele
            title.innerHTML = songName;
        })
        wave.classList.add("animation");
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause");
        music.addEventListener('ended',()=>{
            wave.classList.remove("animation");
            masterplay.classList.add("fa-circle-play");
            masterplay.classList.remove("fa-circle-pause");
        })        

        // makeAllbackgrounds();
        // // Array.from(document.getElementsByClassName('song_item'))[`${index-1}`].style.background = "pink";
    })
})


let currentstart=document.getElementById('currentstart');
let currentend=document.getElementById('currentend');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;

    let min= Math.floor(music_dur/60);
    let sec= Math.floor(music_dur%60);

    if(sec<10){
        sec = `0${sec}`;
    }

    currentend.innerText = `${min}:${sec}`;

    let min1= Math.floor(music_curr/60);
    let sec1= Math.floor(music_curr%60);

    if(sec1<10){
        sec1 = `0${sec1}`;
    }

    currentstart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value=progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration/100;
})

music.addEventListener('ended', ()=>{
    wave.classList.remove("animation");
    masterplay.classList.add("fa-circle-play");
    masterplay.classList.remove("fa-circle-pause");
})

let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_dot=document.getElementById('vol_dot');
let vol_bar=document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change',() =>{
    if(vol.value == 0){
        vol_icon.classList.remove("fa-volume-low");
        vol_icon.classList.add("fa-volume-off")
        vol_icon.classList.remove("fa-volume-high")
    }
    if(vol.value > 0){
        vol_icon.classList.add("fa-volume-low");
        vol_icon.classList.remove("fa-volume-off")
        vol_icon.classList.remove("fa-volume-high")
    }
    if(vol.value >50){
        vol_icon.classList.remove("fa-volume-low");
        vol_icon.classList.remove("fa-volume-off")
        vol_icon.classList.add("fa-volume-high")
    }

    let vol_a=vol.value;

    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;

    music.volume = vol_a/100;
})


let next=document.getElementById('next');
let back=document.getElementById('back');

back.addEventListener('click',()=>{
    index-=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('song_item')).length;
    }
    music.src = `audio/` + index + `.mp3`;
    master_poster.src= `img/` + index + `.jpg`;
    music.play();
    let song_title=songs.filter((ele)=>{
        return ele.id == index;
    })
    song_title.forEach(ele =>{
        let {songName} = ele
        title.innerHTML = songName;
    })
    // wave.classList.add("animation");
    makeAllplays();
    document.getElementById(`${index}`).classList.remove("fa-circle-play");
    document.getElementById(`${index}`).classList.add("fa-circle-pause");
})


next.addEventListener('click',()=>{
    index+=1;
    if(index > Array.from(document.getElementsByClassName('song_item')).length){
        index=1;
    }
    music.src = `audio/` + index + `.mp3`;
    master_poster.src= `img/` + index + `.jpg`;
    music.play();
    let song_title=songs.filter((ele)=>{
        return ele.id == index;
    })
    song_title.forEach(ele =>{
        let {songName} = ele
        title.innerHTML = songName;
    })
    // wave.classList.add("animation");
    makeAllplays();
    document.getElementById(`${index}`).classList.remove("fa-circle-play");
    document.getElementById(`${index}`).classList.add("fa-circle-pause");
})

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];


left_scroll.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
})

right_scroll.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];


left_scrolls.addEventListener('click',()=>{
    item.scrollLeft -= 330;
})

right_scrolls.addEventListener('click',()=>{
    item.scrollLeft += 330;
})