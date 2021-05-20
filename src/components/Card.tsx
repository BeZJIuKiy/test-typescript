import React, { FC, useState } from "react";

export enum CardVariant {
    outlined = "outlined",      // Рамка
    primary = "primary",        // Полное залитие цветом
}

interface CardProps {
    width?: string;
    height?: string;
    variant?: CardVariant;
    onClick: (num: number) => void;       // Передача функции, которая ничего не возвращает, при необходимости - заменяем void
}

const Card: FC<CardProps> = ({
    width,
    height,
    variant,
    onClick,
    children
}) => {
    const [state, setState] = useState(0);
    // const state = 0;
    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.outlined ? "2px solid gray" : "none",
            background: variant === CardVariant.primary ? "lightgray" : ""
        }}
            onClick={() => onClick(state)}
        >
            { children}
        </div >
    )
}

export default Card;