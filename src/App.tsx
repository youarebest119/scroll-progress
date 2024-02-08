import { useEffect } from "react"
import Progress from "./Progress"
import Text from "./Text"
import Lenis from "@studio-freight/lenis";
import { useScroll } from "framer-motion";
function App() {
	useEffect(() => {
		const lenis = new Lenis();
		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}

		requestAnimationFrame(raf)
	}, [])
	const { scrollYProgress } = useScroll();
	return (
		<>
			<Progress progress={scrollYProgress} />
			<Text />
		</>
	)
}

export default App
