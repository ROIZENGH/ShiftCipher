// Write class below
class ShiftCipher {
    constructor(shift){
      this._shift = shift;
    }
    get shift(){
      return this._shift;
    }
    encrypt(str){
      let newArr = [];
      let checkChar;
      let newChar;
      str = str.toLowerCase();
      for(let i=0; i<str.length; i++){
      checkChar=str.charCodeAt(i);
      if(checkChar>= 97 && checkChar<=122){
        newChar=checkChar+this._shift;
        if(newChar>122){
          newChar=newChar-26;
        }
        newArr.push(String.fromCharCode(newChar));
      }
      else{
        newChar=checkChar;
        newArr.push(String.fromCharCode(newChar));
      }
      }
      const newStr = newArr.join("");
      return newStr.toUpperCase();
    }
  
    decrypt(str){
      let newArr = [];
      let checkChar;
      let newChar;
      str = str.toLowerCase();
      for(let i=0; i < str.length; i++){
      checkChar=str.charCodeAt(i);
      if(checkChar >= 97 && checkChar <= 122){
        newChar=checkChar-this._shift;
        if(newChar < 97){
          newChar=newChar+26;
        }
        newArr.push(String.fromCharCode(newChar));
      }
      else{
        newChar=checkChar;
        newArr.push(String.fromCharCode(newChar));
      }
      }
      const newStr = newArr.join("");
      return newStr.toLowerCase();
    }
  };
  
  
  const cipher = new ShiftCipher(2);
  console.log(cipher.encrypt('I love to code!')); // returns 'K NQXG VQ EQFG!'
  console.log(cipher.decrypt('K <3 OA RWRRA')); // returns 'i <3 my puppy'