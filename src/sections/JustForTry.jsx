import { memo, useState, useEffect } from 'react';

const Input = memo(({ defaultValue }) => {
    console.log("Input rendered for ParentComponent");
    return <input type="text" defaultValue={defaultValue} />;
});

const FrequentUpdateComponent = () => {
    // Припустимо, цей компонент оновлюється кожні декілька секунд
    console.log("FrequentUpdateComponent rendered");
    return <div>Часті оновлення...</div>;
};

const ParentComponent = () => {
    // Імітація частих оновлень
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, [count]);

    return (
        <div>
            <Input defaultValue="Тест" />
            <FrequentUpdateComponent />
            <div>Лічильник оновлень: {count}</div>
        </div>
    );
};

export default ParentComponent;
