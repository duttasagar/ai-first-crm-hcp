import { useEffect, useState } from "react";
import { getInteractions } from "../../services/interactionService";

export default function InteractionHistory() {

    const [interactions, setInteractions] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await getInteractions();
        setInteractions(res.data);
    };

    return (
        <>
            {interactions.map(item => (
                <div key={item.id}>
                    {item.hcp_name}
                </div>
            ))}
        </>
    );
}