# La Batalla por el Reino Animal :octopus: :x: :wolf: 
_"La Batalla por el Reino Animal" es un juego de cartas por turnos para dos jugadores que está basado en "Mitos y Leyendas" - (https://myl.cl/)_
## Autor ✒️

- **Andrés Fabbiano** - [drewArg](https://github.com/DrewArg)
## Demo de la Tienda Web
https://drewarg.github.io/ProyectoFinalReactJs
## Librerias Externas
| Librería | Versionado | Utilización
| ------ | ------ | ------ |
| fontawesome-svg-core | ^1.3.0 | iconos de la aplicación
| react-fontawesome | ^0.1.17 |  componente oficial de fontAweseme para que sea más rapida la gestión de iconos.
| Bootrsap | ^5.1.3 | estilos
| Firebase | ^9.6.10 | reemplazo de backend
| Gh-Pages | ^3.2.3 | visualización del demo
| react | ^17.0.2 | documento en general
| react-bootstrap | ^2.2.0 | NavBar
| react-dom | ^17.0.2 | movilidad dentro y fuera del modelo de react
| react-icons | ^4.3.1 | iconos populares
| react-router-dom | ^6.2.2| creación de la aplicación

## REGLAMENTO DE JUEGO (Solicitar versión de escritorio --> JAVA)

## Tablero de Juego :game_die:

_El área de juego es el lugar en donde se ubicarán las cartas para desarrollar la batalla. Cada carta que pongas o retires del juego será puesta en un lugar específico dentro del mismo, ya que cada lugar representa una función específica. Ten en cuenta que salvo las cartas ubicadas en tu Mazo o en tu Mano, el jugador enemigo podrá ver sus especificaciones en su turno._

### Mazo :zap:

_Cada Jugador cuenta con un mazo de 30 cartas. Hasta el momento sólo hay dos tipos de mazos: Acuático y Terrestre. Al inicio de la partida se elegirá aleatoriamente quien empieza. El jugador que empiece será el que tenga la opción de elegir el mazo, al otro jugador se le asignará el restante._

### Mano :raised_hand:

_Es el área dónde se ubican las cartas que robes del mazo antes de ponerlas en juego._

### Reserva De Alimentos :apple:

_La reserva de alimentos contiene a todos los alimentos que has puesto en juego. Cuando consumes un alimento para bajar una carta al tablero o bien activar alguna habilidad, este alimento pasa sólo por el resto de este turno a la zona de Alimentos Consumidos._

### Alimentos Consumidos :green_apple:

_La zona de Alimentos Consumidos es el lugar donde se ubican los alimentos que has consumido para bajar una carta o activar alguna habilidad. Mover los alimentos de la Reserva de Alimentos a la zona de Alimentos Consumidos es la forma de representar que estás "consumiendo" los alimentos requeridos para bajar cartas o activar efectos. Al consumir un alimento este permanece en la zona de Alimentos Consumidos hasta tu próximo turno._

### Línea de Reposo :battery:

_Es el lugar a donde se bajan las cartas de Animal. Si una carta está en esta zona puedes declararla atacante o defensora, si esto ocurre, esa carta pasará a la Linea de Batalla y no podrá ser utilizada en otra batalla hasta tu próximo turno._

### Línea de Batalla :gun:

_Es el lugar donde se ubican los Animales declarados atacantes o defensores y donde se efectúa el cálculo de daño correspondiente para ver si algún jugador deberá mandar cartas de su mazo a su cementerio o no. Recuerda que si un animal está en esta Línea, no podrá ser utilizado para otra batalla hasta tu próximo turno._

### Cementerio :ghost:

_Es la zona donde van las cartas cuando son destruidas, ya sea por efectos de cartas, activar habilidades o por daño de combate._

### Línea de Apoyo :telephone_receiver:

_Es la zona donde pones el Habitat que juegas y de dónde activarás los efectos de cada uno de ellos en caso de así quererlo._

## Tipos de Carta :credit_card:

_Todas las cartas tienen un nombre y un ID. Este último será utilizado repetidamente para poner o sacar las cartas del juego._

### Alimento :pizza:

_Los alimentos sirven como "moneda" en el juego, se utilizan para "pagar" el coste de los demás tipos de cartas y de esta manera ponerlos en juego._

### Animal :panda_face:

_Los animales son las cartas que se utilizan en la batalla. Todos los animales poseen un coste y un daño. Algunos de ellos tienen un efecto._

### Habilidad :octocat:

_Las habilidades son cartas que se juegan desde la mano del jugador pagando su coste en alimentos. Estas habilidades sirven como modificadores de los animales aliados o enemigos. Las habilidades son cartas que luego de utilizadas, se destruyen._

### Habitat :earth_africa:

_Los habitats son cartas similares a las habilidades pero que se mantienen en juego indefinidamente._

## Turnos :bell:

### 1° Turno :one:

_Cada jugador robará de su mazo un total de 4 cartas para iniciar la partida._

### 2° Turno :two:

_En caso de tener la posibilidad, el jugador podrá ya sea bajar una carta al tablero de juego desde su mano o bien activar un efecto de una habilidad._


#### 1) Ver Mano
_De esta manera el jugador podrá ver las cartas que tiene en ese determinado momento en su mano._
#### 2) Bajar una Carta

_Si la carta seleccionada a bajar es un alimento, el jugador la podrá bajar sin problema. En caso de que la carta sea de otro tipo, el jugador deberá pagar el coste en alimentos de la carta a bajar._

#### 3) Activar un efecto

_Si selecciona esta opción el jugador podrá activar el efecto de alguna de sus cartas de tipo Habilidad en su mano pagando su coste._

#### 4) Pasar

_Al seleccionar esta opción, se termina el turno del jugador actual y comienza el turno del próximo jugador._

### 3° Turno en adelante :three::heavy_plus_sign:

_A partir del tercer turno, el jugador podrá:_


#### 1) Ver Mano
_De esta manera el jugador podrá ver las cartas que tiene en ese determinado momento en su mano._

#### 2) Bajar una Carta

_Si la carta seleccionada a bajar es un alimento, el jugador la podrá bajar sin problema. En caso de que la carta sea de otro tipo, el jugador deberá pagar el coste en alimentos de la carta a bajar._

#### 3) Atacar

_En caso de que el jugador que decida atacar tenga animales dispuestos en su línea de reposo, podrá moverlos de uno en uno a la línea de ataque para de esta manera dañar (mandar cartas del mazo al cementerio) el mazo enemigo._

#### 4) Activar un efecto

_Si selecciona esta opción el jugador podrá activar el efecto de alguna de sus cartas en juego (animal o habitat) y/o una habilidad en su mano._

#### 5) Ver Tablero

_En caso de que el jugador quiera ver qué cartas (si las tiene) tiene en cada zona de juego exceptuando su propio mazo, deberá seleccionar esta opción. Sin contar la mano y el mazo del jugador enemigo, el jugador podrá ver también las cartas dispuestas en el tablero enemigo._

#### 6) Pasar

_Al seleccionar esta opción, se termina el turno del jugador actual y comienza el turno del próximo jugador._

### Fin de Turno :clapper:

_Al final de cada turno el jugador robará una carta de su mazo._

## Obtención de la victoria :trophy:

_El juego termina cuando un jugador logra que el mazo oponente no tenga cartas._
