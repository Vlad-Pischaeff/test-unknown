import s from './UserProfile.module.sass';

export const UserProfile = ({ user }) => {
    
    const getAge = date => {
        let diffDate = Date.now() - +new Date(date);
        let ageDate = new Date(diffDate);
        let age = ageDate.getUTCFullYear() - 1970;
        return age;
    }

    return (
        <div className={s.user}>
            <div className={s.user_photo} >
                <img src={user.photo} alt="user_photo"/>
            </div>
            <div className={s.user_desc}>
                <div className={s.user_name}>{user.login}</div>
                <div className={s.user_date}>{getAge(user.date)} yrs</div>
            </div>
        </div>
    );
}