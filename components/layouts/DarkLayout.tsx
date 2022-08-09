import { FC } from "react"

interface IDarkLayout {
    children: any
}

export const DarkLayout: FC<IDarkLayout> = ({ children }) => {
    return (
        <div style={{
            backgroundColor: 'rgba(0, 0, 0,0.3)',
            borderRadius: '5px',
            padding: '10px',
        }}>
            <h4>DarkLayout</h4>
            {children}
        </div>
    )
}
