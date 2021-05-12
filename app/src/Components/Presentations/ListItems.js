import Items from './Items';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const micrometer = {
  title:'マイクロメートル',
  unit: 'um'
}
const millimeter = {
  title:'ミリメートル',
  unit: 'mm'
}
const centimeter = {
  title:'センチメートル',
  unit: 'cm'
}
const meter = {
  title:'メートル',
  unit: 'm'
}

const useListItemsStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  }
}));

function ListItems(props) {
  const classes = useListItemsStyles();
  return (
    <>
    <Grid container className={classes.root} spacing={1}>
      <Grid item xs={12}>
        <Items {...micrometer} />
        <Items {...millimeter} />
        <Items {...centimeter} />
        <Items {...meter} />
      </Grid>
    </Grid>
    </>
  );
}

export default ListItems;
