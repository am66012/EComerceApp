import React from "react";

import classes from './MealsSummary.module.css'

const MealsSummary = props => {
    return <section className={classes.summary}>
        <h2>Delicious Food, Delivered To You</h2>
        <p>
            Chooose you dish as you want, broad selection of food available here.
        </p>
        <p>
            All your meals are prepared with high level cooking and hot cooking meals.
        </p>
    </section>
}

export default MealsSummary;