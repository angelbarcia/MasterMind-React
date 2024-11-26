const ProgressBar = ({max,value}) => {
    const pbWidth = `${100 * value / max}%`;
    let bgColor = "bg-info";
    if (value < (max/4)){
        bgColor = "bg-danger"
    } else if (value < (max/2)){
        bgColor = "bg-warning"
    }
    return (
        <div className="progress">
            <div className={"progress-bar ".concat(bgColor)}
                 style={{width: pbWidth}}>{value}</div>
        </div>
    );
}

export default ProgressBar;