export const miniBeatStyle = {
    position: "absolute",
    zIndex: 1,
    height: "70px",
    width: "70px",
    margin: "5px",
}

export const beatStyle = (beatState, loopStart, record, playRecord, playAll, beatStateCheck) => {
    return (
        {
            height: "80px",
            width: "80px",
            margin: "80px",
            backgroundColor: ((beatState && (loopStart || record || playRecord)) || playAll) ? "#777" : "#444",
            position: "relative",
            boxShadow: beatStateCheck === "on" ? "0 0 10px 10px #eff, 0 0 15px 15px yellow" : ((beatState && (loopStart || record || playRecord)) || playAll) ? "0 0 10px 10px #eff, 0 0 15px 15px green" : "0 0 10px 10px #eff, 0 0 12px 12px #0ff",
            borderRadius: "10%",
            cursor: "pointer",
        }
    )
}