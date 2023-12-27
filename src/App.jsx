import { useState } from 'react';

export const App = () => {

    const [clickedCell, setClickedCell] = useState('');

    const handleTableClick = (e) => {
        if (e.target && e.target.nodeName === 'TD') {
            setClickedCell(e.target.getAttribute('data-cell-number'));
        }
    };

    const renderTable = () => {
        const rows = [];
        for (let i = 0; i < 4; i++) {
            const cells = [];
            for (let j = 0; j < 4; j++) {
                let cellNumber = 4 * i + j + 1;
                cells.push(
                    <td key={j} data-cell-number={cellNumber}>
                        {cellNumber}
                    </td>
                );
            }
            rows.push(<tr key={i}>{cells}</tr>);
        }
        return rows;
    };

    return (
        <>
            <table onClick={handleTableClick}>
                <tbody>
                    {renderTable()}
                </tbody>
            </table>
            {clickedCell && <p>Номер клікнутої комірки: {clickedCell}</p>}
        </>
    );
};
