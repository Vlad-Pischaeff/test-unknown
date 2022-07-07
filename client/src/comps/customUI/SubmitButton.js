import s from './SubmitButton.module.sass';

export const SubmitButton = ({ type="submit", value }) => {
    return (
        <input  className={s.button}
                type={type} 
                value={value} 
        />
    );
}