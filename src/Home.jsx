import Button, { Click } from "./components/Button"

export const Home = () => (
    <div>
        <Button variant="primary" color="white" size="large" onClick={Click}> Основна кнопка </Button>
        <Button variant="gray" color="black" size="medium" disabled> Неактивна кнопка </Button>
    </div>
);
