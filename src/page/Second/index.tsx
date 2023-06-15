import eyesOnMeSound from "../../music/eyes_on_me.mp3"
import pauseIcon from "../../img/pause.png"
import playIcon from "../../img/play.png"
import volumeHighIcon from "../../img/volume-high.png"
import volumeMuteIcon from "../../img/volume-high.png"
import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"

export default function Second() {
	const eyesOnMeSoundRef = useRef<HTMLAudioElement>(null)
	const [playIconBtn, setPlayIconBtn] = useState(pauseIcon)
	const [volumeIconBtn, setVolumeIconBtn] = useState(volumeHighIcon)
	const [muted, setMuted] = useState(false)

	useEffect(() => {
		eyesOnMeSoundRef.current?.play()
		// navigate("/second", { replace: false })
		window.history.pushState({ page: 1 }, "second", "/second")
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
					/>
				</div>
			</main>
		</>
	)
}
