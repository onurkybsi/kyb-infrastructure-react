/**
 * Creates a global state for a kyb-infrastructure-react application via React context API
 * @author Onur Kayabasi
 */
import React from "react";
import ApplicationContextBase from "./applicationContext/models/ApplicationContextBase";
declare const ApplicationState: React.Context<ApplicationContextBase>;
export default ApplicationState;
