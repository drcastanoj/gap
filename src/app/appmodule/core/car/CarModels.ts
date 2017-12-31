

import 'app/assets/img/cadillac.jpg';
import 'app/assets/img/cadillac2.jpg';
import 'app/assets/img/cadillac3.jpg';
import 'app/assets/img/bmw1.jpg';
import 'app/assets/img/bmw2.jpg';



/** map of cars   */
export interface ICar {
  [brand: string]: {
    name: string;
    models: {
      [model: string]: {
        name: string,
        years: {
          [year: string]: {
            price: number, photo: string
          }
        }
      }
    }
  };
}

/** selected car  */
export interface ICarSelected {
  brand: string;
  model: string;
  year: number;
  price: number;
  photo: string;
}

export const cars: ICar = {
  bmx: {
    name: 'BMW',
    models: {
      ilx: {
        name: 'ILX',
        years: {
          2013: {
            price: 20000,
            photo: 'bmw1.jpg'
          },
          2012: {
            price: 20000,
            photo: 'bmw1.jpg'
          },
          2011: {
            price: 20000,
            photo: 'bmw1.jpg'
          },
          2010: {
            price: 20000,
            photo: 'bmw1.jpg'
          }
        }
      },
      mdx: {
        name: 'MDX',
        years: {
          2011: {
            price: 20000,
            photo: 'bmw2.jpg'
          },
          2010: {
            price: 20000,
            photo: 'bmw2.jpg'
          },
          2009: {
            price: 20000,
            photo: 'bmw2.jpg'
          }
        }
      }

    }
  },
  cadillac: {
    name: 'Cadillac',
    models: {
      allante: {
        name: 'Allante',
        years: {
          2000: {
            price: 500000,
            photo: 'cadillac.jpg'
          },
          2001: {
            price: 500000,
            photo: 'cadillac2.jpg'
          },
          2002: {
            price: 500000,
            photo: 'cadillac3.jpg'
          },
          2003: {
            price: 500000,
            photo: 'cadillac3.jpg'
          }
        }
      }
    }
  }
};