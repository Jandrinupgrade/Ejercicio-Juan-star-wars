# Star Wars fight!

Tienes que crear las siguientes iteraciones una por una en el archivo `code.js` hasta conseguir el resultado final.

### Iteración 1: Jedi

Modifica la clase `Jedi` y añádele dos métodos: `attack()`, and `receiveDamage()`.

#### class

- Tiene que recibir **2 argumentos** (`health` & `strength`)
- Tiene que recibir la **propiedad `health`** como **primer argumento**
- Tiene que recibir la **propiedad `strength`** como **segundo argumento**

#### método `attack()`

- Tiene que ser una función
- Tiene que recibir **0 argumentos**
- Tiene que retornar **la propiedad `strength` de `Jedi`**

#### método `receiveDamage()`

- Tiene que ser una función
- Tiene que recibir **1 argumento** (the damage)
- Tiene que restar el daño recibido a la propiedad `health`
- **no debe retornar** nada

### Iteración 2: Sith

Un `Sith` es un `Jedi` con una propiedad adocional, su `name`. Además tienen un método diferente `receiveDamage()` y un nuevo método llamado, `battleCry()`.

Modifica la clase `Sith` para que herede de `Jedi`, re-implementa el método `receiveDamage()` para `Sith`, y añade un nuevo método `battleCry()`.

#### inheritance

- `Sith` tiene que **extender** de `Jedi`

#### class

- Tiene que recibir **3 argumentos** (`name`, `health` & `strength`)
- Tiene que recibir la **propiedad `name`** como **primer argumento**
- Tiene que recibir la **propiedad `health`** como **segundo argumento**
- Tiene que recibir la **propiedad `strength`** como **3rd argument**

#### método `attack()`

(Este método tiene que ser **heredado** de `Jedi`, no necesitas re-implementarlo)

- Tiene que ser una función
- Tiene que recibir **0 argumentos**
- Tiene que retornar **la propiedad `strength` del `Sith`**

#### método `receiveDamage()`

(Este método necesita ser **re-implemented** para `Sith` porque la versión de `Sith` necesita tener diferentes valores de retorno)

- Tiene que ser una función
- Tiene que recibir **1 argumento** (`damage`)
- Tiene que restar de la propiedad `health` el daño recibido
- **si el `Sith` sigue vivo**, debería retornar **"NAME ha recibido XXX puntos de daño"**
- **si el `Sith` muere**, tiene que retornar **"NAME ha muerto en acto de combate"**

#### método `battleCry()`

- Tiene que ser una función
- Tiene que recibir **0 argumentos**
- Tiene que retornar **"El lado oscuro manda!"**

### Iteración 3: Imperial

A `Imperial` un tipo mas debil que un `Jedi`. A diferencia de un `Sith`, un `Imperial` no tiene nombre. Su método `receiveDamage()` tiene que ser diferente que el de la verisón original de `Jedi`.

Modifica el constructor de la clase `Imperial`, que herede de `Jedi` y re-implementa el método `receiveDamage()` para la clase `Imperial`.

#### inheritance

- `Imperial` tiene que heredar de `Jedi`

#### class

- No tienes que incluir un método en el constructor desde 
- no tiene que incluir el método constructor ya que esta clase heredará perfectamente de la clase principal, tanto la salud como la fuerza (`extends` Jedi class)

#### método `attack()`

(Este método tiene que ser **heredado** de `Jedi`, no necesitas re-implementarlo)

- Tiene que ser una función
- Tiene que recibir **0 argumentos**
- Tiene que retornar **la propiedad `strength` del `Imperial`**

#### método `receiveDamage()`

(Este método tiene que ser **re-implementado** para `Imperial` porque la versión `Imperial` necesita tener diferentes valores de retorno)

- Tiene que ser una función
- Tiene que recibir **1 argumento** (`damage`)
- Tiene que eliminar de la propiedad `health` el daño recibido
- **si el Imperial sigue vivo**, tiene que retornar **_"Un imperial ha recibido XXX puntos de daño"_**
- **si el Imperial muere**, tiene que retornar **_"Un imperial ha muerto en combate"_**

### BONUS- Iteración 4: Guerra

Ahora llegamos a la parte buena: GUERRA! Nuestra clase `War` nos permitirá tener un ejército `Sith` y un ejército `Imperial` que luchan entre sí.

Modifica la clase `War` añade 5 métodos a esa `class`:

- `addSith()`
- `addImperial()`
- `SithAttack()`
- `ImperialAttack()`
- `showStatus()`

#### class

Cuando creamos por primera vez una `War`, los ejércitos deben estar vacíos. Agregaremos Jedis a los ejércitos mas tarde.

- Tiene que recibir **0 argumentos**
- Tiene que asignar un array vacío a la **propiedad `SithArmy`**
- Tiene que asignar un array vacío a la **propiedad `ImperialArmy`**

#### método `addSith()`

Añade 1 `Sith` al `SithArmy`. Si quieres un ejército con 10 `Sith` deberás llamar a la función 10 veces.

- Tiene que ser una función
- Tiene que recibir **1 argumento** (un objeto `Sith`)
- Tiene que añadir el `Sith` que recibe al ejército
- **no tiene que retornar** nada

#### método `addImperial()`

La versión `Imperial` de `addSith()`.

- Tiene que ser una función
- Tiene que recibir **1 argumento** (un objeto `Imperial`)
- Tiene que añadir el `Imperial` que recibe al ejército
- **no tiene que retornar** nada

#### método `SithAttack()`

El método de un `Imperial` (elegido al azar),`receiveDamage()` se tiene que invocar con el mismo valor de `strength` de un `Sith` (también elegido de manera aleatoria). Esto solo debería realizar un ataque y el `Imperial`no puede devolver el ataque.

- Tiene que ser una función
- Tiene que recibir **0 argumentos**
- Tiene que invocarse la función `receiveDamage()` de `Imperial` con la cantidad de `strength` de un `Sith`
- Tiene que eliminar a los Imperials muertos del ejército
- Tiene que retornar **resultado de invocar `receiveDamage()` de un `Imperial`** con la propiedad `strength` de un `Sith`

#### método `ImperialAttack()`

La versióm `Imperial` de `SithAttack()`. Un `Sith` recibe el daño igual a la fuersa `strength` de un `Imperial`.

- Tiene que ser una función
- Tiene que recibir **0 argumentos**
- Se tiene que invocar a `receiveDamage()` de `Sith` con la `strength` de un `Imperial`
- Tiene que eliminar a los Sith muertos del ejército
- Tiene que retornar **resultado de invocar `receiveDamage()` de un `Sith`** con la `strength` de un `Imperial`

### SUPER BONUS

Como hay mucho código repetitivo en las dos iteraciones anteriores, _SithAttack () _ y _ImperialAttack () _ intentan crear un método _generic_ y llamarlo en el caso de _SithAttack_ y en el caso de _ImperialAttack_ en lugar de usar casi el mismo código para ambos métodos.

#### método `showStatus()`

Retorna el estado actual de `War` basado en el tamaño de los ejércitos.

- Tiene que ser una función
- Tiene que recibir **0 argumentos**
- **si eñ array `Imperial` está vacío**, tiene que retornar **_"Siths have won the war of the century!"_**
- **si el array de `Sith` está vacío**, tiene que retornar **_"Imperials have fought for their lives and survived another day..."_**
- **Si exsite al menos 1 `Sith` y 1 `Imperial`**, tiene que retornar **_"Siths and Imperials are still in the thick of battle."_**