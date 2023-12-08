import { useContext } from 'react';
import { UserContext } from './UserContext';

export const Header = () => {
    const { user } = useContext(UserContext);

    return (
        <header>
            {user && <p>Ласкаво просимо, {user.username}!</p>}
        </header>
    );
};
