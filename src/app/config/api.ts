import { environment } from 'src/environments/environment';

export const baseUrl = environment.production ? 'http://127.0.0.1:8000/api' : 'http://localhost:3000';

export const productsUrl = baseUrl +'/products';
export const adminProductsUrl = baseUrl +'/admin/products';
export const imageUrl = 'http://127.0.0.1:8000/api/image';
export const categoriesUrl = baseUrl +'/admin/categories';



// export const addToBasketUrl = baseUrl +'/basket/add/{id}';
export const basketUrl = 'http://localhost:3000' +'/cart';
