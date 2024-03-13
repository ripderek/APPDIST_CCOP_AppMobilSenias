import { IconButton } from "@material-tailwind/react";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { Dialog_Error, Loader } from "@/widgets";
import {
    BarraNavegacion2,
    Navbar_app,
    Configurator,
} from "@/components/layout";
//rutas que va a tener la barra lateral
import routes from "@/routes";
import {
    useMaterialTailwindController,
    setOpenConfigurator,
    setSidenavColor,
    setFixedNavbar,
} from "@/context";
import React from "react";
import Cookies from "universal-cookie";
import { useState, useEffect, useRef } from "react";
import Head from "next/head";

import { Test_Senia_OP } from "@/pages/OP";
//IMPORT DE LA WEBCAM
import Webcam from "react-webcam";

export default function TestSenia() {
    const [controller, dispatch] = useMaterialTailwindController();
    return (
        <div className=" min-h-screen bg-blue-gray-50/50">
            <Head>
                <title> Senias</title>
            </Head>

            <div className=" ">
                {/*                 <Navbar_app user_name={"Nombre User"} titulo={"Inicio"} />
         */}
                <Test_Senia_OP />
            </div>
        </div>
    );
}
