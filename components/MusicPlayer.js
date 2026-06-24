class MusicPlayer extends HTMLElement {
  constructor() {
    super();

    this.audio = new Audio();
    this.currentIndex = 0;
    this.songs = [
      { id: 0, link: "/media/songs/X_vs_Zero_Decisive_Battle_2_Soundtrack.mp3", name: "X vs Zero Decisive Battle 2", artist: "Breis", image: "xvszero.jpg" },
      { id: 1, link: "/media/songs/Igorrr_Tout_Petit_Moineau.mp3", name: "Tout Petit Moineau", artist: "Igorrr", image: "igorrr.jpg" },
      { id: 2, link: "/media/songs/No_Leaf_Clover.mp3", name: "No Leaf Clover", artist: "Metallica", image: "metallica.jpg" },
      { id: 3, link: "/media/songs/SABATON_The_Attack_of_the_Dead_Men.mp3", name: "The Attack of the Dead Men", artist: "Sabaton", image: "sabaton.jpg" },
      { id: 4, link: "/media/songs/Spear_of_Justice.mp3", name: "Spear of Justice", artist: "Toby Fox", image: "undertale.jpg" },
      { id: 5, link: "/media/songs/And_Then_There_Was_Silence.mp3", name: "And Then There Was Silence", artist: "Blind Guardian", image: "blind_guardian.jpg" },
      { id: 6, link: "/media/songs/Megaman_X_5.mp3", name: "Megaman X5 Intro", artist: "Unknown", image: "megaman_x5.jpg" },
    ];

    this.render();
  }

  connectedCallback() {
    // Cache elements to avoid constant DOM lookups
    this.playPauseBtn = this.querySelector('#playPauseBtn');
    this.timeSlider = this.querySelector('#timeSlider');
    this.currentTimeEl = this.querySelector('#currentTime');
    this.durationEl = this.querySelector('#duration');

    // UI Listeners
    this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
    this.querySelector('#nextBtn').addEventListener('click', () => this.handleForwards());
    this.querySelector('#prevBtn').addEventListener('click', () => this.handleBackwards());
    this.timeSlider.addEventListener('input', (e) => this.handleRangeChange(e));
    
    // Playlist Delegation
    this.querySelector('#playlist').addEventListener('click', (e) => {
      const btn = e.target.closest('.album-picture');
      if (!btn) return;
      const songId = Number(btn.dataset.id);
      this.handleAlbumClick(this.songs[songId], btn);
    });

    // Single Audio Event Initialization
    this.audio.addEventListener('timeupdate', () => this.updateCurrentTime());
    this.audio.addEventListener('loadedmetadata', () => this.handleMetadataLoaded());
    this.audio.addEventListener('ended', () => this.handleForwards()); // Auto-play next
  }

  render() {
    this.innerHTML = `
      <div class="music-player">
        <div class="playing-now" id="nowPlaying" style="visibility: hidden;">
          <p class="song-text">Playing: <span class="song-name" id="songName"></span></p>
        </div>

        <div class="controls">
          <button class="audio-btn" id="prevBtn"><i class="fa-solid fa-backward"></i></button>
          <button class="audio-btn" id="playPauseBtn"><i class="fa-solid fa-play"></i></button>
          <button class="audio-btn" id="nextBtn"><i class="fa-solid fa-forward"></i></button>
        </div>

        <div class="time-slider">
          <p class="time" id="currentTime">0:00</p>
          <input class="range" type="range" id="timeSlider" min="0" max="0" value="0">
          <p class="time" id="duration">0:00</p>
        </div>

        <div class="playlist" id="playlist">
          ${this.songs.map((song) => `
            <div class="song" data-id="${song.id}">
              <div class="image-section">
                <img src="/media/albums/${song.image}" alt="${song.name}" width="80">
                <button data-id="${song.id}" class="album-picture">
                  <i class="fa-solid fa-play"></i>
                </button>
              </div>
              <div class="song-information">
                <p class="song-name-data">${song.name}</p>
                <p class="song-artist"><span class="star">* </span>${song.artist}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  handleMetadataLoaded() {
    this.timeSlider.max = this.audio.duration;
    this.durationEl.textContent = this.formatTime(this.audio.duration);
  }

  updateCurrentTime() {
    if (!this.timeSlider._isUserDragging) {
        this.timeSlider.value = this.audio.currentTime;
        this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
    }
  }

  formatTime(time) {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  togglePlayPause() {
    if (!this.audio.src) {
        this.playSong(this.songs[this.currentIndex]);
        return;
    }

    if (this.audio.paused) {
      this.audio.play();
      this.syncUI(true);
    } else {
      this.audio.pause();
      this.syncUI(false);
    }
  }

  playSong(song) {
    this.currentIndex = song.id;
    this.audio.src = song.link; // Update source instead of creating new Audio()
    this.audio.play();
    this.syncUI(true);
  }

  syncUI(isPlaying) {
    // Main Play/Pause Button
    this.playPauseBtn.innerHTML = isPlaying ? 
        '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';

    // Update "Now Playing" bar
    const nowPlaying = this.querySelector('#nowPlaying');
    nowPlaying.style.visibility = isPlaying ? 'visible' : 'visible'; // Keep visible once started
    this.querySelector('#songName').textContent = this.songs[this.currentIndex].name;

    // Reset all playlist icons, then set the active one
    this.querySelectorAll('.album-picture i').forEach(icon => icon.className = 'fa-solid fa-play');
    const activeBtnIcon = this.querySelector(`.album-picture[data-id="${this.currentIndex}"] i`);
    if (activeBtnIcon) activeBtnIcon.className = isPlaying ? 'fa-solid fa-pause' : 'fa-solid fa-play';
  }

  handleRangeChange(event) {
    this.audio.currentTime = event.target.value;
  }

  handleForwards() {
    const nextIndex = (this.currentIndex + 1) % this.songs.length;
    this.playSong(this.songs[nextIndex]);
  }

  handleBackwards() {
    const prevIndex = (this.currentIndex - 1 + this.songs.length) % this.songs.length;
    this.playSong(this.songs[prevIndex]);
  }

  handleAlbumClick(song, button) {
    if (this.currentIndex === song.id && this.audio.src) {
      this.togglePlayPause();
    } else {
      this.playSong(song);
    }
  }
}

customElements.define('music-player', MusicPlayer);