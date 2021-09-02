import './styles.css';

const ElementCard = ({ quote, author }) => (
  <div className="element-card">
    <p className="quote">{quote}</p>
    <span className="author">{author}</span>
  </div>
)

export default ElementCard;
