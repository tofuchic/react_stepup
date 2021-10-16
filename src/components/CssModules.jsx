import classes from "./CssModules.module.scss";

export const CssModules = () => {
  return (
    <div className={classes.div}>
      <p className={classes.title}>- CSS Modules -</p>
      <button className={classes.button}>FIGHT!!!</button>
    </div>
  );
};
