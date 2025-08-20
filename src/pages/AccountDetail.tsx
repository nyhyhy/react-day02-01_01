import { useParams } from "react-router-dom";

function AccountDetail() {
    const id = useParams();
    return (
        <div>
            <h1>AccountDetail</h1>
            <p>{id.id}</p>
        </div>
    );
}
export default AccountDetail;
