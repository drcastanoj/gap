/**
 * Controlador del componente para la paginación.
 */
class PaginationController {
  /** Página actual */
  private currentPage: number = 1;

  /** Cantidad de items a mostrar por página */
  private itemsPerPage: number;

  /** Cantidad total de items que se van a mostrar. */
  private totalItems: number;

  /** Cantidad total de items que se van a mostrar. */
  private pageOptions: Array<number>;


  /** Total de páginas */
  private totalPages: number;

  /** Función que debe llamarse luego de cambiar de página. */
  private pageChange: Function;

  /** Función que debe llamarse luego de cambiar los items por página. */
  private itemsPerPageChange: Function;

  /**
   * Constructor, lo primero que hace es calcular la cantidad de páginas que se construyen, a partir del total de items y de los items por página.
   */
  constructor() {
    this.getPageOptions();
  }

  /**
   * indica si la página es la actual.
   * @param page
   * @return true si page es igual a this#currentPage
   */
  public isPageActive(page: number): boolean {
    return this.currentPage === page;
  }


  public isItemsPerPageActive(itemsPerPage: number): boolean {
    return this.itemsPerPage === itemsPerPage;
  }

  /**
   * Pasa a la página anterior.
   */
  public prevPage(): void {
    this.selectPage(this.currentPage - 1);
  }

  /**
   * Pasa a la página siguiente.
   */
  public nextPage(): void {
    this.selectPage(this.currentPage + 1);
  }

  /**
   * indica que la página se está seleccionando
   * @param page página que se seleccionó   
   */
  public selectPage(page: number): void {
    // si la página que se está asignando es la 0 o mayores al total de páginas disponibles entonces no se hace nada.
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
    this.getPageOptions();
    this.pageChange({ page: page });
  }

  /**
   * Cambia la cantidad de items por página.
   */
  public setItemsPerPage(itemsPerPage: number): void {
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
    this.itemsPerPageChange({ itemsPerPage: this.itemsPerPage });
  }
  /**
   * Genera el arreglo de opciones de número de página que se mostrarán en el html. ej: [1,2,3,4,5] para las páginas de la 1 a la 5;
   * [4,5,6,7,8,9] para mostrar las páginas de la 4 a la 9 como seleccionables.
   * 
   * Ej: Si tenemos que se muestran máximo 5 opciones al usuario (defaultMaxPageOptions), y un total de 10 páginas y la página actual es 6, 
   * se tiene lo siguiente:
   * 1, 2, 3, [4, 5, {6}, 7, 8], 9, 10
   * - tenemos las páginas de la 1 a la 10, la página 6 que está entre llaves indica que es la seleccionada, que se pone lo más cerca posible del centro 
   * en el arreglo que se retorna para que sea fácil paginar hacia atrás.
   * - los valores que están entre corchetes serán los que se devolverán en el arreglo, que son las páginas que podría seleccionar el usuario luego de haber seleccionado la página 6
   * - los valores fuera del corchete son las páginas a las que podría avanzar, o devolverse.
   */
  private getPageOptions(): Array<number> {
    // cantidad máxima de opciones a mostrar como números de página, 5 por defecto.
    let maxOptions: number;
    // página final que se va a mostrar como opción dentro de la cantidad de páginas, por defecto se asuma la página que se seleccionó.
    let lastPageNumber: number;

    // si no se ha definido los items por página se muestran todos, por tanto sólo hay una página.
    if (!this.itemsPerPage) {
      return [1];
    }

    // el total de páginas se calcula con el total de items y la cantidad de items por página.
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
    maxOptions = Math.min(5, this.totalPages);
    lastPageNumber = this.getLastPageOption(maxOptions);

    // se constriye el arreglo de las opciones de página que se van a mostrar, empezando por la última página.
    this.pageOptions = [];
    for (let pageNumber: number = 1; pageNumber <= maxOptions; pageNumber++) {
      this.pageOptions.unshift(lastPageNumber--);
    }
    return this.pageOptions;
  }

  /**
   * Calcula el valor superior del rango de páginas que se le mostrará al usuario para que realice su selección.
   * El último número de página se calcula según  el total de páginas que se pueden mostrar y la página actual, que puede ser la inicial o una seleccionada por el usario.
   * El último número del rango de páginas visibles para el usuario es necesario para cargar el arreglo con las opciones visibles, ya que se parte de éste, en orden inverso. 
   */
  private getLastPageOption(maxOptions: number): number {
    // página final que se va a mostrar como opción dentro de la cantidad de páginas, por defecto se asuma la página que se seleccionó.
    let lastPageNumber: number;
    lastPageNumber = this.totalPages;

    // se desea que la página actual quede aproximadamente en la mitad del rango de páginas, por eso se realiza esta validación, con máximo de opciones que se le mostrará al usiario. 
    if (this.currentPage + Math.floor(maxOptions / 2) <= this.totalPages) {
      lastPageNumber = this.currentPage + Math.floor(maxOptions / 2);
    }
    // si el último número de páginas es menor a la cantidad máxima de opciones entonces se asigna maxOptions a lastPageNumber porque si no se estaría mostrando una página que no existe.
    if (lastPageNumber < maxOptions) {
      lastPageNumber = maxOptions;
    }
    return lastPageNumber;
  }

 

  
}

export default PaginationController;