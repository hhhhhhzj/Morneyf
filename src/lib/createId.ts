let id:number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0
function createId(){
  id++
  window.localStorage.setItem('id_Max', id.toString())
  return id
}

export default createId