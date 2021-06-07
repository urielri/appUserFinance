import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

function List(props: {
  openModal: Function;
  movs: any[];
  setFilter: Function;
  filter: string;
}): JSX.Element {
  const { openModal, movs, setFilter, filter } = props;
  return (
    <div className="list">
      <h1>Ultimos movimientos</h1>
      <Filter setFilter={setFilter} filter={filter} />
      <div className="movements">
        {movs !== undefined &&
          movs.map((res, index) => (
            <Item
              key={res.movementId}
              content={res}
              openModal={() =>
                openModal({
                  isOpen: true,
                  content: "movement",
                  movementId: res.movementId,
                })
              }
            />
          ))}
      </div>
    </div>
  );
}
function Item(props: { openModal: Function; content: any }): JSX.Element {
  const { openModal, content } = props;
  return (
    <div className="itemList" onClick={() => openModal()}>
      <div className="column">
        <h4>{content.title}</h4>
        <p>{content.concept}</p>
      </div>
      <div className="column">
        <span className="typeDate">
          {new Date(content.date).toLocaleDateString()}
        </span>
        <span className={`typeOperation ${content.typeOperation}`}>
          ${content.mount}
        </span>
      </div>
    </div>
  );
}
function Filter(props: { setFilter: Function; filter: string }): JSX.Element {
  const { setFilter, filter } = props;
  return (
    <div className="filter">
      <FormControl className='input'>
        <InputLabel id="filter-select">
          Buscar por tipo de movimiento
        </InputLabel>
        <Select
          labelId="filter-select"
          id="filter"
          name="filter"
          value={filter}
          onChange={(e: any) => {
            setFilter(e.target.value);
          }}
        >
          <MenuItem value="all">Todos los ingresos</MenuItem>
          <MenuItem value="income">Ingreso</MenuItem>

          <MenuItem value="egress">Egreso</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
export default List;
