This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


1.- Para la implementación opte por pensar en un arquitectura similar a la hexagonal, la razón es que me gusta mantener por separado las consultas de API, crear un modelo de datos para dicha consulta, si tuviesemos métodos de tipo post, lo manageria en otro archivo por ejemplo llamado manager pero dentro del modulo de countries, de esta manera el desarrollo se hace con un modelo de datos, un informer para los métodos get y un manager para el resto de métodos (este último no se hizo porque no tenemos este tipo de métodos)

2.- Para la implementación de modo light y oscuro implementé variables de css que luego pasan por variables de scss, luego un botón en el header que me permite enviarle al body la clase deseada que maneja las variables.

3.- Para el responsive lo pensé first desktop to mobile ya que es más rápido y fácil de pensarlo y entre estilos manejo clases con grid me parece muy potentes y fiables para manejar estilos

4.- Cada componente o page tiene su pagina de estilos, estos son llamados por un index en los page y components, a su vez un index global que llama a estos sub index y este es cargado en el app principal

5.- Para pruebas unitarias solo maneje un componente compartido que sería el de agregar "." en los campos numéricos como separador

6.- Adicional no estaba en el diseño pero agregué un spinner para esperar el resultado de carga

Espero disfruten de la prueba

para instalar 
npm i

para arrancar el proyecto: 
npm run dev


pruebas unitarias
npm test


buid
npm run build
