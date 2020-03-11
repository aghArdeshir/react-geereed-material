import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),

  createData('111Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('111Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('111Eclair', 262, 16.0, 24, 6.0),
  createData('111Cupcake', 305, 3.7, 67, 4.3),
  createData('111Gingerbread', 356, 16.0, 49, 3.9),

  createData('222Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('222Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('222Eclair', 262, 16.0, 24, 6.0),
  createData('222Cupcake', 305, 3.7, 67, 4.3),
  createData('222Gingerbread', 356, 16.0, 49, 3.9),

  createData('333Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('333Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('333Eclair', 262, 16.0, 24, 6.0),
  createData('333Cupcake', 305, 3.7, 67, 4.3),
  createData('333Gingerbread', 356, 16.0, 49, 3.9),

  createData('444Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('444Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('444Eclair', 262, 16.0, 24, 6.0),
  createData('444Cupcake', 305, 3.7, 67, 4.3),
  createData('444Gingerbread', 356, 16.0, 49, 3.9),

  createData('555Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('555Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('555Eclair', 262, 16.0, 24, 6.0),
  createData('555Cupcake', 305, 3.7, 67, 4.3),
  createData('555Gingerbread', 356, 16.0, 49, 3.9),

  createData('666Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('666Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('666Eclair', 262, 16.0, 24, 6.0),
  createData('666Cupcake', 305, 3.7, 67, 4.3),
  createData('666Gingerbread', 356, 16.0, 49, 3.9),

  createData('777Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('777Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('777Eclair', 262, 16.0, 24, 6.0),
  createData('777Cupcake', 305, 3.7, 67, 4.3),
  createData('777Gingerbread', 356, 16.0, 49, 3.9),

  createData('888 Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('888Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('888Eclair', 262, 16.0, 24, 6.0),
  createData('888Cupcake', 305, 3.7, 67, 4.3),
  createData('888Gingerbread', 356, 16.0, 49, 3.9),
];

export default function ReactGeereedMaterial() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
