import React from "react";
import { calculateTime } from "../../../utils/time";
import "./index.scss";
type Props = {
    seconds: number;
    resume?: boolean;
};

type LoaderProps = {
    resume?: boolean;
};

const Loader: React.FC<LoaderProps> = (props) => {
    const { resume } = props;
    return (
        <div className="d-flex justify-content-center align-items-center wrapper-loader">
            <div className="loader">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <div className="bar4"></div>
                <div className="bar5"></div>
                <div className="bar6"></div>
            </div>
            <h1 className="text-white mx-2">
                {!resume ? "Empezando" : "Resumiendo"}
            </h1>
            <div className="loader">
                <div className="bar6"></div>
                <div className="bar5"></div>
                <div className="bar4"></div>
                <div className="bar3"></div>
                <div className="bar2"></div>
                <div className="bar1"></div>
            </div>
        </div>
    );
};

const Counter: React.FC<Props> = (props) => {
    const { seconds, resume } = props;
    const radius = 75;
    const circumference = radius * 2 * Math.PI;
    const [offset, setOffset] = React.useState<number>(circumference);
    const [time, setTime] = React.useState<number>(seconds);
    const [showLoader, setShowLoader] = React.useState<boolean>(false);

    React.useEffect(() => {
        const id = setInterval(() => {
            if (time > 0) {
                setTime((prev) => prev - 1);
            }
        }, 1000);
        console.log(time);
        const offset = circumference - (time / seconds) * circumference;
        setOffset(offset);
        return () => {
            clearInterval(id);
        };
    }, [circumference, seconds, time]);

    const progressRing = () => {
        return (
            <div
                className="progress_ring"
                style={{
                    transform: time > 0 ? "scale(2)" : "scale(0)",
                    transition: "all 0.5s ease-in-out",
                }}
                onTransitionEnd={() => {
                    if (time === 0) {
                        setShowLoader(true);
                    }
                }}
            >
                <svg className="progress-ring-svg" width="200" height="200">
                    <circle
                        className="progress-ring__circle"
                        stroke="white"
                        strokeWidth="4"
                        fill="transparent"
                        r={radius}
                        cx="100"
                        cy="100"
                        style={{
                            strokeDasharray: `${circumference} ${circumference}`,
                            strokeDashoffset: `${offset}`,
                        }}
                    />
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dy=".3em"
                        className="heavy"
                    >
                        {calculateTime(time)}
                    </text>
                </svg>
            </div>
        );
    };

    return <>{!showLoader ? progressRing() : <Loader resume={resume} />}</>;
};

export default Counter;
