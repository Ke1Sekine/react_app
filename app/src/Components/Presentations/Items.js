import React, { useContext } from 'react';
import { CalcContext } from '../../Hooks/Contexts/Cal-context';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useItemsStyles = makeStyles((theme) => ({
  paper: {
    height: 140,
    width: 250
  }
}));

function Items(props) {
  const classes = useItemsStyles();
  const calc = useContext(CalcContext);

  return (
    <Grid key={props.unit} item>
      <Paper className={classes.paper} >
        <div className="card bg-info">
          <h3 className="card-header text-white">
            {props.title}[{props.unit}]<br />
          </h3>
          <div className="card-body bg-light val" title="ここをクリックすると入力できます。">
            <input className="field" type="text" pattern="[0-9]" onChange={(event)=> calc.dispatch({ type : props.unit ,input : Number(event.target.value)})} />
            <p>{ calc.state[props.unit]}{props.unit}</p>
          </div>
        </div>
      </Paper>
    </Grid>
  );
}

export default Items;
