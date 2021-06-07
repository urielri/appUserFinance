import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";
import { getMov, deleteMov, editMov } from "../api";
function FormMovement(props: {
  id: string;
  closeModal: Function;
}): JSX.Element {
  const { id, closeModal } = props;
  const [button, setButton] = useState({ state: false, action: "" });

  const [form, setForm] = useState({
    title: "",
    concept: "",
    date: "",
    typeOperation: "",
    mount: "",
    userId: "",
  });
  useEffect(() => {
    async function getData() {
      getMov(id).then((res) => {
        const data = res[0];
        setForm({
          title: data.title,
          concept: data.concept,
          date: new Date(data.date).toISOString().slice(0, 10),
          mount: data.mount,
          userId: data.userId,
          typeOperation: data.typeOperation,
        });
      });
    }
    getData();
  }, []);
  useEffect(() => {
    async function mutation(action: string) {
      if (action === "edit") {
        editMov({
          title: form.title,
          concept: form.concept,
          mount: form.mount,
          date: form.date,
          id: id,
        }).then((res) => {
          if (res.serverStatus == "2") {
            closeModal({ isOpen: false, content: "movement", movementId: "" });
            setButton({ state: false, action: "" });
          }
        });
      } else {
        deleteMov(id).then((res) => {
          if (res.serverStatus == "2") {
            closeModal({ isOpen: false, content: "movement", movementId: "" });
            setButton({ state: false, action: "" });
          }
        });
      }
    }
    if (button.state) {
      mutation(button.action);
    }
  }, [button]);
  const handleinputs = (e: any) => {
    const aux: any = { ...form };
    aux[e.target.name] = e.target.value;
    setForm(aux);
  };
  return (
    <div className="form">
      <div className="header">
        <h1>Movimiento</h1>{" "}
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            setButton({ state: true, action: "delete" });
          }}
        >
          Eliminar movimiento
        </Button>
      </div>
      <TextField
        id="title"
        label="Titulo"
        name="title"
        value={form.title}
        onChange={(e) => {
          handleinputs(e);
        }}
      />
      <TextField
        id="concept"
        label="Concepto"
        name="concept"
        value={form.concept}
        onChange={(e) => {
          handleinputs(e);
        }}
      />

      <TextField
        id="mount"
        label="Monto"
        name="mount"
        value={form.mount}
        onChange={(e) => {
          handleinputs(e);
        }}
      />
      <TextField
        type="date"
        id="date"
        name="date"
        value={form.date}
        label="Fecha"
        onChange={(e) => {
          handleinputs(e);
        }}
      />
      <TextField
        id="typeOperation"
        value={form.typeOperation}
        label="Tipo de operacion"
        disabled
        onChange={(e) => {
          handleinputs(e);
        }}
      />
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          setButton({ state: true, action: "edit" });
        }}
      >
        Guardar movimiento
      </Button>
    </div>
  );
}
export default FormMovement;
//VQTZ%Z602vBYCV7>
