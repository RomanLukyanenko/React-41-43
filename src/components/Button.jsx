
// Визначимо базовий стиль кнопки 
const baseStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    margin: '5px',
};

// Створюємо розміри для кнопки
const sizeStyles = {
    small: { fontSize: '12px', padding: '5px 10px' },
    medium: { fontSize: '14px' },
    large: { fontSize: '16px', padding: '15px 30px' },
};

const Click = () => {
    console.log('Кнопка натиснута');
};
// Компонент кнопки
const Button = ({ children, variant, color, size, disabled }) => {
    // Комбінуйте базовий стиль з розміром і кольором
    const style = {
        ...baseStyle,
        ...(sizeStyles[size] || {}),
        backgroundColor: variant === 'primary' ? 'blue' : 'gray',
        color: color || 'white',
        opacity: disabled ? 0.5 : 1,
    };

    return (
        <button style={style} disabled={disabled} onClick={Click}> {children} </button>
    );
};

export { Click }
export default Button
