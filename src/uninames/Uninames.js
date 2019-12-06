import React, {useState, useEffect} from 'react';

const Uninames = () => {
    let [names, setNames] = useState([]);

    useEffect(() => {
        fetch("https://uninames.com/api/?amount=25&region=nigeria")
        .then(res => res.json())
        .then(data =>{
            setNames(data)
        }, [])
    })

    return (
        <div>
            <div>
                {names.map((item, i) => (
                <div key={i}>{item.name} {item.sername}</div>
                ))}
            </div>
        </div>
    )
}

//Пример хука useEffect, но не работает данное API