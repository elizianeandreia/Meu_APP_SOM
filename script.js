const songData =[

	{
		name: 'Corey Taylor',
		artist:'Snuff Lyrics',
		src:'Corey Taylor - Snuff Lyrics.mp3',
		},
	{
		name: 'Ale Loya',
		artist:'Native',
		src:'Ale Loya -Native.mp3',
		},
{
    name: 'Mulholland',
    artist:'King Canyon',
    src:'Mulholland- King Canyon.mp3',
    },
]

const reci = document.querySelector('.reci')
const Nomesom = document.querySelector('.nome-som')
const ArtistaSom = document.querySelector('.nome-artista')
const capa = document.querySelector('.capa')
const playPlauseBtn = document.querySelector('.play-pause')
const anteriorBtn = document.querySelector('.anterior-btn')
const proximoBtn = document.querySelector('.proximo-btn')
const audio = document.querySelector('.audio')
const TempoSom = document.querySelector('.tempo-som')
const ProgressoSom = document.querySelector('.progresso-som')
const capaNome = document.querySelector('.capa span:nth-child(2)')
const capaArtista = document.querySelector('.capa span:nth-child(1)')

let songIndex = 0

window.addEventListener('load', () => { 
	loadSong(songIndex)
	})


const loadSong = (index) => {
	capaNome.textContent =  songData[index].name
	capaArtista.textContent = songData[index].artist
	Nomesom.textContent = songData[index].name
	ArtistaSom.textContent = songData[index].artist
	audio.src = `music/${songData[index].src}.`
}

const playSong = () => {
	reci.classList.add('pause')
	playPlauseBtn.firstElementChild.className = 'fa-solid fa-pause'
	audio.play()
	capa.classList.add('rotate')
	}

const pauseSong = () => {
	reci.classList.remove('pause')
	playPlauseBtn.firstElementChild.className = 'fa-solid fa-play'
	audio.pause()
	capa.classList.remove('rotate')
	}

playPlauseBtn.addEventListener('click',() => {
	if(reci.classList.contains('pause')) {
		pauseSong();
	} else {
		playSong();
	}
})

const anteriorSomPlay = () => {
	songIndex--
	if(songIndex < 0){
		songIndex = songData.length - 1
	}
	loadSong(songIndex)
	playSong()
}

const proximoSomPlay = () => {
	songIndex++
	if(songIndex > songData.length - 1){
		songIndex = 0
	}
	loadSong(songIndex)
	playSong()
}

anteriorBtn.addEventListener("click",anteriorSomPlay)
proximoBtn.addEventListener("click",proximoSomPlay)

audio.addEventListener('timeupdate', (e) => {
	const currentTime = e.target.currentTime
	const duration = e.target.duration
	let currentTimeWidth = (currentTime/duration) * 100
	ProgressoSom.style.width = `${currentTimeWidth}%`
	

	let songCurrentTime = document.querySelector('.tempo span:nth-child(1)')
	let songDuration = document.querySelector('.tempo span:nth-child(2)')
	
	audio.addEventListener('loadeddata', () => {
		let audioDuration = audio.duration 
		
		let totalMinutos = Math.floor(audioDuration/60)
		let totalSegundos = Math.floor(audioDuration % 60)
		
		if(totalSegundos <10) {
			totalSegundos = `0${totalSegundos}`
		}
		
		songDuration.textContent = `${totalMinutos}:${totalSegundos}`
		})
		let MinutosAtuais = Math.floor(currentTime/60)
		let SegundosAtuais = Math.floor(currentTime % 60)

		if(MinutosAtuais<10){
			SegundosAtuais= `0${SegundosAtuais}`
		}

		songCurrentTime.textContent= `${MinutosAtuais}:${SegundosAtuais}`
	})
	TempoSom.addEventListener('click',(e) => {
		let progressWidth = TempoSom.clientWidth
		let clickedOffsetX = e.offsetX	
		let songDuration = audio.duration
		audio.currentTime = (clickedOffsetX/progressWidth) * songDuration
		playSong()
		})
	