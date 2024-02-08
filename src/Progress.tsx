import { MotionValue, motion, } from "framer-motion"

interface propTypes {
    progress: MotionValue,
}

const Progress = (props: propTypes) => {
    return (
        <div>
            <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                <circle strokeDasharray={0} strokeWidth={"15%"} fill="none" cx="50" cy="50" r="30" stroke='rgb(255, 136, 0)' opacity={0.3} />
                <motion.circle
                    cx="50"
                    cy="50"
                    strokeDasharray={0} strokeWidth={"15%"} fill="none"
                    stroke={"rgb(255, 136, 0)"}
                    r="30"
                    strokeLinecap={"round"}
                    style={{
                        pathLength: props.progress,
                    }}
                />
            </svg>
        </div>
    )
}

export default Progress
