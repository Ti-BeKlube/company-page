import PropTypes from "prop-types";

const TextBreaker = (
    { text, wordsPerParagraph, style }
    ) => {
    if (!text) return [];
    const words = text.split(" ");
    const paragraphs = [];

    for (let i = 0; i < words.length; i += wordsPerParagraph) {
        paragraphs.push(words.slice(i, i + wordsPerParagraph).join(" "));
    }

    return (
        <div className={style}>
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-2 space-x-2 whitespace-pre-line">{paragraph}</p>
                    )
                )
            }
        </div>);
};

TextBreaker.propTypes={
    text: PropTypes.string,
    style: PropTypes.string,
    wordsPerParagraph: PropTypes.number
}
export default TextBreaker
