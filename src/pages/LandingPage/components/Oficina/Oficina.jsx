import React from "react";
import { Card } from './Oficina.styles'
import oficina1 from 'assets/img/oficina1.jpg'
import oficina2 from 'assets/img/oficina2.jpg'
import oficina3 from 'assets/img/oficina3.jpg'
import cubiculo1 from 'assets/img/cubiculo1.jpg'
import cubiculo2 from 'assets/img/cubiculo2.jpg'
import cabinas1 from 'assets/img/cabinas1.jpg'
import cocina from 'assets/img/cocina.jpg'
import salaReuniones from 'assets/img/sala-reuniones.jpg'
import salaConferencias from 'assets/img/sala-conferencias.jpg'


const Oficina = () => {
    return (

        <section>
            <div className="container px-5 pt-20 pb-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-16">
                    <h2>La Oficina</h2>
                    <p>Descubre nuestras instalaciones de coworking: un espacio moderno y funcional diseñado para inspirarte y hacer crecer tu negocio.</p>
                </div>
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="flex relative h-80">
                            <img alt="oficina" className="absolute inset-0 w-full h-full object-cover object-center" src={oficina1} />
                            <Card>
                                <p>Instalaciones modernas y espaciosas</p>
                            </Card>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="flex relative h-80 ">
                            <img alt="oficina" className="absolute inset-0 w-full h-full object-cover object-center" src={oficina2} />
                            <Card>
                                <p>Áreas de descanso</p>
                            </Card>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="flex relative h-80 ">
                            <img alt="oficina" className="absolute inset-0 w-full h-full object-cover object-center" src={oficina3} />
                            <Card>
                                <p>Escritorios compartidos</p>
                            </Card>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="flex relative h-80 ">
                            <img alt="oficina" className="absolute inset-0 w-full h-full object-cover object-center" src={cubiculo1} />
                            <Card>
                                <p>Cubículos aislados para mayor privacidad</p>
                            </Card>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="flex relative h-80 ">
                            <img alt="oficina" className="absolute inset-0 w-full h-full object-cover object-center" src={cubiculo2} />
                            <Card>
                                <p>Cubículos aislados para mayor privacidad</p>
                            </Card>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="flex relative h-80 ">
                            <img alt="oficina" className="absolute inset-0 w-full h-full object-cover object-center" src={cabinas1} />
                            <Card>
                                <p>Cabinas insonorizadas para llamdas y videoconferencias</p>
                            </Card>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="flex relative h-80 ">
                            <img alt="oficina" className="absolute inset-0 w-full h-full object-cover object-center" src={cocina} />
                            <Card>
                                <p>Cocina equipada y comedor</p>
                            </Card>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="flex relative h-80 ">
                            <img alt="oficina" className="absolute inset-0 w-full h-full object-cover object-center" src={salaReuniones} />
                            <Card>
                                <p>Salas de reuniones</p>
                            </Card>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="flex relative h-80 ">
                            <img alt="oficina" className="absolute inset-0 w-full h-full object-cover object-center" src={salaConferencias} />
                            <Card>
                                <p>Sala de conferencias</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Oficina;