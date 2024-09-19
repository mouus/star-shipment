import Main from "../../components/Main";
import MainSupplier from "../../components/MainSupplier";
import Landing from "../../components/Landing";

const isAuth = false;
const iscustomer = false;

export default function Home() {
  return (
    <main>
      {isAuth ? (
        iscustomer ? <Main /> : <MainSupplier />
      ) : (
        <Landing />
      )}
    </main>
  );
}
