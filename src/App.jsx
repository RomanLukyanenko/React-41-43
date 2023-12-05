import { memo } from 'react';
import ParentComponent from './sections/JustForTry';

const Input = memo(({ defaultValue, onChange }) => {
    console.log("Input rendered for app");
    return (
        <input 
            type="text"
            name="username"
            id="username"
            placeholder="Ваше ім'я"
            defaultValue={defaultValue}
            onChange={onChange}
        />
    );
});

export const App = () => {
    const handleInputChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <>
            <Input defaultValue="Ім'я користувача" onChange={handleInputChange} />
            <ParentComponent />
        </>
    );
};