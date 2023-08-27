
//Colores:

const rojo={
  esFuerte(){
    return true
  }
}  
  
const verde={
  esFuerte(){
    return true
  }
}  

const naranja={
  esFuerte(){
    return true
  }
}  

const celeste={
  esFuerte(){
    return false
  }
}  

const pardo={
  esFuerte(){
    return false
  }
}  

const lila={
  esFuerte(){
    return false
  }
}  

//materiales

const cobre={
  esBrillante(){
    return true
  }
}

const vidrio={
  esBrillante(){
    return true
  }
}

const cuero={
  esBrillante(){
    return false
  }
}

const madera={
  esBrillante(){
    return false
  }
}

const lino={
  esBrillante(){
    return false
  }
}


//objetos:

const remera = {
  color: rojo,
  material: lino,
  peso(){
      return 800
  },
  esFuerte(){
    return this.color.esFuerte()
  },
  esBrillante(){
    return this.material.esBrillante()
  }
}

const pelota={
  color: pardo,
  material: cuero,
  peso(){
      return 1300
  },
  esFuerte(){
    return this.color.esFuerte()
  },
  esBrillante(){
    return this.material.esBrillante()
  }
}  

const biblioteca={
  color: verde,
  material: madera,
  peso(){
      return 8000
  },
  esBrillante(){
    return this.material.esBrillante()
  },
  esFuerte(){
    return this.color.esFuerte()    
  }
}

const muñeco={
  color: celeste,
  material: vidrio,
  pesoActual: 100,
  esBrillante() {
    return this.material.esBrillante()
  },
  esFuerte(){
    return this.color.esFuerte()    
  }, 
  cambiarPeso(unpeso){
    this.pesoActual=unpeso
  },
  peso() {
      return this.pesoActual
  },
}

const placa={
  color: rojo,
  material: cobre,
  pesoActual: 2400,
  esBrillante(){
    return this.material.esBrillante()
  },
  esFuerte(){
    return this.material.esFuerte()    
  }, 
  cambiarPeso(unpeso){
      this.pesoActual=unpeso
    },
  peso(){
      return this.pesoActual
    },
  cambiarColor(uncolor){
    this.color=uncolor
  }
}

const arito={
  color: celeste,
  material: cobre,
  peso(){
    return 180
  },
  esBrillante(){
    return this.material.esBrillante()
  },
  esFuerte(){
    return this.color.esFuerte()    
  }
}

const banquito = {
  color: naranja,
  material: madera,
  peso(){
      return 1700
  },
  esBrillante(){
    return this.material.esBrillante()
  },
  esFuerte(){
    return this.color.esFuerte()    
  }, 
  cambiarColor(uncolor){
    this.color=uncolor
  }
}


const cajita={
  color: rojo,
  material: cobre,
  contenido: arito,
  esBrillante(){
    return this.material.esBrillante()
  },
  esFuerte(){
    return this.color.esFuerte()    
  },
  peso(){
    return (400 + this.contenido.peso())
  },
  cambiarContenido(unobjeto){
    this.contenido=unobjeto
  }
}


//personas:


const rosa = {
  leGusta(objeto){
    return (objeto.peso() <= 2000)
  }
}
  

const estefania={
  leGusta(objeto){
    return objeto.esFuerte()
  }
}

const luisa={
  leGusta(objeto){
    return objeto.esBrillante()
  }
}

const juan={
  leGusta(objeto){
    return ((objeto.peso()>=1200 && objeto.peso()<=1800) || !objeto.esFuerte())
    // (1200 <= objeto.peso() <= 1800)
  }
}

const bolichito ={
  mostrador: arito,
  vidriera: remera,
  cambiarMostrador(unobjeto){
    this.mostrador=unobjeto
  },
  cambiarVidriera(unobjeto){
    this.vidriera=unobjeto
  },
  esBrillante(){
    return (this.mostrador.esBrillante() && this.vidriera.esBrillante())
  },
  esMonocromatico(){
    return (this.mostrador.color === this.vidriera.color)
  },
  estaDesequilibrado(){
    return this.mostrador.peso() > this.vidriera.peso()
  },
  tieneAlgoDeColor(uncolor){
    return (this.mostrador.color === uncolor)
  },
  puedeMejorar(){
    //puede mejorar si estaDesequilibrado true o es monocromatico true
    return (estaDesequilibrado() || esMonocromatico())
  },
  puedeOfrecerleAlgoA(persona){
    return (persona.leGusta(this.vidriera))||(persona.leGusta(this.mostrador))
  }
}




console.log(`A estefania le gusta la remera?: ${estefania.leGusta(remera)}`) //true

console.log(`A rosa le gusta la remera?: ${rosa.leGusta(remera)}`) //false
console.log(`A juan le gusta la pelota?: ${juan.leGusta(pelota)}`)
//true
console.log(`A juan le gusta la remera?: ${juan.leGusta(remera)}`)

muñeco.cambiarPeso(2100)

console.log(`A rosa le gusta el muñeco?: ${rosa.leGusta(muñeco)}`)//true el muñeco pesa +2kg

muñeco.cambiarPeso(100)
/
console.log(`A rosa le gusta el muñeco?: ${rosa.leGusta(muñeco)}`) //falso

console.log(`¿A rosa le gusta la cajita?: ${rosa.leGusta(cajita)}`)
//falso, deberia pesar 580gr

console.log(`¿A rosa le gusta la cajita?: ${rosa.leGusta(cajita)}`)//true

//console.log(`peso: ${cajita.peso()}`)

console.log(`¿A rosa le gusta la biblioteca?: ${rosa.leGusta(biblioteca)}`) 
console.log(`¿A rosa le gusta la cajita?: ${rosa.leGusta(cajita)}`) 
cajita.cambiarContenido(biblioteca)
console.log(`¿A rosa le gusta la cajita?: ${rosa.leGusta(cajita)}`) 

console.log(`¿Ambos objetos del bolichito son brillantes?: ${bolichito.esBrillante()}`) //

console.log(`¿Los objetos del bolichito son del mismo color?: ${bolichito.esMonocromatico()}`) //

bolichito.cambiarVidriera(placa)

console.log(`¿El objeto en el mostrador pesa más que el de la vidriera.?: ${bolichito.estaDesequilibrado()}`) //


console.log(`¿Alguno de los objetos del bolichito es de color celeste?: ${bolichito.tieneAlgoDeColor(celeste)}`) //

console.log(`¿Los objetos del bolichito son del mismo color?: ${bolichito.esMonocromatico()}`) //

bolichito.cambiarVidriera(remera)

console.log(`¿Puede ofrecerle algo a estefania? ${bolichito.puedeOfrecerleAlgoA(estefania)}`)


console.log(`¿Puede ofrecerle algo a juan? ${bolichito.puedeOfrecerleAlgoA(juan)}`)

bolichito.cambiarMostrador(cajita)

console.log(`¿Puede ofrecerle algo a juan? ${bolichito.puedeOfrecerleAlgoA(juan)}`)

