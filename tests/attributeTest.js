module.exports = {
	"Attribute Test"(browser) {
		browser
			.url("https://layfredrc.github.io/video-streaming-webcomponent-hls.js/")
			.waitForElementVisible("player-videostreaming")
			.assert.attributeEquals(
				"player-videostreaming",
				"url",
				"https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
			)
			.assert.attributeEquals("player-videostreaming", "widthChoice", "800")
			.assert.attributeEquals("player-videostreaming", "heightChoice", "500")
			.assert.attributeEquals("player-videostreaming", "autoPlay", "true")
			.assert.attributeEquals(
				"player-videostreaming",
				"backgroundColor",
				"#000"
			);
	},
};
