import eyesOnMeSound from "../../music/eyes_on_me.mp3"
import pauseIcon from "../../img/pause.png"
import playIcon from "../../img/play.png"
import volumeHighIcon from "../../img/volume-high.png"
import volumeMuteIcon from "../../img/volume-mute.png"
import { useEffect, useRef, useState } from "react"

interface SecondProps {
	soundAutoPlay?: boolean
}

export default function Second({ soundAutoPlay = false }: SecondProps) {
	const eyesOnMeSoundRef = useRef<HTMLAudioElement>(null)
	const [playIconBtn, setPlayIconBtn] = useState(
		soundAutoPlay ? pauseIcon : playIcon
	)
	const [volumeIconBtn, setVolumeIconBtn] = useState(volumeHighIcon)
	const [muted, setMuted] = useState(false)

	useEffect(() => {
		if (soundAutoPlay) {
			eyesOnMeSoundRef.current?.play()
		}
	}, [])

	const toggleAudio = () => {
		if (eyesOnMeSoundRef.current?.paused) {
			eyesOnMeSoundRef.current?.play()
			setPlayIconBtn(pauseIcon)
			return
		}

		eyesOnMeSoundRef.current?.pause()
		setPlayIconBtn(playIcon)
	}
	const toggleMute = () => {
		if (eyesOnMeSoundRef.current?.muted) {
			setMuted(false)
			setVolumeIconBtn(volumeHighIcon)
			return
		}

		setMuted(true)
		setVolumeIconBtn(volumeMuteIcon)
	}
	const iframeOnLoad = () => {
		if (soundAutoPlay) {
			// iframeの描画した後にhistoryをpushする。先にpushするとiframeが描画されない
			window.history.pushState({ page: 1 }, "second", "/second")
		}
	}
	return (
		<>
			<header className="header">
				<div className="sound_controller">
					<audio
						muted={muted}
						loop
						src={eyesOnMeSound}
						id="music"
						ref={eyesOnMeSoundRef}
					/>
					<button type="button" onClick={toggleAudio}>
						<img src={playIconBtn} id="play" alt="pause" />
					</button>
					<button type="button" onClick={toggleMute}>
						<img src={volumeIconBtn} id="icon2" alt="volume" />
					</button>
				</div>
			</header>

			<main>
				<div className="wrapper4">
					<iframe
						title="main"
						src="https://www.oohama.xyz/cms/hfcontent/test5/"
						loading="eager"
						onLoad={iframeOnLoad}
					/>
				</div>
			</main>
		</>
	)
}
