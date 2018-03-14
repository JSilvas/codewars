function solve(eq){
  return ((eq.split(/([-+*/])/g)).reverse()).join('');
}
