import { useState } from "react"
import bt1 from "../../img/bt1.png"
import caution from "../../img/caution.png"
import caution_sp from "../../img/caution_sp.png"
import "../../reset.css"
import "../../style.css"
import "../../responsive.css"
import { Link } from "react-router-dom"
import FirstSub from "../FirstSub"

export default function First() {
	const [firstSub, setFirstSub] = useState(false)

	return (
		<>
			{firstSub ? (
				<FirstSub />
			) : (
				<main>
					<div className="wrapper1 body">
						<div className="title">
							<Link onClick={() => setFirstSub(true)} to={""}>
								<p>
									<img src={bt1} alt="button" className="btn1" />
								</p>
								<p className="blinking">
									<img src={caution} alt="注意喚起" className="caution" />
								</p>
								<p className="blinking">
									<img src={caution_sp} alt="注意喚起" className="caution_sp" />
								</p>
							</Link>
						</div>
					</div>
				</main>
			)}
		</>
	)
}
