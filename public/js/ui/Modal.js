/**
 * Класс Modal отвечает за
 * управление всплывающими окнами.
 * В первую очередь это открытие или
 * закрытие имеющихся окон
 * */
class Modal {
  /**
   * Устанавливает текущий элемент в свойство element
   * Регистрирует обработчики событий с помощью
   * AccountsWidget.registerEvents()
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor( element ) {
    this.element = element
    this.registerEvents()
  }

  /**
   * При нажатии на элемент с data-dismiss="modal"
   * должен закрыть текущее окно
   * (с помощью метода Modal.onClose)
   * */
  registerEvents() {
    let turnOnClose = (e) => {
      this.onClose();
    }
    Array.from(this.element.querySelectorAll('[data-dismiss="modal"]')).forEach(item => {
      item.addEventListener("click", turnOnClose)
    })
  }
  /**
   * Срабатывает после нажатия на элементы, закрывающие окно.
   * Закрывает текущее окно (Modal.close())
   * */
  onClose( e ) {
    
    this.close()
  }
  /**
   * Удаляет обработчики событий
   * */
  unregisterEvents() {
    Array.from(this.element.querySelectorAll('[data-dismiss="modal"]')).forEach(item => {
      item.removeEventListener("click", turnOnClose)
    })
  }
  /**
   * Открывает окно: устанавливает CSS-свойство display
   * со значением «block»
   * */
  open() {
    this.element.style.display = "block"
  }
  /**
   * Закрывает окно: удаляет CSS-свойство display
   * */
  close(){
    this.element.style.display = "none"
  }
}
