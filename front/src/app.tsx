import { useState, useEffect } from "react";
import Layout from "./components/layout";
import List from "./components/list";
import Info from "./components/info";
import Modal from "./components/modal";
import { getMovs, getUser, calculate, getForFilter } from "./api";
function App() {
  const [modal, setModal] = useState({
    isOpen: false,
    content: "",
    movementId: "",
  });
  const [user, setUser] = useState({
    name: "",
    lastName: "",
    ocupation: "",
    userId: "",
  });
  const [movs, setMovs] = useState([]);
  const [contability, setContability] = useState({
    income: 0,
    egress: 0,
    balance: 0,
  });
  const [filter, setFilter] = useState("all");
  useEffect(() => {
    async function getData() {
      await getUser().then((res) => {
        setUser(res[0]);
      });
      await getMovs().then((res) => {
        setMovs(res);
      });
      const income = await calculate("income").then((res) => {
        return res[0].result;
      });
      const egress = await calculate("egress").then((res) => {
        return res[0].result;
      });
      const balance = income - egress;
      setContability({ income: income, egress: egress, balance: balance });
    }
    getData();
  }, []);
  useEffect(() => {
    async function movs() {
      if (filter === "all") {
        await getMovs().then((res) => {
          setMovs(res);
        });
      } else {
        await getForFilter(filter).then((res) => {
          setMovs(res);
        });
      }
      const income = await calculate("income").then((res) => {
        return res[0].result;
      });
      const egress = await calculate("egress").then((res) => {
        return res[0].result;
      });
      const balance = income - egress;
      setContability({ income: income, egress: egress, balance: balance });
    }
    if (!modal.isOpen) {
      movs();
    }
  }, [modal]);
  useEffect(() => {
    async function getData() {
      if (filter === "all") {
        await getMovs().then((res) => {
          setMovs(res);
        });
      } else {
        await getForFilter(filter).then((res) => {
          setMovs(res);
        });
      }
    }
    getData();
  }, [filter]);
  return (
    <Layout>
      <Info
        contability={contability}
        user={user}
        openModal={(e: {
          isOpen: boolean;
          content: string;
          movementId: string;
        }) => setModal(e)}
      />
      <List
        movs={movs}
        setFilter={setFilter}
        filter={filter}
        openModal={(e: {
          isOpen: boolean;
          content: string;
          movementId: string;
        }) => setModal(e)}
      />
      <Modal
        user={user.userId}
        isOpen={modal.isOpen}
        movementId={modal.movementId}
        closeModal={(e: {
          isOpen: boolean;
          content: string;
          movementId: string;
        }) => setModal(e)}
        content={modal.content}
      />
    </Layout>
  );
}

export default App;
