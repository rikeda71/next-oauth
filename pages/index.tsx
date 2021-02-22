import { Layout } from "../components/Layout";
import { UserPage } from "../components/organisms/UserPage";

export default function Home() {
  return <Layout children={<UserPage />} />;
}
