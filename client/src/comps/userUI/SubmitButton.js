import s from './SubmitButton.module.sass';

const SubmitButton = ({ type="submit", value }) => {
    return (
        <input  className={s.button}
                type={type} 
                value={value} 
        />
    );
}

export default SubmitButton;