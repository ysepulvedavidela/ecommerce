import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item';

const Categorias = () => {

    const params = useParams();

    const [data, setData] = useState([]);

    const url = "../productos.json";

    const getData = async () => {
        try {
            const data = await fetch(url);
            const res = await data.json();
            setData(res);
            return res;
        } catch (error) {
            console.log(error)
        }
    }

    const dataCategory = data.filter((element) => element.category == params.nombre);

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className='category-container'>
        {dataCategory.map((element) => {
            return <Item key={element.id} data={element} />
        })}
        </div>
    )
}

export default Categorias