function stringIp (string) {
    console.log(string)
    const arrString = string.split('')
    console.log(arrString)
    console.log(arrString.length);
    if(arrString.length > 12){
        console.log('El string no puede ser convertido a ips por la cantidad de caracteres que contiene');
    }else if(arrString.length <= 12){
        const arrIps = [];
        if(arrString.length < 4){
            console.log('Hacen falta elementos para que esta cadena sea convertida a una ip');
        }
        else if(arrString.length = 4){
            arrIps.push(arrString.join('.'))
            console.log(arrIps);
            return arrIps
        }
        else if(arrString.length = 5){
            for( let i = 0; i < arrString.length; i+=4){
                arrIps.push(arrString.slice(i, i + 4));
            } 
            console.log(arrIps);
            return arrIps
        }
        else if(arrString.length = 6){
            for( let i = 0; i < arrString.length; i+=4){
                console.log(arrIps.push(arrString.slice(i, i + 4)));
            } 
            console.log(arrIps);
            return arrIps
        }
        
    }
}
stringIp('19212');

function permutaciones(str) {
    if (typeof str !== "string") {
      return TypeError("El argumento no es una cadena de texto");
    }
    if (str.length <= 2) {
      return str.length === 2 ? [str, str[1] + str[0]] : [str];
    }
    console.log(str);
    return str
      .split("")
      .reduce(
        (acc, char, index) =>
          acc.concat(
            permutaciones(str.slice(0, index) + str.slice(index + 1)).map(
              (p) => char + p
            )
          ),
        []
      );
}
permutaciones('19212')

