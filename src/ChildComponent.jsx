import React, { useEffect, useState } from 'react';

function ChildComponent({ fetchData }) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetchData().then((fetchedData) => setData(fetchedData))
    }, []);

    return (
        <div>
            {data.map((user) => <p key={user.id}>{user.name}</p>)}
        </div>
    );
}

export default ChildComponent;
