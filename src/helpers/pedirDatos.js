import items from '../components/productos';

const pedirDatos = () => {
    return new Promise((resolve, reject) => {         
        setTimeout(() => {
            resolve(items)
        }, 1000)
    })
}

export default pedirDatos;