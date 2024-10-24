# Prueba Técnica Nox - Reisel Valle Rojas - reiselvalle@gmail.com

Este es un proyecto de [Next.js](https://nextjs.org) creado con [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Descripción

Este proyecto es una aplicación desarrollada con Next.js. Su objetivo es visualizar el maquetado del prototipo Figma (https://www.figma.com/design/xYWAxsGeOpflAYRHEaFO5d/Prueba-Tecnica-Maquetador?node-id=1-2510&node-type=frame&t=vk8bbF2hGk551czc-0).
Para lograr el objetivo este proyecto cuenta con data fake que permiten simular algunos de los flujos, por ejemplo: creacion dinámica de la navegacion del sidebar, usuarios (messenger), la data de las ordenes, etc.

## Tabla de Contenidos

- [Getting Started](#getting-started)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Problemas Conocidos](#problemas-conocidos)

## Getting Started

Primero clone el proyecto ``git clone https://github.com/RE15EL/prueba_tecnica_nox.git`` e instale las dependencias correspondientes `npm i` y ejecute el servidor de desarrollo en local: ``npm run dev``.

Luego abra http://localhost:3000 en su navegador para ver el resultado. Navegue a la ruta `/orders` para inicial el flujo indicado (Puede dar click sobre `Orders` en el sidebar).

## Características

Funcionalidades específicas - mostrar el resumen de las órdenes en forma de listado o mapa. - en modo listado se visualiza una DataTable con la informacion de las órdenes.
_ el filtro de seleccion de búsqueda `Search` está completamente funcional, este filta las órdenes por id.
_ la navegación del footer de la tabla también está funcional, lo que no existe data para habilitarla. - en modo mapa se visualiza un mapa con los marcadores relacionados a cada orden.
_ al realizar hover sobre cada marcador se visualiza el id de la orden correspondiente.
_ al dar click sobre el marcador deseado del mapa aparece un Popup con la información relacionada a la dirección de la orden.
_ la acción `View Details` del Popup realiza la navegación a la pagina correspondiente al detalle de la orden en particular, por ejemplo: `/orders/details/O-4517`.
_ la acción `Assign` del Popup muestra el modal correspondiente a `Assign To Messenger`.

## Tecnologías Utilizadas

- Next.js: Framework para React.
- React: Biblioteca para construir interfaces de usuario.
- TypeScript: Superset de JavaScript que añade tipado estático.
- Leaflet: Biblioteca para mapas interactivos (si aplica).
- Shadcn: Biblioteca (headless) de componentes accesibles y personalizables.
- React Icons: Biblioteca de íconos par react.

## Problemas Conocidos
Debido a la premura con la entrega de la maquetación, que es el objetivo de la prueba técnica, es que comparto todo la lógica para que puedan ejecutar la app y pueden visualizar la solución.
``Al día de hoy estoy intentando desplegar el proyecto en Vercel y me encuentro solucionando un issue referente al render del Mapa de Leaflet en componentes del lado del servidor.``