/**
 * Класс LoginForm управляет формой
 * входа в портал
 * Наследуется от AsyncForm
 * */
class LoginForm extends AsyncForm{
  /**
   * Производит авторизацию с помощью User.login
   * После успешной авторизации, сбрасывает форму,
   * устанавливает состояние App.setState( 'user-logged' ) и
   * закрывает окно, в котором находится форма
   * */
  onSubmit( options ) {
    User.login( options , (err, response) => {
      if(response.success === true){
          User.setCurrent(JSON.stringify(response.user) )
          App.setState( 'user-logged')
          App.modals.login.close()
      } else {
              console.log(err)
          return false
      }
    })
  }
}
