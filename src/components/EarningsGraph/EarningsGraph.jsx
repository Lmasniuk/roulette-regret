import * as d3 from "d3";
import "./EarningsGraph.scss";
import { useEffect, useRef } from "react";

const EarningsGraph = ({ earningsHistory }) => {
    const width = window.innerWidth * 0.6;
    let height = 0;
    console.log(window.innerWidth);
    if (window.innerWidth > 640) {
        height = window.innerHeight / 3;
    } else {
        height = window.innerHeight / 8;
    }
    const marginTop = 20;
    const marginRight = 20;
    const marginBottom = 20;
    const marginLeft = 70;

    const gx = useRef();
    const gy = useRef();
    const x = d3.scaleLinear(
        [0, earningsHistory.length - 1],
        [marginLeft, width - marginRight]
    );
    const y = d3.scaleLinear(d3.extent(earningsHistory), [
        height - marginBottom,
        marginTop,
    ]);
    const line = d3.line((d, i) => x(i), y);
    useEffect(() => {
        void d3.select(gx.current).call(d3.axisBottom(x));
    }, [gx, x]);
    useEffect(() => {
        void d3.select(gy.current).call(d3.axisLeft(y));
    }, [gy, y]);
    return (
        <>
            <div className="earnings-graph">
                <h3 className="axis-label">Earnings($)</h3>
                <svg width={width} height={height}>
                    <g
                        ref={gx}
                        transform={`translate(0,${height - marginBottom})`}
                    />
                    <g ref={gy} transform={`translate(${marginLeft},0)`} />
                    <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        d={line(earningsHistory)}
                    />
                </svg>
            </div>
            <h3 className="axis-label">Number of Spins</h3>
        </>
    );
};

export default EarningsGraph;
