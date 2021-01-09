import { type } from "os";
import { useEffect } from "react";

type Props = {
    message: string;
}

function Hello({ message }: Props) {

    useEffect(() => {
        console.log('Componente Iniciado');

    }, []);


    return (
        <h1>Hello {message}</h1>
    )
}

export default Hello;