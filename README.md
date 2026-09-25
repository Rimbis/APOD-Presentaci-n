# APOD - Astronomy Picture of the Day

App móvil hecha con **React Native** y **Expo** que consume la API pública de la NASA para mostrar la foto o video astronómico del día, junto con un historial de los últimos día (5 en total).

## Funcionalidades

- Muestra la imagen (o video) astronómica del día, con título, fecha y descripción.
- Historial de los últimos 5 días, cada uno con su propia miniatura en la parte inferior.
- Al tocar un item del historial, se reemplaza la información mostrada arriba por la de ese día en especifico.
- Manejo de estados de carga y error: si la API falla, se muestra un mensaje en vez de romper la app; en caso de tardar en cargar la pagina, se muestra un estado de carga.

## Tecnologías

- React Native
- Expo (`expo-video` para la reproducción de videos)
- TypeScript
- [NASA APOD API](https://api.nasa.gov/#apod)

## Estructura del proyecto

```
├── src/app/
│   └── index.tsx           # Pantalla principal, une todos los componentes
├── components/
│   ├── ApodCabecera.tsx    # Banner + logo + título
│   ├── ApodPrincipal.tsx   # Imagen/video + descripción del día
│   ├── HistorialLista.tsx  # Contenedor de la lista de historial
│   └── HistorialItem.tsx   # Un item individual del historial
├── hooks/
│   └── useApod.ts          # Lógica de fetch a la API (APOD del día + historial)
```

### Por qué está organizado así

El código se separó en tres capas:

- **Hooks** (`useApod.ts`): se encargan de pedir los datos a la API. `Index` no necesita saber cómo se consiguen los datos, solo los usa.
- **Componentes**: cada uno dibuja una sola parte de la pantalla (cabecera, info del día, lista de historial). Reciben lo que necesitan por **props** y no manejan estado propio de la app.
- **`index.tsx`**: solo decide qué mostrar según el estado (cargando, error, o los datos ya listos) y junta los componentes.

## Cómo correrlo

```bash
bun install
bunx expo start
```

Escaneá el QR con la app **Expo Go** en tu celular, o corré en un emulador.

## API Key

Este proyecto usa una API key personal de la NASA. Se puede conseguir una gratis en [api.nasa.gov](https://api.nasa.gov/#signUp). La key está en `hooks/useApod.ts`.


## Cosas para mejorar a futuro

- Permitir elegir la cantidad de días del historial.
- Cachear resultados para no repetir pedidos innecesarios a la API.
- Mejor visualización.