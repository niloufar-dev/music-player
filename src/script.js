const featuredPlayBtn =document.getElementById('featuredPlayBtn')

const playBtn=document.getElementById('playBtn')
const nextBtn=document.getElementById('nextBtn')
const prevBtn=document.getElementById('prevBtn')
const muteBtn=document.getElementById('muteBtn')
const volumeContainer=document.getElementById('volumeContainer')
const volumeBar=document.getElementById('volumeBar')
const playlist=document.getElementById('playlist')
const playerCover=document.getElementById('playerCover')
const playerTitle=document.getElementById('playerTitle')
const playerArtist=document.getElementById('playerArtist')
const playIcon = document.getElementById('playIcon')
const playPath = playIcon.querySelector('path')
const current = document.getElementById('currentTime')
const progressBar=document.getElementById('progressBar')
const progressContainer=document.getElementById('progressContainer')
const duration=document.getElementById('duration')
const repeatBtn=document.getElementById('repeatBtn')
const categorybtn=document.querySelectorAll('.category-btn')
const track=document.getElementById('track')
const tit=document.querySelector('.tit')
const searchInput= document.querySelectorAll('.searchInput')
let songindex=0

let songs=[
    {id:1,
    singer:'mohsen yegane',
    title:'Behet Ghol Midam',
    cover:'./image/ab6761860000019439a4ed113c1859bf7d323d37.webp',
    src:'https://dls.musics-fa.com/tagdl/downloads/Mohsen%20Yeganeh%20-%20Behet%20Ghol%20Midam%20(320).mp3',
    category:'pop',
    popular: true
    },
    {id:2,
    singer:'Shadmehr aghili',
    title:'Taghdir',
    cover:'./image/shadmehr.webp',
    src:'https://sv2.mybia2music.com/s2/Music/1401/11/11/01/Shadmehr%20Aghili%20-%20Taghdir.mp3',
    category:'pop',
    popular: true
    },
    {id:3,
    singer:'alireza ghorbani',
    title:'Hamgonah',
    cover:'./image/en.jpg',
    src:'https://dl.rozmusic.com/Music/1398/12/05/Alireza%20Ghorbani%20-%20Ham%20Gonah.mp3',
    category:'sonati',
    popular: true
    }
    ,
    {id:4,
    singer:'Homayoun shajarian',
    title:'Chera rafti',
    cover:'./image/h.jpg',
    src:'https://dls.musics-fa.com/tagdl/downloads/Homayoun%20Shajarian%20-%20Chera%20Rafti%20(320).mp3',
    category:'sonati'
    },
    {id:5,
    singer:'Shadmehr aghili',
    title:'Adat',
    cover:'./image/s.jpg',
    src:'https://dll.biamusic.ir/Tak/Shadmehr%20Aghili/Shadmehr%20Aghili%20-%20Bi%20Ehsas%20%5B128%5D.mp3',
    category:'pop',
    popular: true
    },
    {id:6,
    singer:'Shadmehr aghili',
    title:'Khoshhalam Barat',
    cover:'./image/s2.jpg',
    src:'https://dll.biamusic.ir/Tak/Shadmehr%20Aghili/Shadmehr%20Aghili%20-%20Khoshhalam%20Barat%20(128).mp3',
    category:'pop'
    },
    {id:7,
    singer:'Shadmehr aghili',
    title:'Halam Avaz Mishe',
    cover:'./image/s3.jpg',
    src:'https://rozup.ir/download/4241224/Shadmehr%20-%20Halam%20Avaz%20Mish.mp3',
    category:'pop'
    },
    {id:8,
    singer:'Shadmehr aghili',
    title:'Door Shodi',
    cover:'./image/s4.jpg',
    src:'https://dl.mokhtalefmusic.com/music/1402/06/08/Shadmehr%20Aghili%20-%20Door%20Shodi%20-%20128.mp3',
    category:'pop'
    },
    {id:9,
    singer:'mohsen yegane',
    title:'Khiaboona',
    cover:'./image/m1.jpg',
    src:'https://dl.rozmusic.com/Music/1399/07/22/Mohsen%20Yeganeh%20-%20Khiyaboona%20%28128%29.mp3',
    category:'pop'
    },
    {id:10,
    singer:'mohsen yegane',
    title:'Daryabam',
    cover:'./image/m2.jpg',
    src:'https://dl.rozmusic.com/Music/1397/09/23/Mohsen%20Yeganeh%20-%20Daryaabam%20(128).mp3',
    category:'pop'
    },
    {id:11,
    singer:'mohsen yegane',
    title:'Daryabam',
    cover:'./image/m3.jpg',
    src:'https://dl.rozmusic.com/Music/1399/12/28/Mohsen%20Yeganeh%20-%20Shahre%20Khakestari%20%28128%29.mp3',
    category:'pop'
    },
    {id:12,
    singer:'mohsen yegane',
    title:'Betars',
    cover:'./image/m4.jpg',
    src:'https://dl.rozmusic.com/Music/1403/05/31/Mohsen%20Yeganeh%20-%20Betars%20%28128%29.mp3',
    category:'pop'
    },
    {id:13,
    singer:'alireza ghorbani',
    title:'Khial Khosh',
    cover:'./image/a1.jpg',
    src:'https://dl.rozmusic.com/Music/1399/04/29/Alireza%20Ghorbani%20-%20Khiale%20Khosh%20%28128%29.mp3',
    category:'sonati'
    },
    {id:14,
    singer:'alireza ghorbani',
    title:'Parishani',
    cover:'./image/a2.jpg',
    src:'https://dl.rozmusic.com/Music/1402/03/17/Alireza%20Ghorbani%20-%20Parishani%20%28128%29.mp3',
    category:'sonati'
    },
    {id:15,
    singer:'alireza ghorbani',
    title:'Sheyda',
    cover:'./image/a3.jpg',
    src:'https://dl.rozmusic.com/Music/1403/12/14/Alireza%20Ghorbani%20-%20Sheyda%20%28128%29.mp3',
    category:'sonati'
    },
    {id:16,
    singer:'alireza ghorbani',
    title:'Eshgh Asan Nadarad',
    cover:'./image/a4.jpg',
    src:'https://dl.rozmusic.com/Music/1397/05/03/Alireza%20Ghorbani%20-%20Eshgh%20Asan%20Nadarad%20(128).mp3',
    category:'sonati'
    },
    {id:17,
    singer:'alireza ghorbani',
    title:'Bigonah',
    cover:'./image/a5.jpg',
    src:'https://dl.rozmusic.com/Music/1401/06/06/Alireza%20Ghorbani%20-%20Bi%20Gonah.mp3',
    category:'sonati'
    },
    {id:18,
    singer:'Shadmehr aghili',
    title:'Tarafdar',
    cover:'./image/s6.jpg',
    src:'https://irsv.golsarmusic.ir/GolsarMusic-Root-DL3/99/05%20Mordad/06/Shadmehr-Aghili---Tarafdar.mp3',
    category:'pop'
    },
    {id:19,
    singer:'Shadmehr aghili',
    title:'Entekhab',
    cover:'./image/s7.jpg',
    src:'https://irsv.golsarmusic.ir/GolsarMusic-Root-DL3/99/05%20Mordad/06/Shadmehr-Aghili-Entekhab-320.mp3',
    category:'pop'
    },
    {id:20,
    singer:'Moein',
    title:'Ba TO',
    cover:'./image/mo2.webp',
    src:'https://dl.birseda.net/Archive/M/Moein/Single/128/Moein%20-%20Ba%20To%20%5B128%5D.mp3',
    category:'classic pop'
    },
    {id:21,
    singer:'Moein',
    title:'Khooneh Arezoo',
    cover:'./image/mo3.jpg',
    src:'https://dl.gisomusic.com/Music/1403/01/19/Moein%20-%20Khooneye%20Arezoo.mp3?_gl=1*1701asv*_ga*NzE2NzIxNDkyLjE3ODkwNDQxODg.*_ga_KEQHMVTX68*czE3ODkwNDQxODckbzEkZzEkdDE3ODkwNDQ1ODgkajYwJGwwJGgw',
    category:'classic pop'
    },
    {id:22,
    singer:'Moein',
    title:'Hamdam',
    cover:'./image/mo4.jpg',
    src:'https://sepidmusic.musitraf.com/Download/Music/1404/09/Moein%20-%20Hamdam%20(128).mp3',
    category:'classic pop'
    },
    {id:23,
    singer:'Moein',
    title:'Shomal',
    cover:'./image/mo5.jpg',
    src:'https://dl.gisomusic.com/Music/1403/01/19/Moein%20-%20Shomal%20-%20128.mp3?_gl=1*1buh9je*_ga*NzE2NzIxNDkyLjE3ODkwNDQxODg.*_ga_KEQHMVTX68*czE3ODkwNDQxODckbzEkZzEkdDE3ODkwNDQ4NjgkajYwJGwwJGgw',
    category:'classic pop',
    popular: true
    },
    {id:24,
    singer:'Moein',
    title:'Bahaneh',
    cover:'./image/mo6.jpg',
    src:'https://dl.gisomusic.com/Music/1403/01/18/Moein%20-%20bahaneh.mp3?_gl=1*1r8zqnz*_ga*NzE2NzIxNDkyLjE3ODkwNDQxODg.*_ga_KEQHMVTX68*czE3ODkwNDQxODckbzEkZzEkdDE3ODkwNDUxNjkkajEkbDAkaDA.',
    category:'classic pop',
    popular: true
    },
    {id:25,
    singer:'Mahasti',
    title:'Mosafer',
    cover:'./image/h2.jpg',
    src:'https://dl.musicgitar.ir/Music/Mahasti/320/Mahasti%20-%20Mosafer%20[320].mp3',
    category:'nostalgic'
    },
    {id:26,
    singer:'Mahasti',
    title:'Bia Benevisim',
    cover:'./image/h1.jpg',
    src:'https://dl.musicgitar.ir/Music/Mahasti/320/Mahasti%20-%20Barge%20Gol%20[320].mp3',
    category:'nostalgic'
    },
    {id:27,
    singer:'Mahasti',
    title:'Mohabat',
    cover:'./image/h3.jpg',
    src:'https://dl.musicgitar.ir/Music/Mahasti/320/Mahasti%20-%20Mohabat%20[320].mp3',
    category:'nostalgic'
    }
]
 track.src=songs[0].src
 function buildsong(array , container = playlist){
    array.forEach((song,index)=>{
    const audio = new Audio(song.src)
    
    let div = document.createElement('div')
    div.setAttribute('data-song-id',`${song.id}`)
    div.setAttribute('data-category',`${song.category}`)

    div.className='group flex items-center gap-4 border-b border-white/[0.05] px-5 py-4 transition hover:bg-white/[0.03] sm:px-7 row'

    div.innerHTML=`
            <span class="hidden w-6 text-sm font-bold text-white/25 sm:block">
                        ${'0'+(index+1)}
                    </span>
                        <span class="row-eq hidden h-4 w-6 items-center justify-center gap-[2px]">
                            <span class="w-[3px] rounded-full bg-[#FF5C00] eq-bar-1"></span>
                            <span class="w-[3px] rounded-full bg-[#FF5C00] eq-bar-2"></span>
                            <span class="w-[3px] rounded-full bg-[#FF5C00] eq-bar-3"></span>
                        </span>

                    <img
                        src="${song.cover}"
                        alt=""
                        class="h-14 w-14 rounded-2xl object-cover"
                    >

                    <div class="min-w-0 flex-1">

                        <h3 class="truncate text-base font-extrabold">
                            ${song.title}
                        </h3>

                        <p class="mt-1 text-sm font-semibold text-white/40">
                            ${
                                song.singer
                            }
                        </p>

                    </div>

                    <span class="hidden text-sm font-semibold text-white/30 sm:block">
                        ${song.category}
                    </span>

                    <span class="text-sm font-bold text-white/35 du">
                           --:--
                    </span>

                    <button
                        class="play-track-btn flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.06] transition hover:bg-[#FF5C00] hover:text-white"
                    >

                        <svg
                            class="h-4 w-4 ps"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M8 5v14l11-7z"/>
                        </svg>

                    </button>

                    <button data-fav="off"
                        class="fav-btn hidden h-10 w-10 items-center justify-center rounded-full text-white/30  sm:flex  hover:bg-[#FF5C00]/10 hover:text-[#FF5C00]"
                    >

                        <svg
                            class="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="1.8"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.8 8.7c0 5.5-8.8 10.3-8.8 10.3S3.2 14.2 3.2 8.7A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.8 2.3Z"/>
                        </svg>

                    </button>
    `

    container.appendChild(div)
    
    audio.addEventListener('loadedmetadata',()=>{
        let b= Math.trunc(audio.duration)
        let min=Math.trunc(b / 60)
        let second=Math.trunc(b % 60)

        let du= div.querySelector('.du')

        

        if(second <=9){
        du.textContent= min + ':' +'0'+ second
        }
        else{
        du.textContent= min + ':' + second
        }
    })

          //  Play button//
        const playButton = div.querySelector('.play-track-btn')

        playButton.addEventListener('click', (e) => {

            let target = e.target.closest('[data-song-id]')

            let x = target.getAttribute('data-song-id')

            const selectedsong = songs.find((item) => {
                return item.id === +x
            })

            const selectedIndex = songs.indexOf(selectedsong)

            if (songindex === selectedIndex) {

                if (track.paused) {
                    track.play()
                } else {
                    track.pause()
                }

                return
            }

            songindex = selectedIndex

            playerCover.src = selectedsong.cover
            playerTitle.textContent = selectedsong.title
            playerArtist.textContent = selectedsong.singer

            track.src = selectedsong.src

            track.play()
        })

})
 }
//  buildsong(songs)

playBtn.addEventListener('click',()=>{
    
    if(track.paused){
        track.play()
        
    }else{
        track.pause()
    }


})

muteBtn.addEventListener('click',()=>{
    track.muted = !track.muted
    if(track.muted){
        muteBtn.innerHTML = `
            <svg 
                class="h-5 w-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="1.8"
            >
                <path d="M11 5 6 9H3v6h3l5 4z"/>
                <path d="m23 9-6 6"/>
                <path d="m17 9 6 6"/>
            </svg>
        `
    }else{
         muteBtn.innerHTML = `
            <svg 
                class="h-5 w-5" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                stroke-width="1.8"
            >
                <path d="M11 5 6 9H3v6h3l5 4z"/>
                <path d="M15.5 8.5a5 5 0 0 1 0 7"/>
                <path d="M18 6a9 9 0 0 1 0 12"/>
            </svg>
        `
    }
})

volumeContainer.addEventListener('click',(e)=>{
    const width=volumeContainer.clientWidth
    const click=e.offsetX
    console.log(width);
    console.log(click);

    const volume = click / width

    track.volume = volume
    volumeBar.style.width = `${volume * 100}%`
    
    
})

function playsong(s){
    s.setAttribute('d', 'M6 4h4v16H6zM14 4h4v16h-4z')
}
////
function pausesong(s){
    s.setAttribute('d', 'M8 5v14l11-7z')
}

track.addEventListener('play', () => {

    playsong(playPath)

    const allPaths = document.querySelectorAll('.play-track-btn path')

    allPaths.forEach((path) => {
        pausesong(path)
    })

    const currentSongs = document.querySelectorAll(
        `[data-song-id="${songs[songindex].id}"]`
    )

    currentSongs.forEach((currentSong) => {

        const currentPath = currentSong.querySelector('.play-track-btn path')

        if (currentPath) {
            playsong(currentPath)
        }

    })


    const favPaths = ff.querySelectorAll('.play-track-btn path')

    favPaths.forEach((path) => {
        pausesong(path)
    })

    const currentFav = ff.querySelector(
        `[data-song-id="${songs[songindex].id}"]`
    )

    if (currentFav) {

        const currentFavPath =
            currentFav.querySelector('.play-track-btn path')

        if (currentFavPath) {
            playsong(currentFavPath)
        }
    }

})
track.addEventListener('pause', () => {

    pausesong(playPath)

    const currentSongs = document.querySelectorAll(
        `[data-song-id="${songs[songindex].id}"]`
    )

    currentSongs.forEach((currentSong) => {

        const currentPath = currentSong.querySelector('.play-track-btn path')

        if (currentPath) {
            pausesong(currentPath)
        }

    })


    const currentFav = ff.querySelector(
        `[data-song-id="${songs[songindex].id}"]`
    )

    if (currentFav) {

        const currentFavPath =
            currentFav.querySelector('.play-track-btn path')

        if (currentFavPath) {
            pausesong(currentFavPath)
        }
    }

})




nextBtn.addEventListener('click',()=>{

    songindex+=1
    if(songindex > songs.length -1){
        songindex=0
    }

    const selectedsong = songs[songindex]
    playerCover.src = selectedsong.cover
    playerTitle.textContent = selectedsong.title
    playerArtist.textContent = selectedsong.singer

    track.src =selectedsong.src
    track.play()

    

    
})

prevBtn.addEventListener('click',()=>{
    if(songindex == 0){
        return
    }
    songindex-=1
    

    const selectedsong = songs[songindex]
    playerCover.src = selectedsong.cover
    playerTitle.textContent = selectedsong.title
    playerArtist.textContent = selectedsong.singer

    track.src =selectedsong.src
    track.play()

    

    
})

track.addEventListener('timeupdate', () => {
    const time=Math.trunc(track.currentTime)
    const minute=Math.trunc(time/60)
    const second = time % 60
    
    if ( second <= 9) {
         current.textContent=minute+':'+'0'+second
     }else{
    current.textContent=minute+':'+second
    }
    

    /////////////////////////////////////

    const progress = (track.currentTime / track.duration) *100

    progressBar.style.width=progress +'%'

    
})
progressContainer.addEventListener('click',(e)=>{

    const width=progressContainer.clientWidth
    const clickposition=e.offsetX
    // console.log(clickposition);
    // console.log(width);

    const a =Math.trunc((clickposition / width)*100)
    console.log(a);

    let curr=(a / 100) *track.duration
    track.currentTime=curr
    // console.log(curr);
    
    
    
    
})

track.addEventListener('loadedmetadata', () => {
    let b= Math.trunc(track.duration)
    let min=Math.trunc(b / 60)
    let second=Math.trunc(b % 60)

    if(second <=9){
        duration.textContent= min + ':' +'0'+ second
    }
    else{
        duration.textContent= min + ':' + second
    }
    

})

track.addEventListener('ended',()=>{

    let repeat=repeatBtn.getAttribute('data-reap')
    if(repeat=='on'){

        track.currentTime=0
        
    }else{
        songindex+=1
    if(songindex > songs.length-1){
        songindex=0
    }

    let tr=songs[songindex]
    track.src=tr.src
    playerCover.src = tr.cover
    playerTitle.textContent =tr.title
    playerArtist.textContent = tr.singer

    }
    
    
    track.play()
    
})

repeatBtn.addEventListener('click',()=>{

    let reapet=repeatBtn.getAttribute('data-reap')
    console.log(reapet);
    
    if(reapet=='off'){
        repeatBtn.setAttribute('data-reap','on')
        repeatBtn.style.color='#FF5C00'
        repeatBtn.style.backgroundColor='#ff5e0023'


    }else{
        repeatBtn.setAttribute('data-reap','off')
        repeatBtn.style.color='#545454'
        repeatBtn.style.backgroundColor='transparent'
    }

})




const ff=document.querySelector('.ff')
let favorites=[]

function renderFavorites(){

    ff.innerHTML = ''

    favorites.forEach((item,index)=>{

        const fasong = document.createElement('div')
        fasong.setAttribute('data-song-id', item.id)

        fasong.className =
        "row group relative flex items-center gap-4 border-b border-white/[0.04] px-4 py-3.5 sm:px-6 bb"

        fasong.innerHTML = `
        <span class="row-eq hidden h-4 w-6 items-center justify-center gap-[2px]">
                        <span class="w-[3px] rounded-full bg-[#FF5C00] eq-bar-1"></span>
                        <span class="w-[3px] rounded-full bg-[#FF5C00] eq-bar-2"></span>
                        <span class="w-[3px] rounded-full bg-[#FF5C00] eq-bar-3"></span>
                    </span>

                    <span class="row-num w-6 text-center text-sm font-bold text-white/25">${index+1}</span>

                    <span class="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl shadow-lg shadow-black/40">
                        <img src="${item.cover}" alt="" class="h-full w-full object-cover">
                    </span>

                    <div class="min-w-0 flex-1">
                        <h3 class="row-title truncate text-base font-extrabold">${item.title}</h3>
                        <p class="mt-0.5 truncate text-sm font-semibold text-white/40">${item.singer}</p>
                    </div>

                    <span class="hidden text-sm font-semibold text-white/30 md:block">${item.category}</span>

                

                    <button class="play-track-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF5C00] text-white shadow-lg shadow-[#FF5C00]/30 ">
                        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                    </button>

                    <button class="fav-btn flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#FF5C00] hover:text-amber-50 transition duration-300 hover:scale-110">
                        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s-6.7-4.35-8.9-7.4C1.15 10.9 2.3 7.4 5.4 6.6c1.85-.48 3.85.05 6.6 2.75 2.75-2.7 4.75-3.23 6.6-2.75 3.1.8 4.25 4.3 2.3 7A19.5 19.5 0 0 1 12 21Z"/></svg>
                    </button>
        `

        ff.appendChild(fasong)
    })
}


/////////////////

const favoritebtn=document.querySelectorAll('.fav-btn')
// console.log(favoritebtn);


playlist.addEventListener('click', (e) => {
    const favButton = e.target.closest('.fav-btn')

    if (!favButton) return

    
        let like=favButton.getAttribute('data-fav')
        const select=e.target.closest('[data-song-id]')
        const fa=select.getAttribute('data-song-id')

         const favoritesong=songs.find((item)=>{
             return item.id==+fa
         })


        if(like == 'off'){
            favButton.setAttribute('data-fav','on')
            favButton.classList.add('fav-btn-active')
            favorites.push(favoritesong)
            renderFavorites()
            saveff()
            

        }else{
            favButton.setAttribute('data-fav','off')
            favButton.classList.remove('fav-btn-active')
            favorites= favorites.filter((item)=>{
                return item.id !==+fa
            })
        
        }
            renderFavorites()
            saveff()
             updateFavoriteButtons()
        
        console.log(favorites);
        
    })
    
function updateFavoriteButtons() {

    document.querySelectorAll('.fav-btn').forEach((btn) => {

        const row = btn.closest('[data-song-id]')

        if (!row) return

        const id = +row.getAttribute('data-song-id')

        const isFavorite = favorites.some((item) => {
            return item.id === id
        })

        if (isFavorite) {

            btn.setAttribute('data-fav', 'on')
            btn.classList.add('fav-btn-active')

        } else {

            btn.setAttribute('data-fav', 'off')
            btn.classList.remove('fav-btn-active')

        }

    })
}


ff.addEventListener('click', (e) => {

    const targets = e.target.closest('.fav-btn')
    const parent = e.target.closest('[data-song-id]')

    if (!parent) return

    const faid = parent.getAttribute('data-song-id')

    if (targets){

        favorites = favorites.filter((item) => {
            return item.id !== +faid
        })

        renderFavorites()
        saveff()
        updateFavoriteButtons()

    } else {

        const p = songs.find((item) => {
            return item.id === +faid
        })
        console.log(p);
        

        const selectedIndex = songs.indexOf(p)
        console.log(selectedIndex);
        

        if (songindex === selectedIndex) {

            if (track.paused) {
                track.play()
            } else {
                track.pause()
            }

            return

        } else {

            songindex = selectedIndex

            playerCover.src = p.cover
            playerTitle.textContent = p.title
            playerArtist.textContent = p.singer

            track.src = p.src
            track.play()

            const allRows = ff.querySelectorAll('.bb')

            allRows.forEach((val) => {
                val.classList.remove('row-active')
            })

            parent.classList.add('row-active')
        }
    }
})


function saveff(){
    localStorage.setItem('favorite',JSON.stringify(favorites))
}

const savedfavorite=JSON.parse(localStorage.getItem('favorite')) || []

console.log(savedfavorite);
favorites=savedfavorite
renderFavorites()

favoritebtn.forEach((btn) => {
    const row = btn.closest('div')
    const id = +row.getAttribute('data-song-id')

    if (favorites.some((item) => item.id === id)) {
        btn.setAttribute('data-fav', 'on')
        btn.classList.add('fav-btn-active')
    }
})

////////////////////////////catagory//////////////////////////////////
console.log(categorybtn);
const popularSongs = songs.filter((song) => {
    return song.popular === true
})

buildsong(popularSongs)
categorybtn.forEach((btn)=>{
    
    btn.setAttribute('data-select','off')
    btn.addEventListener('click',()=>{

        tit.textContent=btn.textContent
        categorybtn.forEach((item)=>{
            item.setAttribute('data-select','off')
            item.classList.remove('choice')
        })
        btn.setAttribute('data-select','on')
        const choose=btn.getAttribute('data-select')
        
        

        if(choose == 'on'){
        btn.classList.add('choice')
        }
        ///////////////////////////////
        playlist.innerHTML=''
        let datacategory=btn.getAttribute('data-category')

        let newcate

        if (datacategory === 'popular') {

        newcate = songs.filter((song) => {
        return song.popular === true
    })

    } else {

    newcate = songs.filter((song) => {
        return song.category === datacategory
    })

}

        
        console.log(songs);
        
        buildsong(newcate)
        const newFavBtns = playlist.querySelectorAll('.fav-btn')

        newFavBtns.forEach((btn) => {
        const id = +btn.closest('[data-song-id]').getAttribute('data-song-id')

        if (favorites.some((item) => item.id === id)) {
        btn.setAttribute('data-fav', 'on')
        btn.classList.add('fav-btn-active')
        }
                })
        
        
    })
})


/////////////////////////////////////////

const artmohsen=document.querySelector('.artmohsen')
const artalireza=document.querySelector('.artalireza')
const artshadmehr=document.querySelector('.artshadmehr')
const artmoein=document.querySelector('.artmoein')

function artistsongs(artist,container){

    let x=songs.filter((song)=>{
    return  song.singer == artist
})




    buildsong(x,container)


}

artistsongs('mohsen yegane',artmohsen)
artistsongs('alireza ghorbani',artalireza)
artistsongs('Shadmehr aghili',artshadmehr)
artistsongs('Moein',artmoein)


///////////////////////////////////
const artistpage=document.querySelectorAll('.artist-page')

artistpage.forEach((item)=>{
    item.addEventListener('click',(e)=>{

        const favButton = e.target.closest('.fav-btn')

    if (!favButton) return

    
        let like=favButton.getAttribute('data-fav')
        const select=e.target.closest('[data-song-id]')
        const fa=select.getAttribute('data-song-id')

         const favoritesong=songs.find((item)=>{
             return item.id==+fa
         })


        if(like == 'off'){
            favButton.setAttribute('data-fav','on')
            favButton.classList.add('fav-btn-active')
            favorites.push(favoritesong)
            renderFavorites()
            saveff()
            

        }else{
            favButton.setAttribute('data-fav','off')
            favButton.classList.remove('fav-btn-active')
            favorites= favorites.filter((item)=>{
                return item.id !==+fa
            })
        
        }
            renderFavorites()
            saveff()
             updateFavoriteButtons()

    })
})

///////////////////search/////////////////
const dropsearch=document.querySelector('.dropsearch')
const dropsearch2=document.querySelector('.dropsearch2')
const allresult=document.querySelectorAll('.allresult')
const contain=document.querySelectorAll('.contain')
let searchsong=[]

const searchDrops = [dropsearch, dropsearch2]
searchInput.forEach((search)=>{

    search.addEventListener('input',()=>{

    let _search = search.value.trim()

    

     searchsong = songs.filter((item) => {
    return item.title.toLowerCase().startsWith(_search.toLowerCase()) ||
    item.singer.toLowerCase().startsWith(_search.toLowerCase())
    })

    searchDrops.forEach((drop)=>{
        drop.innerHTML = ''
        if(_search==''){
        searchsong=[]
        drop.innerHTML=`
        <div class="flex items-center gap-2 px-3 py-2.5">
                                <span class="h-1 w-1 rounded-full bg-[#FF5C00] shadow-[0_0_8px_rgba(255,92,0,0.9)]"></span>
                                <p class="text-[11px] font-bold uppercase tracking-[0.22em] text-white/40">
                                    Top results
                                </p>
                            </div>

                            <div data-song-id="1" class="group/row flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300 hover:bg-white/[0.05]">
                                <div class="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg shadow-md shadow-black/40">
                                    <img src="./image/ab6761860000019439a4ed113c1859bf7d323d37.webp" alt="" class="h-full w-full object-cover">
                                </div>
                                <div class="min-w-0 flex-1">
                                    <h4 class="truncate text-sm font-bold text-white/90 transition-colors duration-300 group-hover/row:text-white">Behet Ghol Midam</h4>
                                    <p class="mt-0.5 truncate text-xs font-semibold text-white/40">Mohsen Yeganeh</p>
                                </div>
                                <span class="hidden rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/30 transition-colors duration-300 group-hover/row:border-[#FF5C00]/40 group-hover/row:text-[#FF5C00] sm:block">Pop</span>
                                <button class="play-track-btn flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-white/60 transition-all duration-300 hover:bg-[#FF5C00] hover:text-white hover:shadow-[0_0_16px_-2px_rgba(255,92,0,0.6)]">
                                    <svg class="h-3.5 w-3.5 translate-x-[1px]" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                                </button>
                            </div>

                            <div  data-song-id="5" class="group/row flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300 hover:bg-white/[0.05]">
                                <div class="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg shadow-md shadow-black/40">
                                    <img src="./image/s.jpg" alt="" class="h-full w-full object-cover">
                                </div>
                                <div class="min-w-0 flex-1">
                                    <h4 class="truncate text-sm font-bold text-white/90 transition-colors duration-300 group-hover/row:text-white">Adat</h4>
                                    <p class="mt-0.5 truncate text-xs font-semibold text-white/40">Shadmehr Aghili</p>
                                </div>
                                <span class="hidden rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/30 transition-colors duration-300 group-hover/row:border-[#FF5C00]/40 group-hover/row:text-[#FF5C00] sm:block">Pop</span>
                                <button class="play-track-btn flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-white/60 transition-all duration-300 hover:bg-[#FF5C00] hover:text-white hover:shadow-[0_0_16px_-2px_rgba(255,92,0,0.6)]">
                                    <svg class="h-3.5 w-3.5 translate-x-[1px]" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                                </button>
                            </div>

                            <div data-song-id="3" class=" group/row flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300 hover:bg-white/[0.05]">
                                <div class="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg shadow-md shadow-black/40">
                                    <img src="./image/en.jpg" alt="" class="h-full w-full object-cover">
                                </div>
                                <div class="min-w-0 flex-1">
                                    <h4 class="truncate text-sm font-bold text-white/90 transition-colors duration-300 group-hover/row:text-white">Hamgonah</h4>
                                    <p class="mt-0.5 truncate text-xs font-semibold text-white/40">Alireza Ghorbani</p>
                                </div>
                                <span class="hidden rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/30 transition-colors duration-300 group-hover/row:border-[#FF5C00]/40 group-hover/row:text-[#FF5C00] sm:block">Sonati</span>
                                <button class="play-track-btn flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-white/60 transition-all duration-300 hover:bg-[#FF5C00] hover:text-white hover:shadow-[0_0_16px_-2px_rgba(255,92,0,0.6)]">
                                    <svg class="h-3.5 w-3.5 translate-x-[1px]" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                                </button>
                            </div>

                            <div data-song-id="4" class="group/row flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300 hover:bg-white/[0.05]">
                                <div class="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg shadow-md shadow-black/40">
                                    <img src="./image/h.jpg" alt="" class="h-full w-full object-cover">
                                </div>
                                <div class="min-w-0 flex-1">
                                    <h4 class="truncate text-sm font-bold text-white/90 transition-colors duration-300 group-hover/row:text-white">Chera Rafti</h4>
                                    <p class="mt-0.5 truncate text-xs font-semibold text-white/40">Homayoun Shajarian</p>
                                </div>
                                <span class="hidden rounded-full border border-white/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/30 transition-colors duration-300 group-hover/row:border-[#FF5C00]/40 group-hover/row:text-[#FF5C00] sm:block">Sonati</span>
                                <button class="play-track-btn flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-white/60 transition-all duration-300 hover:bg-[#FF5C00] hover:text-white hover:shadow-[0_0_16px_-2px_rgba(255,92,0,0.6)]">
                                    <svg class="h-3.5 w-3.5 translate-x-[1px]" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                                </button>
                            </div>

                        </div>

                        <div class="border-t border-white/[0.06] p-2 contain hidden">
                            <button class="flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-bold text-white/40 transition-colors duration-300 hover:bg-[#FF5C00]/10 hover:text-[#FF5C00] allresult">
                                View all results
                                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
        `

    }
    contain.forEach((item)=>{
        if (searchsong.length > 5){
            item.classList.remove('hidden')
        }else{
            item.classList.add('hidden')
        }
    })
    
      searchsong.slice(0, 5).forEach((val)=>{
         
         let row=document.createElement('div')
         row.setAttribute('data-song-id', val.id)

         row.className='group/row flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300 hover:bg-white/[0.05]'
         row.innerHTML=`
            <div class="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg shadow-md shadow-black/40">
                                <img src="${val.cover}" alt="" class="h-full w-full object-cover">
                            </div>
                            <div class="min-w-0 flex-1">
                                <h4 class="truncate text-sm font-bold text-white/90 transition-colors duration-300 group-hover/row:text-white">${val.title}</h4>
                                <p class="mt-0.5 truncate text-xs font-semibold text-white/40">${val.singer}</p>
                            </div>
                            <button type='button' class="play-track-btn flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-white/60 transition-all duration-300 hover:bg-[#FF5C00] hover:text-white hover:shadow-[0_0_16px_-2px_rgba(255,92,0,0.6)]">
                                <svg class="h-3.5 w-3.5 translate-x-[1px]" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                            </button>
         `

        
        drop.appendChild(row)
    })

    })


    })

})


/////////////////////
allresult.forEach((btn)=>{
    btn.addEventListener('click',()=>{

        searchDrops.forEach((drop)=>{
            drop.innerHTML = ''

            searchsong.forEach((val)=>{

                let row = document.createElement('div')
                row.setAttribute('data-song-id', val.id)

                row.className = 'group/row flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-300 hover:bg-white/[0.05]'

                row.innerHTML = `
                    <div class="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg shadow-md shadow-black/40">
                        <img src="${val.cover}" alt="" class="h-full w-full object-cover">
                    </div>

                    <div class="min-w-0 flex-1">
                        <h4 class="truncate text-sm font-bold text-white/90">
                            ${val.title}
                        </h4>

                        <p class="mt-0.5 truncate text-xs font-semibold text-white/40">
                            ${val.singer}
                        </p>
                    </div>

                    <button class="play-track-btn flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/[0.07] text-white/60">
                        <svg class="h-3.5 w-3.5 translate-x-[1px]" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5v14l11-7z"/>
                        </svg>
                    </button>
                `

                drop.appendChild(row)
            })
        })
    })
})

/////////////////////////play search/////////////////

searchDrops.forEach((item)=>{
    item.addEventListener('click',(e)=>{

        const target = e.target.closest('.play-track-btn')
        if (!target) return

        const row = target.closest('[data-song-id]')
        const id = +row.getAttribute('data-song-id')

        const selectedsong = songs.find((item) => item.id === id)

        const selectedIndex = songs.indexOf(selectedsong)

        if (songindex === selectedIndex) {

            if (track.paused) {
                track.play()
            } else {
                track.pause()
            }

            return
        }

        songindex = selectedIndex

        playerCover.src = selectedsong.cover
        playerTitle.textContent = selectedsong.title
        playerArtist.textContent = selectedsong.singer

        track.src = selectedsong.src
        track.play()
    })
})
/////////////////////////swiper///////////////////

var swiper = new Swiper('.mySwiper', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });




