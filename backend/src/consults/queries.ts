import { Request, Response } from "express";
import { connection } from "../connect";
export const queries = {
  allMovs: async (req, res) => {
    connection.query("SELECT * FROM movements", (err, rows, fields) => {
      return res.json(rows);
    });
  },
  specificMov: async (req, res) => {
    connection.query(
      `SELECT * FROM movements WHERE movementId='${req.params.id}'`,
      (err, rows, fields) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(rows);
        }
      }
    );
  },
  specificUser: async (req, res) => {
    connection.query(`SELECT * FROM users LIMIT 1`, (err, rows, fields) => {
      return res.json(rows);
    });
  },
  newOperation: async (req, res) => {
    const { type, mount, concept, title, user, date } = req.params;
    connection.query(
      `INSERT INTO movements (movementId, typeOperation, mount, title, concept,date,userId) VALUES (NULL, '${type}', '${mount}', '${title}', '${concept}', '${date}','${user}')`,
      (err, results, fields) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(results);
        }
      }
    );
  },
  editOperation: async (req, res) => {
    const { concept, mount, title, id, date } = req.params;
    connection.query(
      `UPDATE movements SET concept = '${concept}', mount= '${mount}', title='${title}', date= '${date}' WHERE movements.movementId = ${id}`,
      (err, results, fields) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(results);
        }
      }
    );
  },
  deleteMov: async (req, res) => {
    const { id } = req.params;
    connection.query(
      `DELETE FROM movements WHERE movements.movementId = '${id}'`,
      (err, results, fields) => {
        return res.json(results);
      }
    );
  },
  calculate: async (req, res) => {
    const { type } = req.params;
    connection.query(
      `SELECT SUM(mount) AS result FROM movements WHERE typeOperation='${type}'`,
      (err, rows, fields) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(rows);
        }
      }
    );
  },
  filter: async (req, res) => {
    const { type } = req.params;
    connection.query(
      `SELECT * FROM movements WHERE typeOperation='${type}'`,
      (err, rows, fields) => {
        if (err) {
          return res.json(err);
        } else {
          return res.json(rows);
        }
      }
    );
  },
};
