import { useEffect, useRef, useState } from "react"
import openingMovieSp from "../../movie/opening_movie_sp.mp4"
import openingMovie from "../../movie/opening_movie.mp4"
import volumeMuteIcon from "../../img/volume-mute.svg"
import volumeHighIcon from "../../img/volume-high.svg"
import bt2 from "../../img/bt2.png"
import { useNavigate } from "react-router"
import Second from "../Second"

export default function FirstSub() {
	const initialVideoState = {
		muted: true,
		volume: 0
	}

	const [videoState, setVideoState] = useState(initialVideoState)
	const [second, setSecond] = useState(false)
	const [sliderVolume, setSliderVolume] = useState(0.5)
	const [iconSrc, setIconSrc] = useState(
		initialVideoState.muted ? volumeMuteIcon : volumeHighIcon
	)

	const [movieEnded, setMovieEnded] = useState(false)

	const openingMovieRef = useRef<HTMLVideoElement>(null)
	const openingMovieSpRef = useRef<HTMLVideoElement>(null)

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const volume = Number(e.target.value)
		setSliderVolume(volume)
		setVideoState({
			...videoState,
			volume
		})
		if (openingMovieRef.current) {
			openingMovieRef.current.volume = volume
		}
		if (openingMovieSpRef.current) {
			openingMovieSpRef.current.volume = volume
		}
	}

	const handleMuteIconClick = () => {
		setVideoState({
			...videoState,
			muted: !videoState.muted
		})
		setIconSrc(videoState.muted ? volumeMuteIcon : volumeHighIcon)
	}

	const handlePressAnyBtn = () => {
		setSecond(true)
	}

	useEffect(() => {
		const matchMedia = window.matchMedia("(max-width: 825px)")
		setVideoState({
			...videoState,
			muted: false
		})
		matchMedia.matches
			? openingMovieSpRef.current?.play()
			: openingMovieRef.current?.play()
	}, [])

	return second ? (
		<Second soundAutoPlay />
	) : (
		<>
			<header className="header">
				<div className="controller">
					<input
						type="range"
						id="volume"
						value={sliderVolume}
						min="0.0"
						max="1.0"
						step="0.1"
						onChange={handleVolumeChange}
					/>
					<button
						type="button"
						className="btn_icon"
						onClick={handleMuteIconClick}
					>
						<img src={iconSrc} alt="sound" id="icon" />
					</button>
				</div>
			</header>

			<main>
				{movieEnded && (
					<div className="wrapper3 open">
						<div className="wra3_container open">
							<div className="box open">
								<button
									type="button"
									className="box-btn"
									onClick={handlePressAnyBtn}
								>
									<img src={bt2} alt="button" className="btn2" />
									<span className="font blinking">Press any button. </span>
								</button>
							</div>
						</div>
					</div>
				)}
				<div className="wrapper2 body">
					<video
						muted={videoState.muted}
						src={openingMovie}
						className="movie"
						ref={openingMovieRef}
						onEnded={() => setMovieEnded(true)}
					/>
					<video
						muted={videoState.muted}
						src={openingMovieSp}
						className="movie_sp"
						ref={openingMovieSpRef}
						onEnded={() => setMovieEnded(true)}
					/>
				</div>
			</main>
		</>
	)
}
