

export const OptionButton = ({ id, clicked, setClicked,icon }) => {
    return (
        <div id={id} className={`${clicked === id ? "clicked" : ""} option-button`}>
            <div onClick={() => setClicked(id)} className="button__image">
                <img src={icon} alt="" />
            </div>
        </div>
    );
};
