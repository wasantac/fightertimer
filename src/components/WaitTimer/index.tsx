import React from "react";
import { useParams } from "react-router-dom";
import Timer from "../Timer";

type Props = {
    logo: string;
};

const WaitTimer: React.FC<Props> = (props) => {
    const { logo } = props;
    let { seconds } = useParams();
    return (
        <React.Fragment>
            {seconds ? (
                <Timer
                    logo={logo}
                    seconds={parseInt(seconds)}
                    resume={true}
                ></Timer>
            ) : (
                <Timer logo={logo} seconds={60 * 5}></Timer>
            )}
        </React.Fragment>
    );
};

export default WaitTimer;
