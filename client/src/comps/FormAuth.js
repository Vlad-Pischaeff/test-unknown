import React, { useState } from 'react';
import FormLogin from './FormLogin';
import FormSignup from './FormSignup';

export const FormAuth = () => {
    const [ haveAccount, setHaveAccount ] = useState(false);

    return (
        <div>
            {haveAccount
                ?   <FormLogin setHaveAccount={setHaveAccount} />
                :   <FormSignup setHaveAccount={setHaveAccount} />
            }
        </div>
    );
};