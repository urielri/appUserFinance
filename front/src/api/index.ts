const API: string = "http://localhost:3030";
export const getUser = async () => {
  try {
    const request = await fetch(`${API}/user/`);
    const response = request.json();
    return response;
  } catch (error) {
    return error;
  }
};
export const getMovs = async () => {
  try {
    const request = await fetch(`${API}/movements/`);
    const response = request.json();
    return response;
  } catch (error) {
    return error;
  }
};
export const getMov = async (id: string) => {
  try {
    const request = await fetch(`${API}/movement/${id}`);
    const response = request.json();
    return response;
  } catch (error) {
    return error;
  }
};
export const deleteMov = async (id: string) => {
  try {
    const request = await fetch(`${API}/delete/movement/${id}`);
    const response = request.json();
    return response;
  } catch (error) {
    return error;
  }
};
export const editMov = async (mov: {
  title: string;
  concept: string;
  mount: string;
  id: string;
  date: string;
}) => {
  const { title, concept, mount, id, date } = mov;
  try {
    const request = await fetch(
      `${API}/edit/movement/${title}&${concept}&${mount}&${date}&${id}`
    );
    const response = request.json();
    return response;
  } catch (error) {
    return error;
  }
};
export const newMov = async (mov: {
  title: string;
  concept: string;
  date: string;
  typeOperation: string;
  userId: string;
  mount: number;
}) => {
  const { title, concept, date, typeOperation, mount, userId } = mov;
  try {
    const request = await fetch(
      `${API}/new/movement/${title}&${concept}&${mount}&${typeOperation}&${userId}&${date}`
    );
    const response = request.json();
    return response;
  } catch (error) {
    return error;
  }
};
export const calculate = async (type: string) => {
  try {
    const request = await fetch(`${API}/calculate/${type}`);
    const response = request.json();
    return response;
  } catch (error) {
    return error;
  }
};
export const getForFilter = async (type: string) => {
  try {
    const request = await fetch(`${API}/filter/${type}`);
    const response = request.json();
    return response;
  } catch (error) {
    return error;
  }
};
