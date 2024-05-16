import axios from "axios";

export const getQuery = async (search: string) => {
    try {
        const query = await axios.post(
            `${process.env.REACT_APP_BACKEND_API}/query`,
            {
                QUERY: search,
            }
        );
        return query;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

