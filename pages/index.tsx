import {Layout} from "../components/Layout";
import {Login} from "../components/organisms/Login";

export default function Home() {
    return (
        <Layout children={<Login/>}/>
    );
}
