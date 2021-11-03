import'./styles.css';
const ModalWindow = ({active, setActive, children}) => {
    return (
        <div className ={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className ={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
            <span className="close" >×</span>
        </div>
    );
};

export default ModalWindow;