import s from './FormHeader.module.sass';

export const FormHeader = ({ title }) => {
    return (
        <div className={s.login_header} >
            {title}
        </div>
    );
}