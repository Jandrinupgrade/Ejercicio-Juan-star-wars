// class Coche  {
//     constructor(prop1,prop2,prop3){
//         this.color = prop1;
//         this.velocidadMax = prop2;
//         this.traccion = prop3;
//         this.abierto = false;
//     }
// velocidadMaxima(){
//     return this.velocidadMax;}
// abrirCoche(){
//     this.abierto= !this.abierto;
// }
// }
// const seatPanda = new Coche ("blanco",115,2);
// console.log(seatPanda);
// seatPanda.abrirCoche();
// console.log(seatPanda.velocidadMaxima());

class Jedi {
     constructor(health,strength){
         this.health = health;
         this.strength = strength;
     }

    attack(){
  return this.strength;
    }
receiveDamage(damage){
  this.health -= damage;
}
};

const marco = new Jedi(100,50);
 console.log(  marco.attack());
marco.receiveDamage(24);
console.log(marco.health);

class Sith extends Jedi {
  constructor (name,health,strength){
  super(health,strength);
  this.name = name;

  }
receiveDamage(damage){
super.receiveDamage(damage);
if(this.health>0){
    return `${this.name} ha recibido ${damage} puntos de daño`
}else{
    return `${this.name} ha muerto en acto de combate`
}
}


  battleCry(){
return "El lado oscuro manda";
}

};

 const aurelio = new Sith("pepe",100,50);
console.log (aurelio.battleCry());
console.log(aurelio.receiveDamage(34));
console.log(aurelio.receiveDamage(76));


class Imperial extends Jedi {

 receiveDamage(damage){
super.receiveDamage(damage);
if(this.health > 0){
    return`Un imperial ha recibido ${damage} puntos de daño`
}else{
    return `Un imperial ha muerto en combate`
}
}};

const eugenio = new Imperial(100,46);
console.log(eugenio.receiveDamage(90));
console.log(eugenio.attack());


class War {
    constructor(){
        this.sitharmy = [];
        this.imperialarmy = [];
    }

    addSith(sith){
        this.sitharmy.push(sith);
        
    };
    addImperial(imperial){
        this.imperialarmy.push(imperial);    
    };
    
    showStatus(alataquer, adefender) {
        let numAleatorio = Math.ceil((Math.random() * this.alataquer.length) -1);
        return adefender[numAleatorio].receiveDamage(alataquer[numAleatorio].attack());
    };


     sithAttack(){
        let numAleatorio = Math.ceil((Math.random() * this.imperialarmy.length) -1);
        //console.log(numAleatorio);
        return this.imperialarmy[numAleatorio].receiveDamage(this.sitharmy[numAleatorio].attack());
    };

    imperialAttack(){
        let numAleatorio = Math.ceil((Math.random() * this.sitharmy.length) -1);
        //console.log(numAleatorio);
        return this.sitharmy[numAleatorio].receiveDamage(this.imperialarmy[numAleatorio].attack());
        //return showStatus (this.imperialarmy,this.sitharmy);
    };
   
};
const dani = new Imperial(100,26);
const arias = new Imperial(100,13);
const asier = new Imperial(100,75);
const ruben = new Imperial(100,23);

const neco = new Sith("alex",100,34);
const sanro = new Sith("cris",100,75);
const ibai = new Sith("dario",100,45);
const aday = new Sith("saul",100,61);



const warOfTheWars = new War();

warOfTheWars.addSith(neco);
warOfTheWars.addSith(sanro);
warOfTheWars.addSith(ibai);
warOfTheWars.addSith(aday);


warOfTheWars.addImperial(dani);
warOfTheWars.addImperial(arias);
warOfTheWars.addImperial(asier);
warOfTheWars.addImperial(ruben);


console.log(warOfTheWars.sitharmy);
console.log(warOfTheWars.imperialarmy);
console.log(warOfTheWars.imperialarmy.length);
console.log(warOfTheWars.sithAttack());
console.log(warOfTheWars.sithAttack());
console.log(warOfTheWars.imperialAttack());
console.log(warOfTheWars.imperialAttack());
console.log(warOfTheWars.sithAttack());
console.log(warOfTheWars.imperialAttack());
console.log(warOfTheWars.sithAttack());

console.log(warOfTheWars.sitharmy);
console.log(warOfTheWars.imperialarmy);