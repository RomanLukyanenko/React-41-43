import "./AdvantageCard.css"

export const AdvantageCard = ({ imgsrc, text, color }) => {
    return <div className="advantageCard" style={{ backgroundColor: color }}>
        <img src={imgsrc} />
        <p>{text}</p>
    </div>
}