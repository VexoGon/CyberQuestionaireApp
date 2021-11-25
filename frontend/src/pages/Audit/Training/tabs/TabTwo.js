import React from "react";
import Selects from "../../../../components/Selects";
import {makeStyles} from "@material-ui/core";
import {StoreContext} from "../../constantStore";

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
    },
    fields: {
        marginTop: 20,
    },
    bttn: {
        margin: 10
    },
    label: {
        marginTop: 20,
        fontSize: 14,
        textAlign: 'left',
        paddingLeft: 14
    }
})


const TabTwo = () => {
    const classes = useStyles();
    const api = React.useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            {Selects("Do you run any cyber security awareness campaigns in your organisation?", classes.label, api.setSecAware, api.secAware, true, "secondary", api.setSecAwareScore)}
            {Selects("Does training take place on a regular cycle?", classes.label, api.setRegTraining, api.regTraining, true, "secondary", api.setRegTrainingScore)}
        </form>

    )
}

export default TabTwo