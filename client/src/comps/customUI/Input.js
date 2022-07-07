import s from './Input.module.sass';

export const Input = ({ onChange, ...props }) => {

    const setType = () => {
        if (props?.text) return "text";
        if (props?.date) return "date";
        if (props?.password) return "password";
        if (props?.email) return "email";
    }

    return (
        <input  className={s.input} 
                type={setType()} 
                name={props.name}
                placeholder={props.ph}
                value={props.value}
                required 
                onChange={onChange} />
    );
}