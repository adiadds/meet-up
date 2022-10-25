import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

// jsy ham props k through variables ya function hejty hn wesy hi children props ki throught ham jsx ya content ko rap kr k bhej sakty hn, jessy k App.js ka sara content Layout mn rap kr k ham ny bhej diya

export default Layout;
