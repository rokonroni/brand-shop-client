import { useLoaderData, useParams } from "react-router-dom";

const Brand = () => {
    const { categoryName } = useParams();
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <h1>{categoryName}</h1>
        </div>
    );
};

export default Brand;