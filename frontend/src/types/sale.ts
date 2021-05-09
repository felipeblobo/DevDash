import {Seller} from './seller';

export type Sale = {
  id: number;
  visited: number;
  deals: number;
  amount: number;
  date: string;
  seller: Seller;
}


export type SalePage = {
  
}


export type SaleSum = {
  sellerName: string;
}

export type SaleSuccess = {
  sellerName: string;
  visited: number;
  deals: number;
}