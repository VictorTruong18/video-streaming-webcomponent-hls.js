class Player extends HTMLElement {
	constructor() {
		super();

		// this.shadow = this.attachShadow({mode: 'open'})
	}

	setPlayerScript() {
		var video = document.getElementById(this.state.id);
		var videoSrc = this.state.url;
		if (Hls.isSupported()) {
			var hls = new Hls();
			hls.loadSource(videoSrc);
			hls.attachMedia(video);
			hls.on(Hls.Events.MANIFEST_PARSED, function () {
				video.play();
			});
		}
	}

	connectedCallback() {
		//state
		this.state = {
			id: `${this.getAttribute("id") + `-player`}`,
			url: `${this.getAttribute("url")}`,
			widthChoice: `${this.getAttribute("widthChoice")}`,
			heightChoice: `${this.getAttribute("heightChoice")}`,
			autoPlay: `${this.getAttribute("autoPlay")}`,
			backgroundColor: `${this.getAttribute("backgroundColor")}`,
		};

		var template = `
        <video
                id=${this.state.id}
                controls=${true}
                width=${this.state.widthChoice}
                height = ${this.state.heightChoice}
                background = ${this.state.backgroundColor}
                autoplay=${this.state.autoPlay}
         >
        </video>
        `;

		this.innerHTML = template;
		this.setPlayerScript();
	}
}
customElements.define(`player-videostreaming`, Player);
