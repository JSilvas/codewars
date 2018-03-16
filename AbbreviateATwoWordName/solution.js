function abbrevName(name){
  let splitNames = name.split(' ');
    return(`${splitNames[0].charAt(0).toUpperCase()}.${splitNames[1].charAt(0).toUpperCase()}`);
  }