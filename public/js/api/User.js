/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {
  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static url = "/user" ;
  
  static setCurrent(user) {
    console.log(JSON.parse(user) )
    localStorage.setItem('currentUser',  user )
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
    localStorage.removeItem('currentUser')
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current() {
    return localStorage.getItem('currentUser') 
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch( data, callback = f => f ) {
    let cloneData = {}
    cloneData.data = JSON.parse(data)

    console.log(cloneData.data)

    cloneData.method = 'GET'
    cloneData.url = User.url + "/current"
    cloneData.responseType = 'json'

    cloneData.callback = callback
    createRequest( cloneData )
  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login( data, callback = f => f ) {
    let cloneData = {}
    cloneData.data = data

    cloneData.method = 'POST'
    cloneData.url = User.url + "/login"
    cloneData.responseType = 'json'

    cloneData.callback = callback
    createRequest( cloneData )
  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static register( data, callback = f => f ){
    
    let cloneData = {}
    cloneData.data = data

    cloneData.method = 'POST'
    cloneData.url = User.url + "/register"
    cloneData.responseType = 'json'

    cloneData.callback = callback
    createRequest( cloneData )
    
    
  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout( data, callback = f => f ) {
    let cloneData = {}
    cloneData.data = data

    cloneData.method = 'POST'
    cloneData.url = User.url + "/logout"
    cloneData.responseType = 'json'

    cloneData.callback = callback
    createRequest( cloneData )
  }
}
