import { useState, useEffect } from "react";
import { newMov } from "../api";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
function Form(props: { closeModal: Function; user: string }): JSX.Element {
  const { closeModal, user } = props;
  const currentDate = new Date().toISOString().slice(0, 10);

  const [form, setForm] = useState({
    title: "",
    concept: "",
    mount: 0,
    typeOperation: "",
    date: currentDate,
    userId: user,
  });
  const [button, setButton] = useState(false);
  const handleinputs = (e: any) => {
    const aux: any = { ...form };
    aux[e.target.name] = e.target.value;
    setForm(aux);
  };
  useEffect(() => {
    async function addOperation() {
      await newMov(form).then((res) => {
        if (res.serverStatus == "2") {
          closeModal({ isOpen: false, content: "movement", movementId: "" });
          setButton(false);
        }
      });
    }
    if (button) {
      addOperation();
    }
  }, [button]);

  return (
    <div className="form">
      <h1>Nueva operacion</h1>
      <TextField
        id="title"
        label="Titulo"
        name="title"
        onChange={(e) => {
          handleinputs(e);
        }}
      />
      <TextField
        id="concept"
        label="Concepto"
        name="concept"
        onChange={(e) => {
          handleinputs(e);
        }}
      />
      <TextField
        id="mount"
        label="Monto"
        name="mount"
        onChange={(e) => {
          handleinputs(e);
        }}
      />
      <TextField
        type="date"
        id="date"
        label="Fecha"
        defaultValue={currentDate}
        name="date"
        onChange={(e) => {
          handleinputs(e);
        }}
      />
      <FormControl>
        <InputLabel id="demo-simple-select-label">Tipo de operacion</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="typeOperation"
          value={form.typeOperation}
          onChange={(e) => {
            handleinputs(e);
          }}
        >
          <MenuItem value="income">Ingreso</MenuItem>
          <MenuItem value="egress">Egreso</MenuItem>
        </Select>
      </FormControl>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          setButton(true);
        }}
      >
        Crear nueva operacion
      </Button>
    </div>
  );
}
export default Form;
