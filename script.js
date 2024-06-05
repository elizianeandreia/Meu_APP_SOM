const songData =[
	{
		name: 'Ale Loya',
		artist:'Native',
		src:'Ale Loya -Native.mp3',
		},
{
    name: 'Ale Loya',
    artist:'Native',
    src:'Ale Loya -Native.mp3',
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
	audio.src = `music/${songData[index].src}.mp3`
}

const playSong = () => {
	reci.classList.add('pause')
	playPlauseBtn.firstElementChild.className = 'fa-solid fa-pause'
	audio.play();
	}

const pauseSong = () => {
	reci.classList.remove('pause')
	playPlauseBtn.firstElementChild.className = 'fa-solid fa-play'
	audio.pause();
	}

playPlauseBtn.addEventListener('click',() => {
	if(reci.classList.contains('pause')) {
		pauseSong();
	} else {
		playSong();
	}
})